// /*
// 	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
// */
//
// const elts = {
//     text1: document.getElementById("text1"),
//     text2: document.getElementById("text2")
// };
//
// // The strings to morph between. You can change these to anything you want!
// const texts = [
//     "",
//     "Vimukthi Rajapaksha",
//     "Graphic Designer",
//     "UI/UX Engineer",
//     "Front-end Developer",
//     "Back-end Developer",
//     "Full-stack Developer",
//     "Cyber Security Engineer",
//     "Free Lancer",
//     ""
// ];
//
// // Controls the speed of morphing.
// const morphTime = 1;
// const cooldownTime = 0.25;
//
// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;
//
// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];
//
// function doMorph() {
//     morph -= cooldown;
//     cooldown = 0;
//
//     let fraction = morph / morphTime;
//
//     if (fraction > 1) {
//         cooldown = cooldownTime;
//         fraction = 1;
//     }
//
//     setMorph(fraction);
// }
//
// // A lot of the magic happens here, this is what applies the blur filter to the text.
// function setMorph(fraction) {
//     // fraction = Math.cos(fraction * Math.PI) / -2 + .5;
//
//     elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
//
//     fraction = 1 - fraction;
//     elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
//
//     elts.text1.textContent = texts[textIndex % texts.length];
//     elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }
//
// function doCooldown() {
//     morph = 0;
//
//     elts.text2.style.filter = "";
//     elts.text2.style.opacity = "100%";
//
//     elts.text1.style.filter = "";
//     elts.text1.style.opacity = "0%";
// }
//
// // Animation loop, which is called every frame.
// function animate() {
//     requestAnimationFrame(animate);
//
//     let newTime = new Date();
//     let shouldIncrementIndex = cooldown > 0;
//     let dt = (newTime - time) / 1000;
//     time = newTime;
//
//     cooldown -= dt;
//
//     if (cooldown <= 0) {
//         if (shouldIncrementIndex) {
//             textIndex++;
//         }
//
//         doMorph();
//     } else {
//         doCooldown();
//     }
// }

// Start the animation.
// setTimeout(function (){
//     animate();
// },2750)



//preloader
window.addEventListener('load', () => {
    setTimeout(function (){
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    },2500)

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

//


//Animation

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1800,
});

ScrollReveal().reveal('.about-title1', {delay: 600, origin: 'left'});