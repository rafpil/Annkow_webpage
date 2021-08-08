import "./styles.scss";

import "./sections/navbar/navbar.js";
import "./sections/map/map.js"

import AOS from 'aos';
import 'aos/src/sass/aos.scss';

if (window.innerWidth > 768) {

    let sectionRows = document.querySelectorAll("section.container div.row");
    [...sectionRows].forEach(section => {
        section.setAttribute("data-aos", "zoom-out");
    });

    AOS.init();
}