/*
Odd Number- not divisible by 2
Evenn Number- divisible by 2
*/

let numberof = 85401;
if (numberof%2==0) {
  console.log("This Number is Even",numberof);
  
}else{
  console.log("This Number is Odd",numberof);
}
//This Number is Odd 85401

//Fizz Buzz fizzbuzz

let num=5220;
if (num%15==0) {
  console.log("fizzbuzz",num); 
}else if(num%3==0) {
  console.log("Fizz",num);
}else if(num%5==0) {
  console.log("Buzz",num);
}else{
  console.log("Invalid Number", num);
}