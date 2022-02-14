// challenge 2
const generateAstronautTag = (astronaut) => {
  const firstname = astronaut.firstName;
  const lastname = astronaut.lastName;
  const nickname = astronaut.nickname;
  const prefix = astronaut.prefix;
  return `${prefix}: ${firstname} "${nickname}" ${lastname}`;
};
module.exports = generateAstronautTag;
