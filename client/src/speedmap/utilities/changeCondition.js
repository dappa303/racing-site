import produce from "immer";

function changeCondition(races, raceIndex, condition) {
  return produce(races, (draft) => {
    draft[raceIndex].condition = condition;
  });
}
export default changeCondition;
