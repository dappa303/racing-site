import produce from "immer";

function changeHorses(horses, horsesIndex, isScratched, positionIndex) {
  return produce(horses, (draft) => {
    draft[horsesIndex].isScratched = isScratched;
    draft[horsesIndex].positionIndex = positionIndex;
  });
}
export default changeHorses;
