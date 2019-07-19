console.log('Hello?!? Is this thing on??');

const el = document.createElement('div');
const txt = document.createTextNode('Hello !');
el.append(txt);
el.classList.add('addbg');
document.body.appendChild(el);

function handleClick(event){
    console.log(event);
    const el = document.createElement('div');
    el.innerText = "Im a new div";
    document.body.appendChild(el);
}
el.addEventListener('click', handleClick);

/*
let str = "12+3+5+2";
const data = str.split(/\+/g);
console.log(data);
*/