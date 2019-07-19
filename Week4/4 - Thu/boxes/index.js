console.log('*********');
const boxContainer = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box');
const mybutton = document.querySelector('.button');
const xCoord = document.getElementById('X');
const yCoord = document.getElementById('Y');
const color = document.getElementById('color');

function xRandom(){
    let min = Math.ceil(0)
    let max = Math.floor(350)
    return Math.floor(Math.random()*(max-min+1)+min)
}
function radiusRandom(){
    let min = Math.ceil(0)
    let max = Math.floor(50)
    return Math.floor(Math.random()*(max-min+1)+min)
}
function sizeRandom(){
    let min = Math.ceil(0)
    let max = Math.floor(100)
    return Math.floor(Math.random()*(max-min+1)+min)
}

function zRandom(){
    let min = Math.ceil(1)
    let max = Math.floor(20)
    return Math.floor(Math.random()*(max-min+1)+min)
}

function yRandom(){ 
    let min = Math.ceil(0)
    let max = Math.floor(545)
    return Math.floor(Math.random()*(max-min+1)+min)
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

mybutton.addEventListener('click', (e) => {
    const box1 = document.createElement('div');

    if((xCoord.value === "")||(xCoord.value==="")||(color.value==="")){
        box1.classList.add("box");
        box1.style.top = String(xRandom()) + "px";
        box1.style.borderRadius = String(radiusRandom()) + "px";
        box1.style.left = String(yRandom()) + "px";
        box1.style.backgroundColor = getRandomColor();
        box1.style.zIndex = String(zRandom)
        box1.addEventListener('mouseover', (e) => { 
            e.target.style.top = (String(xRandom())+ 'px'); 
            console.log(e.target.style.top)
            e.target.style.left = (String(yRandom())+ 'px');
            console.log(e.target.style.left)
        });
        setInterval(()=> {
            box1.style.borderRadius = String(radiusRandom()) + "px";
            box1.style.top = String(xRandom()) + "px"
            box1.style.left = String(yRandom()) + "px";
            box1.style.backgroundColor = getRandomColor()
            box1.style.height = String(sizeRandom()+'px');
            box1.style.width = String(sizeRandom()+'px');
        }, 3000)
        box1.addEventListener('click', (e) => { e.target.parentNode.removeChild(e.target); console.log('click');});
        boxContainer.appendChild(box1);
        

    } else if ((xCoord.value <= 350) && (yCoord.value>=0)&&(yCoord.value<=550)){
            box1.classList.add("box");
            box1.style.borderRadius = String(radiusRandom()) + "px";
            box1.style.top = String(xCoord.value) + "px";
            box1.style.left = String(yCoord.value) + "px";
            box1.style.backgroundColor = color.value;
            box1.addEventListener('click', (e) => { e.target.parentNode.removeChild(e.target); console.log('click');});
            box1.addEventListener('mouseover', (e) => { 
                e.target.style.top = (String(xRandom())+ 'px'); 
                console.log(e.target.style.top)
                e.target.style.left = (String(yRandom())+ 'px');
                console.log(e.target.style.left)
        });
        setInterval(()=> {
            box1.style.borderRadius = String(radiusRandom()) + "px";
            box1.style.top = String(xRandom()) + "px"
            box1.style.left = String(yRandom()) + "px";
            box1.style.backgroundColor = getRandomColor()
            box1.style.height = String(sizeRandom()+'px');
            box1.style.width = String(sizeRandom()+'px');
        }, 3000)
        boxContainer.appendChild(box1);
    } else {

        alert("Your number is out of range.")
    }  
});






/**********************************
 * //Add a form for the user to input an x and a y coordinate
 * and when the user clicks an "Add Box", it will add a new
 * "box" element to the page at that x/y coordinate INSIDE
 * THE BOX CONTAINER.
 * 
 * The HTML file is linked to both the CSS file and 
 * this JS file.
 * 
 * Have fun!
 ***********************************/

 

