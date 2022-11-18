//helper functions
// function read(id){
//     return document.getElementById(id).value;
// }


// function Translate(){

// let input =read("input-text");
// console.log("input :",input);
// }



function read(id) {
    return document.getElementById(id).value;
}


async function Translate() {
try{
    const input = read("input-text");
    console.log(input)

    const inp_lang=read('inp_lang');
    console.log('inp_lang',inp_lang)
    const out_lang=read('out_lang')
    console.log("out_lang:",out_lang);

    const res = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        body: JSON.stringify({
            q: input,
            source: inp_lang,
            target: out_lang,
            format: 'text',
        }),
        //got error of q parameter not defined
        //additional info about ur req that server might you know
        headers: {
            "Content-Type": 'application/json',
        }


    });
    const {translatedText} = await res.json();

  document.getElementById('output_value').innerText=translatedText;

    //  console.log( translatedText)
} catch(err){
    console.log('err',err)
}
}


