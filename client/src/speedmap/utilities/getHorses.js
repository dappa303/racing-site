export default function getHorses(races) {
  let horsesIndex = 0;
  let allHorses = [];
  races.forEach((race, raceIndex) => {
    race.horses.forEach((horse, fieldIndex) => {
      allHorses.push({
        ...horse,
        ...{
          raceIndex: raceIndex,
          fieldIndex: fieldIndex,
          horsesIndex: horsesIndex++,
        },
      });
    });
  });
  return allHorses;
}
