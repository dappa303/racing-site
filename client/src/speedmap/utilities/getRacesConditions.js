function getRacesConditions(races) {
  return races.map((r, index) => {
    let race = {};
    race.pace = r.pace;
    race.condition = r.condition;
    race.raceIndex = index;
    return race;
  });
}
export default getRacesConditions;
