"use strict"

const headerTitle = document.querySelector('h1.header_title'),
    menuItem = document.querySelectorAll('li.menu_item');

function removeClass () {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
}

function addClass (i = 0) {
    menuItem[i].classList.add('active');
    headerTitle.innerHTML = menuItem[i].getAttribute('data-menu');
}

removeClass();
addClass();

menuItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeClass();
        addClass(i);
    })
})

const sidebar = document.querySelector('.sidebar'),
    sidebarBurger = document.querySelector('.sidebar_burger'),
    burgerWrapper = document.querySelector('.sidebar_burger_wrapper');

sidebarBurger.addEventListener('click', () => {
    burgerWrapper.classList.toggle('active');
    sidebarBurger.classList.toggle('active');
    sidebar.classList.toggle('active');
})

const search = document.querySelector('div.header_search_wrapper');


if (window.innerWidth < 769) {
    search.classList.add('tab');

    window.addEventListener("scroll", () => {
        const scrolling = window.pageYOffset;
        if(scrolling >= 0 && scrolling <= 80) {
            search.style.top = `${80 - scrolling}px`;
            search.style.paddingLeft = `${27 + scrolling/2}px`
        }else if (scrolling >80) {
            search.style.top = `0px`
        }
        console.log(window.pageYOffset);
    });
} else {
    search.classList.remove('tab');
}

