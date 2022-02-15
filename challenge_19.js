// challenge 19
const organizeData = (receivedData) => {
  let output = {};
  for (let i of receivedData) {
    const key = i.type;
    const val = i.data;

    if (output[key]) {
      output[key].push(val);
    } else {
      output[key] = [val];
    }
  }
  return output;
};
module.exports = organizeData;
