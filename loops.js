//Loops----
//Loops offer a quick and easy way to do something repeatedly.

//There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

//The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

// DRY------Do Not Repear Yourself

/*
In Javascript many types of Loops such as
1. for loop
2. while loop
3. do while

*/
/*
A for loop repeats until a specified condition evaluates to false.
for loop syntax
for(){
}
*/

/*
Loop wants a 3  major conditions
1. Initiate 
2. Condition / statement
3. Update
*/

// for(i=1;i<=10;i=i+1){
// console.log("Hello",i);
// }
// let i=1
// for(; i<=20; i=i+1){
//   console.log("Javascript",i);
  
// }
// let i=1
// for(; i<=20; ){
//   console.log("Javascript",i);
//   i=i+1
// }
// console.log("c++");

//while loop

// let i=7;
// while(i<=10){
//   console.log("arshad",i);
//   i=i+1;
// }

//do while
// let i=30;
// do{
//   console.log("north",i);
  
// }while(false);

// do while loop me false hone par ek baar toh jaru chalegea..

//Nested Loop- one loop insided another loop.
// for(i=1;i<=3;i++){
//   for(j=1;j<=5;j++){
//     console.log(i,j);
    
//   }
// }


let i=1;
while(i<=3){
for(let j=1;j<=4;j++){
  console.log(i,j);
  
}
}
let ir=5;
while(ir<=3){
  for(let j=1;j<=4;j++){
    console.log(i,j);
    
  }
  ir++;
}


