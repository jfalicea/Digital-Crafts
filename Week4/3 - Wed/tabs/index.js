console.log('Hello?!? Is this thing on??');

const handleClick = (e) => {
    tabHeaders.forEach(function(header){
        header.classList.remove('selected');
    });
    const el = e.target;
    el.classList.add('selected');
    const tabname = el.dataset.tabname;
    tabContents.forEach(function(tab){
        console.log(tab.dataset.tabname+'==='+tabname);
        if (tab.dataset.tabname === tabname){
            tab.classList.add('selected');
        } else {
            tab.classList.add('hidden');
            tab.classList.remove('selected');
        }
    });

};

const loadContent  = () => {
const tabHeaders = document.querySelectorAll('.item');
    const tabContents = [...document.querySelectorAll('.tab-content')];

    tabContents[0].classList.add('selected');
    tabHeaders[0].classList.add('selected');

    tabHeaders.forEach(function(tab){
        tab.addEventListener('click', handleClick);
    });
    const tabs1 = document.querySelectorAll('.item:first-child');
    const tab1 = document.querySelector('.item');
    console.log(tabs1);
    console.log(tab1);
};

document.addEventListener('DOMContentLoaded', loadContent);