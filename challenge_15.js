// challenge 15
const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date(); // Do not alter this line!
  const difference = Date.parse(launchDate) - Date.parse(today);
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  console.log(days);
  return { missionName, daysRemaining: days };
};
module.exports = timeRemaining;
