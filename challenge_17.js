// challenge 17
const switchSpecificToggle = (toggleList, specificToggle) => {
  let newArr = [];
  for (let i of toggleList) {
    if (i.name === specificToggle) {
      if (!i.isOn) {
        i.isOn = true;
      }
      newArr.push(i);
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};
module.exports = switchSpecificToggle;
