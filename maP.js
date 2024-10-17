//Map:
//One of the most important data structures in JavaScript is the array, which is a collection of elements. When working with arrays, it is often necessary to manipulate the elements in various ways, which is where the built-in methods map, filter, and reduce come in. Map is one of the most important methods to manipulate arrays in JavaScript.

/*
Array:An array is a special variable, which can hold more than one value:
Syntax:

const array_name = [item1, item2, ...]; 
*/
//Map - The map method is used to create a new array with the result of a callback function called on each element in the original array. The callback function takes one argument, the current element, and returns the new value for that element. For example, the following code will return an array of each element multiplied by 2:

// let myArray = [1, 2, 3, 4, 5];
// let multipliedArray = myArray.map(function(element) {
//     return element*2;
// });
// console.log(multipliedArray); // [2, 4, 6, 8, 10]
/*<==============================================================================================>*/
// let arr1=[5,8,9,6,2,7,3,0,4,56,85,66];
// let arr2=arr1.map(function(law){
//   return law*2;
// })
// console.log(arr2);

let arr3=[10,20,40,"sid",{a:100,b:200}];
let arr4=arr3.map(function(value,index,array){
  console.log(array);
  console.log(value);
  console.log(index);
  
})

//Filtter:The filter method is used to filter an array based on a certain condition. The filter method takes a callback function as its argument, which is called on each element in the array. If the function returns true, the element is included in the new filtered array. For example, the following code will return an array of all even numbers in the original array:

// let myArray = [1, 2, 3, 4, 5];
// let evenNumbers = myArray.filter(function(element) {
//     return element % 2 === 0;
// });
// console.log(evenNumbers); // [2, 4]
 
let arr5=["india","usa","canada","uk","france"];
let arr6=arr5.filter(function(value,index,array){
  return value.length<5;
})
console.log(arr6);

//Reduce - The reduce method is used to reduce an array to a single value. The reduce method takes a callback function as its argument, which is called on each element in the array. The callback function takes two arguments, the accumulator and the current element, and returns the new value for the accumulator. For example, the following code will return the sum of all elements in the array:

// let myArray = [1, 2, 3, 4, 5];
// let sum = myArray.reduce(function(acc, cur) {
//     return acc + cur;
// }, 0);
// console.log(sum); // 15

let arr7=[45,8,5,6,78,2,5,6,99,51];
let reducearray=arr7.reduce(function(accumulator,currentValue){
  return accumulator+currentValue;
})
console.log(reducearray);
/*<=============================================================================================>*/

