

 // non parameterized function

 function testFunction()
 {
    console.log("Function is called"); 
 }
 testFunction(); // Function is called  

 // non parameterized return function

 function testFunction1()
 {
   return "Function is called";
 }

 console.log(testFunction1()); // Function is called

 // parameterized function

 function testFunction2(a,b)
 {
   console.log(a+b);
 }

 testFunction2(5,10); // 15

 // parameterized return function

 function testFunction3(a,b) 
 {
   return a+b;
 }
   console.log(testFunction3(5,10)); // 15