module.exports = getSeason = (date) => {
  if (date == undefined) return "Unable to determine the time of year!";
  if (!date.getTime || date.getMilliseconds() === 0) throw new Error();
  if (date.getMonth() >= 0 && date.getMonth() < 2) return "winter";
  if (date.getMonth() >= 2 && date.getMonth() < 5) return "spring";
  if (date.getMonth() >= 5 && date.getMonth() < 8) return "summer";
  if (date.getMonth() >= 8 && date.getMonth() < 11) return "autumn";
  if (date.getMonth() == 11) return "winter";
};
