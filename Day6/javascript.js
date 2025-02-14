//printing something
console.log("Hello World");

//Delaration of variable
//number
//String
//Boolean
console.log("--------------------------------------------------------------------------------------------------------------------------")
 a=10
 b="abc"
 c = true

console.log(typeof(b),typeof(a),typeof(c));

d=10.5
console.log(typeof(d));

a="abc"
b=21.21
console.log(a,b);
console.log(typeof(a),typeof(b));

console.log("--------------------------------------------------------------------------------------------------------------------------")

//Secondary Data Types

array = [1,2,"abc",true,5]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

console.log("--------------------------------------------------------------------------------------------------------------------------");

//Object

// 1 st type of object

object1=
{
    "firstname":"St.Joseph",
    "lastname":"Institute of Technology",
    "depts":["CSE","ECE","ADS","It"],
    "training":"MERN"
}

console.log(object1);

// 2nd type of object

object2={}

object2["firstname"]="St.Joseph";
object2["lastname"]="Institute of Technology";

console.log(object2);
console.log(object2['firstname']);


// 3rd type of object

object3 = new Object();
console.log(object3);
object3["firstname"]="St.Joseph";
object3.lastname="Institute of Technology";
console.log(object3);
console.log("--------------------------------------------------------------------------------------------------------------------------");

//set 

set =new Set();
console.log(set);
set.add("world");
console.log(set);

console.log("--------------------------------------------------------------------------------------------------------------------------"); 
//operators
console.log("Logical AND Operators");
console.log(5&&10); // 10
console.log(true&&10); // 10
console.log(false&&10); // false
console.log(false&&true); // false
console.log(true&&false); // false
console.log("Logical OR Operators");

console.log(5||10); // 5
console.log(true||10); // true
console.log(false||10); // 10
console.log(false||true); // true
console.log(true||false); // true

console.log("Relational Operators");
a=5
b="5"

console.log(a==b); // true
console.log(a===b); // false

a='5'
b=5

console.log(a==b); // false
console.log(a===b); // false

a='4'
b=5

console.log(a!=b); // true
console.log(a!==b); // true

console.log("bit wise operators");

a=70
b=35
console.log(a&b); // 2
console.log(a|b); // 103
console.log(a^b); // 101
console.log(~1); // -2

console.log("shift operators");
//left shift

console.log(128<<1); 
//right shift

console.log("--------------------------------------------------------------------------------------------------------------------------");

//conditional statements
/*
    1.if 
    2.if else
    3.else if ladder
    4.switch
*/


console.log("--------------------------------------------------------------------------------------------------------------------------");

//looping satements

/*
    1.while
    2.do while
    3.for
    4.for in
    5.for of
    6.forEach
*/

array =[10,2,0,30,"abc",true,"hello",[1,2,3,4,5]]

for(i in array)
{
    console.log(i);
}

for(i of array)
{
    console.log(i);
}

for({key,value} of Object.entries(object1))
{
    console.log(key,value);
}

array.forEach((element)=>{
    console.log(element);
})

Object.entries(object1).forEach((key,element)=>{
    console.log(key,element);
})
console.log("--------------------------------------------------------------------------------------------------------------------------")