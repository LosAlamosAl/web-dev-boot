function printReverse(array) {
  for (var i=array.length-1; i>=0; i--) {
    console.log(array[i]);
  }
}

printReverse([1,2,3,4,5,6,7,8,9]);


function isUniform(array) {
  for (var i = 1; i<array.length; i++) {
    if (array[0] !== array[i])
        return false;
  }
  return true;
}

console.log(isUniform([1,1,1,1,1,1,1,1,2]));
console.log(isUniform([3,3,3,3,3,3,3,3]));
console.log(isUniform([5,4,4,4,4,4,4,4,4]));


function sumArray(array) {
  var sum = 0;
  for (var i=0; i<array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArray([1,1,1,1,1,1,1,1,1]));

function max(array) {
  var maxi = array[0];
  for (var i=1; i<array.length; i++) {
    if (array[i] > maxi)
      maxi = array[i];
  }
  return maxi;
}

console.log(max([-99873123123, -98827272, -828272, 0]));
console.log(max([1, -90, 200, -98, 2725542]));
