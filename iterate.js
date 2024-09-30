//foreach
let array = [1,2,3];
array.forEach(function(num)
{
    console.log(num*2);
})
//map
const numbers = [10,4,3];
newNum = numbers.map(square);
console.log(newNum);
function square(value,index,array)
{
    return value **2;
}
//filter
newNum1 = numbers.filter(check);
console.log(newNum1);
function check(value,index,array){
    return value > 5;
}
//reduce
const numb = [45, 4, 9, 16, 25];
let sum = numb.reduce(reducing);
console.log(sum);
function reducing(total, value, index, array) {
  return total + value;
}
//some
const numbr = [45, 4, 9, 16, 25];
let someOver18 = numbr.some(myFunc);
console.log("some over 18 is ",someOver18);
function myFunc(value, index, array) {
  return value > 18;
}