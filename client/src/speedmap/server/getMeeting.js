async function getMeeting(t, d) {
  try {
    let body = { track: t, date: d };

    const response = await fetch("/speedmap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      let responseCode = response.status();
      return { loadError: true, responseCode: { responseCode } };
    } else {
      let meeting = await response.json();
      meeting.loadError = false;
      return meeting;
    }
  } catch (e) {
    return { loadError: true, responseCode: "unknown" };
  }
}

export default getMeeting;
