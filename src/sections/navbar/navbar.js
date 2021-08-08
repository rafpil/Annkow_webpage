let headerPosition = document.getElementById('header').offsetTop;
let aboutPosition = document.getElementById('about').offsetTop;
let portfolioPosition = document.getElementById('portfolio').offsetTop;
let workPosition = document.getElementById('work').offsetTop;
let contactPosition = document.getElementById('contact').offsetTop;
let mapPosition = document.getElementById('map').offsetTop;

let headerNavLink = document.getElementById("headerNavLink");
let aboutNavLink = document.getElementById("aboutNavLink");
let portfolioNavLink = document.getElementById("portfolioNavLink");
let workNavLink = document.getElementById("workNavLink");
let contactNavLink = document.getElementById("contactNavLink");
let mapNavLink = document.getElementById("mapNavLink");

(() => {
    let startItemNav = document.getElementById('navbar-menu-list').getElementsByTagName('li');
    startItemNav[0].classList.add('li--active');
    startItemNav[0].children[0].classList.add('nav-link--active');
})();


window.scrollToSection = (id, event) => {
    event.preventDefault();
    document.removeEventListener('scroll', markActiveNavLink);
    window.scrollTo(0, document.getElementById(id).offsetTop - document.getElementById('header').scrollHeight);

    let menuElements = document.getElementById('navbar-menu-list').getElementsByTagName('li');
    for (let i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.remove('li--active');
        menuElements[i].children[0].classList.remove('nav-link--active');
    }

    event.target.parentElement.classList.add('li--active');
    event.target.classList.add('nav-link--active');
    setTimeout(() => document.addEventListener('scroll', markActiveNavLink), 500);
}

window.addEventListener('resize', () => {
    headerPosition = document.getElementById('header').offsetTop;
    aboutPosition = document.getElementById('about').offsetTop;
    portfolioPosition = document.getElementById('portfolio').offsetTop;
    workPosition = document.getElementById('work').offsetTop;
    contactPosition = document.getElementById('contact').offsetTop;
    mapPosition = document.getElementById('map').offsetTop;
});


document.addEventListener('scroll', markActiveNavLink);

function markActiveNavLink() {
    console.log("scroll");
    let navLink = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove('nav-link--active');
        navLink[i].parentElement.classList.remove('li--active');
    }

    if (window.scrollY < window.innerHeight / 2) {
        headerNavLink.classList.add('nav-link--active');
        headerNavLink.parentElement.classList.add('li--active');

    } else if (window.scrollY >= window.innerHeight / 2 && window.scrollY < portfolioPosition - window.innerHeight / 2) {
        aboutNavLink.classList.add('nav-link--active');
        aboutNavLink.parentElement.classList.add('li--active');

    } else if (window.scrollY >= window.innerHeight / 2 && window.scrollY < workPosition - window.innerHeight / 2) {
        portfolioNavLink.classList.add('nav-link--active');
        portfolioNavLink.parentElement.classList.add('li--active');

    } else if (window.scrollY >= window.innerHeight / 2 && window.scrollY <= contactPosition - window.innerHeight / 2) {
        workNavLink.classList.add('nav-link--active');
        workNavLink.parentElement.classList.add('li--active');

    } else if (window.scrollY >= window.innerHeight / 2 && window.scrollY <= mapPosition - window.innerHeight / 2) {
        contactNavLink.classList.add('nav-link--active');
        contactNavLink.parentElement.classList.add('li--active');

    } else {
        mapNavLink.classList.add('nav-link--active');
        mapNavLink.parentElement.classList.add('li--active');
    }
}