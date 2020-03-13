//  EFECTO DE BORDES
//const logo = document.querySelectorAll("#logo path");
//
//for(let i= 0; i<logo.length; i++){
//    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
//}
//
//  BACK UP
//const btnToggle = document.querySelector('#but');
//btnToggle.addEventListener('click', function() {
//
//    document.getElementById('ul').classList.toggle('active');
//    document.getElementById('nav').classList.toggle('active');
//    document.getElementById('but').classList.toggle('active');
//
//});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('active');

        //animate links
        navLinks.forEach((link, index) =>{
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
        });
    });

}
navSlide();

// AÑADIR VARIAS APPS
//const app = ()=>{
//    navSlide();
//}