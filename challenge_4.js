// challenge 4
const switchToggle = (toggle) => {
  if (toggle.isOn) {
    toggle.isOn = false;
  } else {
    toggle.isOn = true;
  }
  return toggle;
};
module.exports = switchToggle;
