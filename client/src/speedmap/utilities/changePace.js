import produce from "immer";

function changePace(races, raceIndex, pace) {
  return produce(races, (draft) => {
    draft[raceIndex].pace = pace;
  });
}
export default changePace;
