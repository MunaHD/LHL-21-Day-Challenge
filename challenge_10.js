// challenge 10
const averageWindSpeed = (weatherEntries) => {
  let amount = 0;
  let numOfi = 0;
  for (let i of weatherEntries) {
    amount += i.windSpeed;
    numOfi++;
  }
  return Math.round(amount / numOfi);
};
module.exports = averageWindSpeed;
