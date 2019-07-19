//createElement
const el = document.createElement('div');
//add the box class
el.classList.add('box');
//append the new welement to the DOM
const container = document.querySelector('.box-container');
container.appendChild(el);

//change background color of all boxes
    //select boxes from the DOM
const boxe = document.querySelectorAll('.box');
//loop through the boxes
    boxe.forEach( (box) => {
        //add an event listener that fires on click
        //update their background color
        box.addEventListener('click',(e)=>{
            const currentBg = e.target.style.backgroundColor;

// Ternary are better for assigning a SINGLE VARIBLE: 
// Ternary only resolves to TRUE AND FALSE! 
            e.target.style.backgroundColor =
                (currentBg === 'orange') ? '#bada55':
                //ADD A THIRD COLOR VIA Ternary
                (currentBg === 'blue') ? 'orange': 'blue';
                console.log(currentBg)

// Dont USE IFs to ASSIGN a SINGLE VALUE, BUT IF MORE THAN ONE VALUES ARE ASSIGNED USE AN IF STATEMENT! 

            // if(currentBg === 'orange'){
            //     e.target.style.backgroundColor = '#bada55';
            // } else { 
            //     e.target.style.backgroundColor = 'orange';
            // }
        });
    });

