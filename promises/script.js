//Promises :- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//1.fullfilled(success)--> resolve()   meaning that the operation was completed successfully.
//2. rejected(failure)-->reject() :- meaning that the operation failed.
//3. pending :-  initial state, neither fulfilled nor rejected.

//promises in js

//buffering
//uploading
//transaction

//Call backs():-A callback is a function passed as an argument to another function

// This technique allows a function to call another function
// A callback function can run after another function has finished

// let promise = new Promise(function(resolve, reject) {
//     alert("Hello i am a promise")
//     resolve(56) //56 is value
// })

// console.log("Hello One")
// setTimeout(function() {
//     console.log("Hello Two in 2 seconds")
// }, 2000)

// console.log("My name is " + "Hello Three")
// console.log(promise);

// setInterval is asynchronous in nature as in the above code it wont run in arranged order so its asynchronous



// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api 
// Fetch pictures from the server 
// Print downloading 
// Rest of the script 


//syntax of promise
//promise has state
//we can run promises parellely what ever the number of promised will be

//resolve: it will give us value if process id reolved
// let p = new Promise((resolve, reject)=>{
//     console.log("pending")

//     setTimeout(()=>{
//        console.log("i am full filled")
//         resolve(true)
//     },2000)

// })
// console.log(p)

//reject: it will throw an error of process isnt reolved

// let p = new Promise((resolve, reject)=>{
//     console.log("pending")

//     setTimeout(()=>{
//        console.log("i am rejected")
//         reject(new Error("i am an error"));

//     },2000)
// })
// console.log(p)


//will execute at a time 

//we can run promises parellely what ever the number of promised will be

let p1 = new Promise((resolve, reject)=>{
        console.log("pending")
    
        setTimeout(()=>{
           console.log("i am full filled")
            resolve(true)
        },2000)
    
    })
   let p2 = new Promise((resolve, reject)=>{
    console.log("pending")

    setTimeout(()=>{
    //    console.log("i am rejected")
        reject(new Error("i am an error"));

    },2000)
})

//after getting promise we will use .then and get value of our promise
// p1.then((value)=>{
//     console.log(value)
// })

//p2 was giving us error in console and by use of .catch we have handled the error or we can say we caught the eror by .catch
//it will show in console now error caught


// p2.catch((error)=>{
//     console.log("error occurs in p2")
// })
// p2.then((value)=>{
//     console.log(value)
// })

//where we use .then we need to use .catch too so that we will get error on yime

p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})



//Async await:-

// async:-async makes a function return a Promise
//await:await makes a function wait for a Promise
// async function myFunction() {
//   return "Hello";
// }



let url1 = "https://www.meme.net/babubhaiyaa.jpg";
let url2 = "https://www.meme.net/raju.jpg";
let url3 = "https://www.meme.net/shyam.jpg";

function download(url) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(`Downloading ${url}`);

      resolve(url);
    }, 3000);
  });
}

function process(url) {
  console.log(`Processing ${url}`);
}

async function main() {
  let d1 = await download(url1);

  process(d1);

  let d2 = await download(url2);

  process(d2);

  let d3 = await download(url3);

  process(d3);
}

main();

//async await makes our life easy we dnt need to write much code
//before  we using callbacks() and then we use promises it makes it much easuy then the async await makes more easy than call back and .then .catch

