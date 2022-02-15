// challenge 14
const switchAllTogglesOn = (toggleList) => {
  for (let toggle of toggleList) {
    toggle.isOn = true;
  }
  return toggleList;
};
module.exports = switchAllTogglesOn;
