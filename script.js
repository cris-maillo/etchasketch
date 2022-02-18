let parentElement = document.getElementById("container");
let newElement;

window.onload=function(){
    for (let i=0; i < 256; i++){
        newElement = document.createElement("divs");
        newElement.style.border = "1px solid black";
        newElement.style.width = "20px";
        newElement.style.height = "20px";
        parentElement.appendChild(newElement);
        // newElement.onmouseover = () => newElement.style.backgroundColor = "blue";
    }
    console.log("initialized");
 }

//  function     // for (let i=0; i < 256; i++){
    //     var square = document.getElementById("divs");
    //     square.addEventListener("mouseover", () =>{
    //         square.style.backgroundColor = "blue";
    //     });
    // }

            // newElement.addEventListener("mouseover", () =>{
        //     newElement.style.backgroundColor = "blue";
        // });






