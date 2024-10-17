                                                                //Deep and Swallow Copy

//In JavaScript, copying objects can be done in two primary ways: shallow copy and deep copy. These methods differ in how they handle nested objects.

//Shallow Copy
//A shallow copy of an object copies the object's properties, but not the nested objects. If the original object contains other objects, only references to those objects are copied, not the objects themselves.

//Hinglish V;Shallow copy sirf object ki top-level properties ko copy karta hai, lekin nested objects ke references ko copy karta hai. Matlab, original object aur copied object ke nested objects ek hi reference ko share karte hain.
const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);

shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3 (Dono original aur copy same nested object ko refer karte hain)
//Deep Copy
//Deep copy poore object aur uske saare nested objects ko bhi copy karta hai. Matlab, deep copy ke nested objects independent hote hain aur unme changes original object ko affect nahi karte.