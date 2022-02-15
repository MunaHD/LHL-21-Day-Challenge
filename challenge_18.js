// challenge 18
const chooseLunchWinner = (listOfChoices) => {
  const choice = listOfChoices.reduce((accumulator, current) => {
    accumulator[current] = (accumulator[current] || 0) + 1;
    return accumulator;
  }, {});

  return Object.keys(choice).reduce((acc, curr) =>
    choice[acc] > choice[curr] ? acc : curr
  );
};
module.exports = chooseLunchWinner;
