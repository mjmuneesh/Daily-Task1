
//FOR/IN LOOP (to access properties and methods of an array)

// function forinExample() {
//     let product = {
//         "productid" : 700,
//         "name": "black cover",
//         "color" : "balck",
//         "standardPrice" : 500,
//         "marketPrice" : 800,
//         grossProfit : function(){
//             return this.marketPrice - this.standardPrice;
//         }
//     };

//     for(const key of product){
//         console.log("'" + key + "'" + "=" + product[key]);
//     }

// };



//FOR/OF LOOP (it is used to access elements of an array )



// let products = [
//     {
//         productid: 700,
//         name: "mobile cover",
//         color: "golden",
//         standardPrice: 500,
//         marketPrice: 800,
//     },
//     {
//         productid: 701,
//         name: "mobile cover",
//         color: "green",
//         standardPrice: 1200,
//         marketPrice: 1800,

//     },
//     {
//         productid: 702,
//         name: "mobile cover",
//         color: "red",
//         standardPrice: 2200,
//         marketPrice: 2800,   
//     }
// ];

// function forofExample() {
//     for ( const item of products ){
//         console.log(JSON.stringify(item));
      
//     }   
//     }


//BREAK STATEMENT ( break statement breaks the loop) 

// let products = [
//     {
//         productid: 700,
//         name: "mobile cover",
//         color: "golden",
//         standardPrice: 500,
//         marketPrice: 800,
//     },
//     {
//         productid: 701,
//         name: "mobile cover",
//         color: "green",
//         standardPrice: 1200,
//         marketPrice: 1800,

//     },
//     {
//         productid: 702,
//         name: "mobile cover",
//         color: "red",
//         standardPrice: 19,
//         marketPrice: 2800,   
//     }
// ];


// function breakExample(){
//     for (const item of products){
//         if (item.standardPrice < 20){
//             break;
//         }
//         console.log(item)
//     }
// }


//CONTINUE STATEMENT (this is used as sometimes we dont want to print some condititon so this helps in it )



// let products = [
//     {
//         productid: 700,
//         name: "mobile cover",
//         color: "golden",
//         standardPrice: 500,
//         marketPrice: 800,
//     },
//     {
//         productid: 701,
//         name: "mobile cover",
//         color: "green",
//         standardPrice: 1200,
//         marketPrice: 1800,

//     },
//     {
//         productid: 702,
//         name: "mobile cover",
//         color: "red",
//         standardPrice: 2000,
//         marketPrice: 2800,   
//     }
// ];


//  function continueStatement(){
//     for ( const item of products){
//         if(item.standardPrice >1000){
//             continue
//         }
//         console.log(item);
//     }
//  }