var arr1=[0,1,6,5]
function fun(Array1)
{
  var last_position = arr1.length - 1;
  return arr1[0] == 10 || arr1[last_position] == 10;
}
console.log(fun(arr1));