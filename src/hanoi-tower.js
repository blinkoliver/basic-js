module.exports = calculateHanoi = (disksNumber, turnsSpeed) => {
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor((3600 * turns) / turnsSpeed);
  return { turns, seconds };
};
