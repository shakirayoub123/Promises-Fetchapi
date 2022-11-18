// //arrow function:-

// const obj={
//     a:10,
//     print:()=>{
//         console.log(this.a)
//     }
// }
// obj.print();

// //initially we wer write functions
// function sum(a,b){
//     return a+b;
// }

// //after es6 we can write it by arrow function

// let sum1 =(a,b)=>a+b; //no need of return and curly brackets

// //o/p will be undefined 

// let arr=[1,2,3,4,5];
// for(let x of arr){
//     console.log(x)
// }
// //it will do what for loop will do in easy way---iterate over iteravels 


//ES6-use

// "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY]"

const API = "AIzaSyC1mLyuJCH8VbZJo_EHawJDiLGn8OG8HA8"



const searchVideos = async () => {
    try {

        const find = document.getElementById('query').value
        const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${find}%202&key=${API}`)
        const data = await res.json() //we use await here coz it is also an promise so use it
        append(data.items)
        // console.log(data)
    } catch (error) {
        console.log('error')

    }
}
//tilll now we got data

const append = (videos) => { //videos is array of object
    
    let show_Videos = document.getElementById('show_Videos')
    show_Videos.innerHTML=null;

    videos.forEach(({ id: { videoId }, snippet: { title } }) => {  //power of es6
        let div = document.createElement('div');


        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.allow = "fullscreen";

        let name = document.createElement('h5');
        name.innerText = title;

        div.append(iframe, name);

        let data={
            title, // by use of es6 we dnt need to give value in local storage as we were giving it before
            videoId
        }
        div.onclick=()=>{
            showVideo(data);
        };
        show_Videos.append(div)
    });
};

    const showVideo=(x) =>{
        window.location.href='video.html';
        localStorage.setItem("video", JSON.stringify(x))
    };