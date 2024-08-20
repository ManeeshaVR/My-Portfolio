//preloader
window.addEventListener('load', () => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';

});


//menu button
const menuBtn = document.querySelector('.menu-btn');
const navToggle = document.querySelector('.nav_links');
const navContainer = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navToggle.classList.toggle('active');
    navContainer.classList.toggle('active');
});


//Typing Animation
var typed2 = new Typed('#type', {
    strings: ['Vimukthi Rajapaksha', 'Front-end Developer', 'Back-end Developer', 'Full-stack Developer', 'Mobile App Developer'],
    typeSpeed: 150,
    backSpeed: 70,
    loop: true,
});


//Email
(function(){
    emailjs.init("_oGA_9YH32GeReu5y");
})();

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('#message');

function sendMail(){

    let parameter = {
        name: name.value,
        email: email.value,
        message: msg.value
    };

    const serviceId = 'service_omudf14';
    const templateId = 'template_gd51cfp';

    emailjs.send(serviceId, templateId, parameter).then((res) => {
        name.value = '';
        email.value = '';
        msg.value = '';
        alert('Message send successfully.');
    }).catch((e) => {
        alert(e);
    })
}


//Animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1800,
});

//Home
ScrollReveal().reveal('.home-me img', {delay: 550, origin: 'right', interval: 300});
ScrollReveal().reveal('.home-desc', {delay: 600, origin: 'left', interval: 100});
ScrollReveal().reveal('.home-icons a', {delay: 650, origin: 'left', interval: 500});
ScrollReveal().reveal('.home-btn a', {delay: 700, origin: 'left', interval: 300});

//About
ScrollReveal().reveal('.about-title1', {delay: 500, origin: 'top'});
ScrollReveal().reveal('.slider', {delay: 550, origin: 'left', interval: 500});
ScrollReveal().reveal('.about-desc', {delay: 600, origin: 'right', interval: 500});
ScrollReveal().reveal('.about-details', {delay: 650, origin: 'right', interval: 500});
ScrollReveal().reveal('.about-skills a', {delay: 750, origin: 'bottom', interval: 200});

//Projects
ScrollReveal().reveal('.project-title1', {delay: 500, origin: 'top'});
ScrollReveal().reveal('.main_container div', {delay: 600, origin: 'bottom', interval: 150});

// //Assignments
// ScrollReveal().reveal('.assignment-title1', {delay: 500, origin: 'top'});
// ScrollReveal().reveal('.assignment_container .card', {delay: 550, origin: 'bottom', interval: 100});

//Contact
ScrollReveal().reveal('.contact-title1', {delay: 500, origin: 'top'});
ScrollReveal().reveal('.login-box div', {delay: 550, origin: 'right', interval: 100});
ScrollReveal().reveal('.contact-me img', {delay: 550, origin: 'left', interval: 300});

//Footer
ScrollReveal().reveal('.footer_col1 a', {delay: 500, origin: 'top', interval: 200});


//Background
particlesJS("particles-js",
    {"particles":{"number":{"value":10,"density":{"enable":true,"value_area":800}},
            "color":{"value":"#56317A"},
            "shape":{"type":"polygon","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},
            "opacity":{"value":0.1,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
            "size":{"value":100,"random":false,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},
            "line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
        "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
                "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
        "retina_detect":true}
);