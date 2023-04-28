
// functions



// function multioftwo(a,b){
//   const multi  = a*b;
//   console.log(multi);
// }

// let a=5;
// b=77;
// multioftwo(a,b);





// function squareoftwoNum(){
//  return (a*a);  
// }

// let a=9;
// const Num = squareoftwoNum();
// console.log(Num);



// function expression 
// in function expression hoisting is not done which means that we have to declare the function first 

// const addition = (num)=>{
//     return num + num;
// }
//  console.log(addition(5));








//objects 



//  creating a function and 
// adding function to an object

// let person ={
//     name:"muneesh",
//     lastname: "sharma",
//     age:22,
//     isAdult : ()=> {
//         return person.age >= 18;
//      }
// }
// console.log(person.isAdult());



//creating an object using  variables 

// function registeruser(fname,lname){
// let person = {
//     fname,
//     lname
// };
// console.log(person);
// }
// registeruser("muneesh", "sharma");





//  assigning property in object 


// let person1 ={
//     name:"muneesh",
//     lastname: "sharma",
//     age:29,
//     isAdult : ()=> {
//         return person.age >= 18;
//      }
// }


// let person2 ={};
// Object.assign(person2,person1);

// console.log(person2.age);








// explicit binding using apply and call



// let obj ={
//     name:"muneesh",
//     age:23,
//     getage: function(location,gender) {
//         console.log(this.age,location,gender);
//     }
// }

// let obj1 ={
//     name:"momin",
//     age:24,
// }

// obj.getage.call( obj1,"jammu","male");
// obj.getage.apply(obj1,["jammu","male"]);


// another example 


// let object = {
// age:66
// }

// let object1={
//     age:77
// }

// getage = function(){
// console.log(this.age);
// }

// getage.call(object);
// getage.call(object1);


//by using bind



// const person = {
//     firstName:"muneesh",
//     lastName: "sharma",
//     fullName: function() {
//       return this.firstName + " " + this.lastName
//     }
//   }
  
//   const member = {
//     firstName:"ashima",
//     lastName: "gupta",
//   }
  
//   let x = person.fullName.bind(member);
//   console.log(x());




//external function

//here we are binding  an external function 

// let object = {
//     age:66
//     }
    
//     let object1={

//         age:77
//     }
    
//     getage = function(){
//     console.log(this.age);
//     }

//     let x= getage.bind(object);
//     x();



