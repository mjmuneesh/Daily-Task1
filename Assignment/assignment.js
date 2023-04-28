





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





/*  PROBLEM 8: concatenation of array */

// const array1 = ['1','2','1'];
// const array2 = ['1','2','1'];
// const array3 = array1.concat(array2);
// console.log(array3);
