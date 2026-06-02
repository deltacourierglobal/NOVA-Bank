// =====================================
// NOVA BANK SCRIPT
// =====================================

document.addEventListener("DOMContentLoaded",()=>{

// =====================================
// MOBILE MENU
// =====================================

const mobileBtn =
document.querySelector(".mobile-toggle");

const mobileMenu =
document.querySelector(".mobile-menu");

if(mobileBtn && mobileMenu){

mobileBtn.addEventListener("click",()=>{

mobileMenu.classList.toggle("active");

});

}

// =====================================
// COUNTER ANIMATION
// =====================================

function animateCounter(id,target,suffix=""){

const element =
document.getElementById(id);

if(!element) return;

let count = 0;

const increment =
target / 100;

function update(){

count += increment;

if(count < target){

element.innerText =
Math.floor(count).toLocaleString() +
suffix;

requestAnimationFrame(update);

}else{

element.innerText =
target.toLocaleString() +
suffix;

}

}

update();

}

animateCounter(
"customersCount",
500000,
"+"
);

animateCounter(
"transactionsCount",
1200000,
"+"
);

animateCounter(
"countriesCount",
25,
"+"
);

animateCounter(
"experienceCount",
15,
"+"
);

// =====================================
// STICKY HEADER
// =====================================

window.addEventListener("scroll",()=>{

const header =
document.querySelector(".header");

if(!header) return;

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.08)";

}else{

header.style.boxShadow =
"none";

}

});

// =====================================
// SMOOTH SCROLL
// =====================================

document
.querySelectorAll('a[href^="#"]')

.forEach(link=>{

link.addEventListener("click",function(e){

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =====================================
// TESTIMONIAL SLIDER
// =====================================

const testimonials =

document.querySelectorAll(
".testimonial-card"
);

let testimonialIndex = 0;

function rotateTestimonials(){

if(testimonials.length===0)
return;

testimonials.forEach(card=>{

card.style.display="none";

});

testimonials[testimonialIndex]
.style.display="block";

testimonialIndex++;

if(testimonialIndex >=
testimonials.length){

testimonialIndex = 0;

}

}

if(testimonials.length > 0){

rotateTestimonials();

setInterval(
rotateTestimonials,
5000
);

}

// =====================================
// REVEAL ON SCROLL
// =====================================

const revealElements =

document.querySelectorAll(

".service-card,\
 .why-card,\
 .stat-card,\
 .testimonial-card,\
 .loan-card"

);

function revealOnScroll(){

const trigger =

window.innerHeight * 0.85;

revealElements.forEach(el=>{

const top =

el.getBoundingClientRect().top;

if(top < trigger){

el.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

});