
// var a =10;
// console.log(a); // 10

// {
//     let a=20;
//     console.log(a); // 20

//     let b=30;
//     console.log(b); // 30

//     a=40;
//     console.log(a); // 40 

//     var e =60;
//     console.log(e); // 60  

// }

// console.log(a); // 10
// console.log(e); // 60  


// // type of scope 

// // 1. Global scope
// // 2. Local scope

// var a=10;

// while(a<12)
// {
//     console.log(a); 
//     a++;

// }

// console.log(a); 

// // spread opeartor ...

// st1=["user1","user2","user3"]
// st2=["user4","user5","user6"]
// st3=["user7","user8","user9"]
// st4=[]
// stDb=[st1,st2,st3]
// stDb=[...st1,...st2,...st3,...st4]

// console.log(stDb); 

// // rest operator

// function studentDb(...stDb)
// {
//     console.log(stDb); 
// }

// //difference between spread and rest operator
// // spread operator is used to split up array elements or object properties
// // rest operator is used to merge a list of function arguments into an array

// // Destructuring operator

// var array =[10,20,30,40,50]

// var [a,b,c,d,e]=array

// console.log(a,b,c,d,e);



// // hoisting

// console.log(a); // undefined
// var a=10;
// console.log(a); // 10

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a=10;
// console.log(a); // 10

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// const a=10;
// console.log(a); // 10


// //difference  between let , var and const
// // var is function scoped and let and const are block scoped   

// // Function hoisting

funhosting ();
function funhosting()
{
    console.log("Function hoisting");
}

funhosting = () => {

    console.log("Arrow function hoisting");
}
funhosting ();