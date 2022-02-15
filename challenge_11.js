// challenge 11
const bookFreePlatform = (platformList, missionDate) => {
  let list = platformList;
  for (let i of platformList) {
    if (i.bookDate === undefined) {
      i.bookDate = missionDate;
      return list;
    }
  }
};
module.exports = bookFreePlatform;
