
// var a =[ {
//     name: "muneesh",
//     location: { city: "jammu", pincode: 180001 }

// }]

// for( var i of a){
//     for (var j in i){
//         if ( typeof i[j] == "object"){
//             for(var k in i[j]){
//                 if (k=="city")
//                 console.log(i[j][k])
//             }
//         }
//     }
// }





/*  PROBLEM 8: concatenation of array */

// const array1 = ['1','2','1'];
// const array2 = ['1','2','1'];
// const array3 = array1.concat(array2);
// console.log(array3);





/* concatenation of 3 arrays */

// const a=[1,2,3];
// const b=[3,4,5];
// const c=[6,7,8];

// const d = a.concat(b,c);
// console.log(d);









/* MAP  FUNCTION */

// const  array = [1,2,3,4];
//  const map = array.map(x => x*2 );
//  console.log(map);





/* Mapping an array of numbers to an array of square roots */

// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));
// console.log(roots);









//for each

//   const arr=[1,2,3,4];

//  arr.forEach(element => { console.log(element);

//  });





//filter method 

// function insert(item){
//     return item%2==0 && item%5==0
// }

// let array = []
// for (i = 0; i < 50; i++){

//     array.push(i);
// }
// console.log(array);

// const a=array.filter((insert));

// console.log(a);





//   this  is the filter function 


// let array = []
// for (i = 0; i < 50; i++){

//     array.push(i);
// }
// console.log(array);
// const a= array.filter((item) => item%2==0 && item%5 ==0);

// console.log(a);





// to show the names whose length is greater than 5

// let names=["muneesh", "momin", "shivam"];
//  const a = names.filter((item) => item.length>5);
//  console.log(a);


//find
//  const a = [1,10,28,48];
//  const b = a.find((item => item>10));
//  console.log(b);


//reduce 

// const array=[1,2,3,4,5];
// const initialvalue=0;
// const sum  = array.reduce( (accumulator,currentvalue) => accumulator + currentvalue, initialvalue);
// console.log(sum);


//map and sort 

// const Array= [1,2,3,4,8,33,1];
// const first  = Array.map((val=>val)).filter((item=>item%2==0));
// console.log(first);


// how to use 2 functions together 

// const Array1= [1,2,3,4,8,33,1];
// const first  = Array1.map((val=>val)).sort();
// console.log(first);



//sort in descending 

// const array=[1,2,3,4,9,8,6,5];
// array.sort((a,b) => b-a );
// console.log(array);





//splice 

//it can delete and add the values into the array but it changes the original array 

//this will insert the value in the array where we put aa in the second index  and 0 represent that we dont delete anything 


// const values = [2,3,5,7,9];
// values.splice(2,0,"aa");      
// console.log(values);



// this will delete the value 

// const values = [2,3,5,7,9];
// values.splice(2,1);     
// console.log(values);


//slice 

// it slices the array into another array and does not change the original array 

// const number =[2,4,6,78,86];
// const anotherNumber = number.slice(2,4);
// console.log(anotherNumber);








//  PROBLEM 1 : sum of digits of a number by REDUCE FUNCTION 

// const array=[1,2,3,4,5];
// const initialvalue =0;
// const sum  = array.reduce( (accumulator,currentvalue) => accumulator + currentvalue, initialvalue);
// console.log(sum);






//  Problem 2: concatenating values to an array

// const a=['a','b','c'];
//  const b  = a.concat(1,2,3);
//  console.log(b);








//  Problem 3: Armstrong number :

// const original = 371;
// let n =original;
// let sum = 0;
// while (n>0) {
//     rem  = n%10;
//     sum = sum + (rem*rem*rem);
//     n =  parseInt(n/10) ;
// }
// console.log(sum);
// if (original == sum){
//     console.log("number is armstrong");
// }
// else{
//     console.log("number is not an armstrong number");
// }






// Problem 4: fabbonic series :


// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }







//  problem 5 : filter all the prime numbers from array 

// const Array =[2,5,6,9,3,22,4,7];

// function checkprime(number){
//     if(number < 1){
//        return false;
//     }
//     else{
//         for( i=2; i<number/2; i++){
//             if(number%i==0)
//             return false;
//         }
//     }

//     return true;
// } 

// const prime = Array.filter(checkprime);
//  console.log(prime);





// truthly and falsly 


// let message = "muneesh";
// const boolean = new Boolean(message);
// console.log(boolean);






//spread operator
// it is only used only at the end 


// const value = [1, 2, 3, 4];
// function test(a, b, ...c) {
//     console.log(a, b, c)
// }

// test(...value);

