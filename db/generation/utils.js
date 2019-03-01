module.exports.stringify = (headers, records) => {
  let result = '';
  result += `${headers.join(',')}\n`;
  records.forEach((record) => {
    result += `${record.join(',')}\n`;
  });
  return result;
};
