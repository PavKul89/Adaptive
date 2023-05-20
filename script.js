const btnOpen = document.querySelector('.mobile-menu-btn');
const btnClose = document.querySelector('.mobile-menu-close');
const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');
const desktopDropDownBtn = document.querySelectorAll('.nav-icon');
const desktopDropdownMenu = document.querySelectorAll('.dropdown-menu');

btnClose.style.display = 'none';

btnOpen.addEventListener('click', () => {
    btnOpen.style.display = 'none';
    btnClose.style.display = 'block';
    mobileDropdownMenu.style.top = '12%';
} )

btnClose.addEventListener('click', () => {
    btnOpen.style.display = 'block';
    btnClose.style.display = 'none';
    mobileDropdownMenu.style.top = '-42%';
} )

for (let i = 0; i < desktopDropDownBtn.length; i = i + 1 ) {
    desktopDropDownBtn[i].addEventListener('click', ()=> {
        desktopDropdownMenu[i].classList.toggle('show-dropdown-menu');
    })
}

// const desktopDropDownBtn = document.querySelector('.nav-icon');
// const desktopDropdownMenu = document.querySelector('.dropdown-menu');
// let clickCounter = 0;
// desktopDropDownBtn.addEventListener('click', () => {
//     clickCounter = clickCounter + 1;
//     if (clickCounter % 2 === 0) {
//         desktopDropdownMenu.style.display = 'flex'
//     } else {
//         desktopDropdownMenu.style.display = 'none'
//     }
// } )







// const desktopDropDownBtnSecond = document.querySelector('.nav-icon-second');
// const desktopDropdownMenuSecond = document.querySelector('.dropdown-menu-second');
// let clickCounter = 0;
// desktopDropDownBtnSecond.addEventListener('click', () => {
//     clickCounter = clickCounter + 1;
//     if (clickCounter % 2 === 0) {
//         desktopDropdownMenuSecond.style.display = 'flex'
//     } else {
//         desktopDropdownMenuSecond.style.display = 'none'
//     }
// } )














