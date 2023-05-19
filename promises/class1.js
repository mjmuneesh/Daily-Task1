
let promise1 = new Promise(function(resolve, reject){
    console.log('pending promise')
setTimeout(()=>{
    // console.log("promise is resolved");
    resolve(true)
},3000)
});

let promise2 = new Promise(function(resolve, reject){
    console.log('pending promise')
setTimeout(()=>{
    // console.log("promise is rejected");
    reject(new Error("error"))
},3000)
});
// console.log(promise1,promise2);



//To get the value
promise1.then((value)=>{
    console.log(value);
})

//To catch the error
promise2.catch((error)=>{
    console.log("some error occured in promise2")
})
