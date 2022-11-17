// let p = fetch("https://goweather.herokuapp.com/weather/Ny");
// p.then((response) => {
//     // console.log(response.status)
//     // console.log(response.ok)
//     return response.json(); // data will get in object form 

// }).then((value2) => {  //we used .then means we have two promises
//     console.log(value2)
// })
// //we got array of forcast from api till now
// //step1. fetch()-----we get promise and the promise will be reolved by another .then
// // gettinng a response is a 2 stage process so used 2 .thens

const url = `https://fakestoreapi.com/products`;

let container = document.getElementById("container");


fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (res) {
        appendData(res)
    })
    .catch(function (err) {
        console.log("err:", err)
    });

function appendData(data) {
    data.forEach(function (el) {
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let title = document.createElement("p");
        title.innerText = el.title;

        let id = document.createElement('h3');
        id.innerText = el.id

        let price = document.createElement('p')
        price.innerText = el.price;


        let rating = document.createElement('p')
        rating.innerText = el.rating;




        div.append(id, rating, image, price, title)

        container.append(div);

    });
}
