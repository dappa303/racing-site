function getHorseType(horses, raceIndex, isScratched, num) {
  const horseTypes = horses
    .filter((h) => h.raceIndex === raceIndex && h.isScratched === isScratched)
    .sort((h1, h2) => h1.barrier - h2.barrier)
    .map((h, index) => {
      return { ...h, ...{ effectiveBarrier: index + 1 } };
    })
    .sort((h1, h2) => h2.positionIndex - h1.positionIndex);

  let positions = [];
  let nextHorse = horseTypes.pop();
  for (let i = 0; i < num; i++) {
    if (nextHorse && nextHorse.positionIndex === i) {
      positions.push(nextHorse);
      nextHorse = horseTypes.pop();
    } else {
      positions.push(null);
    }
  }

  return positions;
}
export default getHorseType;
