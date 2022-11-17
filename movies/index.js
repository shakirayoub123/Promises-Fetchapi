// https://www.omdbapi.com/?apikey=569932b0&s=



// function searchMovies(){


//     let search = document.getElementById('search').value ;

//     const url = `https://www.omdbapi.com/?apikey=569932b0&s=${search}`;
    
//     fetch(url)
//     .then(function(res){
//         console.log(res.json())
//     })
// }


let img_arr=["https://www.joblo.com/wp-content/uploads/2010/05/inception-poster-quad-1.jpg",
"https://i.ytimg.com/vi/Msigx2eqO6s/maxresdefault.jpg","https://wallpaperaccess.com/full/300505.jpg",
"https://miro.medium.com/max/1011/1*GWXxksXY1kTMVqyk_-bacQ.png",
" https://material.asset.catchplay.com/PAR-TW-002-A1060/artworks/posters/PAR-TW-002-A1060-P1200.jpg?hash=1649364331",
"https://m.media-amazon.com/images/I/71+l6VMgw2L._SL1470_.jpg",
"https://www.vintagemovieposters.co.uk/wp-content/uploads/2015/01/IMG_0916.jpg",
"https://cdn.traileraddict.com/vidquad/fox-searchlight/thenamesake/1.jpg",
"https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/1680/-/0/69/57/35b4eaa07e8211ecae02a10117616ec1_1643375475064_l_medium.jpg",
"https://dyn1.heritagestatic.com/lf?set=path%5B9%2F5%2F9%2F1%2F9591199%5D&call=url%5Bfile%3Aproduct.chain%5D"];


img_arr.map(function(){

    let img_div = document.getElementById("slideshow");

    let i=0;
    let img = document.createElement('img');
    img.setAttribute('id','image')

    setInterval(function(){

        if(i==img_arr.length)
        {
            i = 0;
        }

        img_div.innerHTML=null;
        img.src = img_arr[i];
        img_div.append(img);

        i++;
    },2000)

})





let id;

async function searchMovies(){
    try{
    const query = document.getElementById("search").value;

     let res = await fetch(`https://www.omdbapi.com/?apikey=569932b0&s=${query}`)

     const data = await res.json()
     console.log("Data:",data)

       let movies = data.Search
       
      return movies


     }catch(err){
        
        console.log("Error:",err)
     }
}


function appendMovies(data){

    document.getElementById('movies').innerHTML=null;
    data.forEach(function(ele){
        let p = document.createElement("p");
        p.innerText = ele.Title;
        p.setAttribute('id','suggest')
        document.getElementById('movies').append(p)
       
        p.addEventListener('click',function(){
            displayData(data)
        })
        
    })


    function displayData(data){
        data.forEach(function(ele){

           let box = document.createElement('div');
           box.setAttribute('id', 'box')

           let poster = document.createElement('img');
           poster.setAttribute('id','poster')
           poster.src= ele.Poster;

           let title = document.createElement('h2');
           title.setAttribute('id','title')
           title.innerText = ele.Title;

           let yor = document.createElement('p');
           yor.setAttribute('id','yor')
           yor.innerText= `Release Year: ${ele.Year}`;

           let imdb = document.createElement('p')
           imdb.setAttribute('id','imdb')
           imdb.innerText = `IMDB Rating ${ele.imdbID}`;

           box.append(poster, title, yor, imdb);

           document.getElementById('showMovies').append(box)

        })
    }

}





async function main(){

    let data = await searchMovies();

    if(data == undefined){
        //  return false;
         let img = document.createElement("img")
         img.src='https://media2.giphy.com/media/rqoATGnsKBWqaM53Rl/200w.webp?cid=ecf05e47nzfg3w4kbmzuibhbze2g63v56xrp43njboq0403k&rid=200w.webp&ct=g'
           
         document.getElementById('error').append(img)
     }

     appendMovies(data)

 }


 // debouncing

 function debounce(func,delay){

     if(id){
         clearTimeout(id)
     }

   id = setTimeout(function(){
     func();
    },delay);

 }