module.exports = function countCats(arrayOfArr) {
  let result = arrayOfArr.reduce((resultCount, arr) =>
  resultCount + arr.reduce((countArr, row) => 
  countArr + (row == '^^' ? 1 : 0),0),0);
  return result;
};