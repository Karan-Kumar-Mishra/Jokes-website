
let a= document.getElementById("joke");
let b= document.getElementById("punch");
async function fetch_jokes()
{
    let data= await fetch("https://official-joke-api.appspot.com/jokes/random") ;
    let info= await data.json();
    a.innerHTML=info.setup;
    b.innerHTML=info.punchline;
}
fetch_jokes();
