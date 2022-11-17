// const url = `https://api.openweathermap.org/data/2.5/weather?q=jammu&appid=3aaf58fcc0c049ffc50c26b14a4e7780`;

// fetch(url)

//     .then(function (res) {
//         return res.json();
//     })
//     .then(function (res) {
//         console.log('res:', res)
//     })
//     .catch(function (err) {
//         console.log('err:', err)
//     })


function getData() {
    let city = document.getElementById('city').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3aaf58fcc0c049ffc50c26b14a4e7780`
    fetch(url)

        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            appendData(res)
            console.log('res:', res)

        })
        .catch(function (err) {
            console.log('err:', err)
        })
    //till now everything is working




}

function appendData(data) {

    let container = document.getElementById('container');
    let map = document.getElementById('gmap_canvas')
    container.innerHTML = null; //this will fix the bug data will removed once we will search for new one
    let city = document.createElement('p');
    city.innerText = `City: ${data.name}`

    //using dollar with backtick (`) we can add more data to display as we have used above in the city 

    let min = document.createElement('p');
    min.innerText = `Min-Temp: ${data.main.temp_min}`;

    let max = document.createElement('p');
    max.innerText = `Max-Temp: ${data.main.temp_max}`;

    let current = document.createElement('p');
    current.innerText = `Current-Temp: ${data.main.temp}`;

    let humidity = document.createElement('p');
    humidity.innerText = `Humidity: ${data.main.humidity}`;


    container.append(city, min, max, current, humidity)
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}

// src="