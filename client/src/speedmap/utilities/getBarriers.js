function getBarriers(horses, raceIndex) {
  return horses
    .filter((h) => h.raceIndex === raceIndex && !h.isScratched)
    .sort((h1, h2) => h1.barrier - h2.barrier);
}
export default getBarriers;
