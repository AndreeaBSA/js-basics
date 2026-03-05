// selector dupa clasa    .test
// selector dupa tag        p
//selector  dupa id          #nume
//document.querySelector  primul element
//document.querySelectorAll toate elementele

let lista=document.querySelectorAll(".up");

//lista[0]-> p


let buttons=Array.from(lista);

let hideButton = document.querySelector('#toggleList');

function cafea(){

    console.log("test")
     console.log("test2")
}

// hideButton.addEventListener("click",()=>{


//     console.log("test");

// });

hideButton.addEventListener("click",cafea);
lista[2].addEventListener("click",cafea);

let inputFirst = document.querySelector('input[type="text"]');

let inputSecond = document.querySelectorAll('input[type="text"')[1];


inputFirst.value="ceva";

inputSecond.value="test";