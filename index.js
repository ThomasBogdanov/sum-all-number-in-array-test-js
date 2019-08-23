
function sumItems(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return sumItems(array.slice(1)) + (Array.isArray(array[0]) ? sumItems(array[0]) : array[0]);
    // if (Array.isArray(array[0])) {
    //   return sumItems(array[0]) + sumItems(array.slice(1));
    // } else {
    //   return array[0] + sumItems(array.slice(1));
    // }
  }


  // if (array.length === 0) {
  //   return 0;
  // };
  // console.log(array[0]);
  // if (Array.isArray(array[0])) {
  //   return sumItems(array[0]);
  // } else {

  // return array[0] + sumItems(array.slice(1));
  // }
};

//console.log(sumItems([[1,2],[3],[[[[4]]]],5]));
module.exports = sumItems;
