const express = require("express");

const router = express.Router();

router.route("/").post(async function (req, res) {
  let collection = req.app.locals.speedmaps;
  let track = req.body.track;
  let date = req.body.date;

  try {
    const options = {
      sort: { date: -1 },
      projection: { _id: 0, track: 1, date: 1 },
    };
    const allMeetings = await collection.find({}, options).toArray();

    if (allMeetings.length === 0) {
      res.json({ noMeeting: true });
    } else if (allMeetings.length === 1) {
      let meeting = await collection.findOne(allMeetings[0], { _id: 0 });
      meeting.noMeeting = false;
      meeting.otherMeetings = null;
      res.json(meeting);
    } else {
      if (track === null) {
        let meeting = await collection.findOne(allMeetings[0], { _id: 0 });
        allMeetings.splice(0, 1);
        meeting.otherMeetings = allMeetings;
        meeting.noMeeting = false;
        res.json(meeting);
      } else {
        let meetingIndex = allMeetings.findIndex(
          (m) => m.track === track && m.date.toISOString() === date
        );

        let meeting = await collection.findOne(allMeetings[meetingIndex], {
          _id: 0,
        });
        //console.log(allMeetings);
        allMeetings.splice(meetingIndex, 1);
        meeting.otherMeetings = allMeetings;
        meeting.noMeeting = false;
        //console.log("fin " + meeting.track);
        res.json(meeting);
      }
    }
  } catch (e) {
    res.status(500).end();
  }
});

router.route("/condition").patch(async function (req, res) {
  const collection = req.app.locals.speedmaps;
  let track = req.body.track;
  let date = req.body.date;
  let race = req.body.race;
  let condition = req.body.condition;

  let filter = {};
  filter.track = track;

  filter.date = new Date(date);
  let update = {
    $set: JSON.parse(`{"races.${race}.condition" : "${condition}"}`),
  };

  try {
    let result = await collection.updateOne(filter, update);
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.route("/pace").patch(async function (req, res) {
  const collection = req.app.locals.speedmaps;
  let track = req.body.track;
  let date = req.body.date;
  let race = req.body.race;
  let pace = req.body.pace;
  let filter = {};
  filter.track = track;
  filter.date = new Date(date);
  let update = {
    $set: JSON.parse(`{"races.${race}.pace" : "${pace}"}`),
  };

  try {
    let result = await collection.updateOne(filter, update);
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.route("/move").patch(async function (req, res) {
  const collection = req.app.locals.speedmaps;
  let track = req.body.track;
  let date = req.body.date;
  let race = req.body.race;
  let horse = req.body.horse;
  let scratched = req.body.scratched;
  let position = req.body.position;
  let filter = {};
  filter.track = track;
  filter.date = new Date(date);
  let updateStr1 = `{"races.${race}.horses.${horse}.isScratched" : ${scratched},`;
  let updateStr2 = `"races.${race}.horses.${horse}.positionIndex" : ${position}}`;
  let updateStr = updateStr1.concat(updateStr2);
  let update = {
    $set: JSON.parse(updateStr),
  };

  try {
    let result = await collection.updateOne(filter, update);
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
});
module.exports = router;
