const navs = document.querySelectorAll('.nav-btn');
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll(".tab-changer");
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const navMenu = document.getElementById('nav-menu');
const hamburgerLink = document.querySelectorAll('.hamburger-link');


navs.forEach((nav)=>{
    nav.addEventListener('click',()=>{
        navs.forEach(nav=>{nav.classList.remove('active')})

        nav.classList.add('active')
    })
})

tabs.forEach((tab, index)=>{
    tab.addEventListener('click',()=>{
        // To remove active tab from previous tab
        tabs.forEach(tab=>{tab.classList.remove('active-tab')});
        tab.classList.add('active-tab');

        // To show content according to tab selected
        contents.forEach(content => content.classList.remove('tab-active'));
        contents[index].classList.add("tab-active");
    })
})

menu.addEventListener('click',()=>{
    navMenu.classList.remove('hidden');
})

closeBtn.addEventListener('click',()=>{
    navMenu.classList.add('hidden');
})

hamburgerLink.forEach((link)=>{
    link.addEventListener('click',()=>{
        navMenu.classList.add('hidden');
    })
})
