let parentElement = document.getElementById("container");
let newElement;
let squares;
let size;


window.onload=function(){
    parentElement.style.gridTemplateColumns = `repeat(16, 1fr)`
    parentElement.style.gridTemplateRows = `repeat(16, 1fr)`
    for (let i=0; i < 256; i++){
        newElement = document.createElement("divs");
        newElement.style.border = "1px solid black";
        newElement.style.width = "20px";
        newElement.style.height = "20px";
        parentElement.appendChild(newElement);
    }
    const btn = document.querySelector('#reset');
    btn.addEventListener('click', () => {
    squares.forEach((square) => {square.style.backgroundColor = "white";});
    newGrid();
    });
    addSketch();
 }

 function addSketch(){
    squares = document.querySelectorAll('#container > divs');
    squares.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            });
    });
    console.log(parentElement);
    console.log("initialized");
 }

 function newGrid(){
    oldSquares = document.querySelectorAll('#container > divs');
    console.log(oldSquares);
    oldSquares.forEach((oldSquare) => {
        oldSquare.remove()});

    size = prompt("How many squares do you want?");

    parentElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    parentElement.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i=0; i < (size*size); i++){
        newElement = document.createElement("divs");
        newElement.style.border = "1px solid black";
        newElement.style.width = "20px";
        newElement.style.height = "20px";
        parentElement.appendChild(newElement);
    }
    addSketch();
 }




