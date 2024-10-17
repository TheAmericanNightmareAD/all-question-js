//Function Constructor:JavaScript mein, function constructor ek function hai jo naye objects banane aur unhe initialize karne ke liye use hota hai. Ye ek blueprint jaisa hota hai jo objects ke liye properties aur methods define karta hai. Function constructor ko new keyword ke sath use kiya jata hai.
//Parameters:

//arg*: It is an optional parameter. A function can contain any number of string arguments.
Function 
//Body: It is an argument that contains the Javascript statements containing the function definition.

function cars(name,price){
  this.name = name;
  this.price = price;
}
let car1 = new cars("BMW",200000);
let car2= new cars("Audi",300000);
console.log(car1);  

//Person Constructor
function person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
      console.log('Hello, my name is ' + this.name);
      console.log('and my age is' + this.age);
      
  };
}

const john = new person('rekha', 30);
john.sayHello();

//Book Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function() {
      return `${this.title} by ${this.author}, published in ${this.year}`;
  };
}

const myBook = new Book('1984', 'George Orwell', 1949);
console.log(myBook.getSummary());  // Output: 1984 by George Orwell, published in 1949
/*<===================================================================================>*/
function newBook(authorName,bookName,publishDate){
this.authorName=authorName;
this.bookName=bookName;
this.publishDate=publishDate;
this.price=function(){
  return`${this.authorName} by ${this.bookName}, publish in ${this.publishDate}`;
};
}
let bookon=new newBook('munshiPremchander', 'antarala',1980)
console.log(bookon.price());

//Rectangle Constructor
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function() {
      return this.width * this.height;
  };
  this.perimeter = function() {
      return 2 * (this.width + this.height);
  };
}

const rect = new Rectangle(10, 5);
console.log('Area:', rect.area());           // Output: Area: 50
console.log('Perimeter:', rect.perimeter()); // Output: Perimeter: 30


function areaofRectange(length,breadth,height){
  this.length=length;
  this.breadth=breadth;
  this.height=height;
  this.areaof=function(){
    return 2*(this.length+this.breadth+this.height);
  };
}
let areais=new areaofRectange(5,6,8);
console.log(`area of`,areais.areaof());
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

let arr = [10,20,30]

arr.map((maal)=>{
  console.log(maal)
})
