// challenge 12
const parseTranscripts = (messages) => {
  let list = [];
  for (let message of messages) {
    list.push(`${message.origin}: ${message.message}`);
  }
  return list;
};
module.exports = parseTranscripts;
