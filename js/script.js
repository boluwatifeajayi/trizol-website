//NAV MENU CODE
$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
})


//menu and cancel btn

function menuBtn() {
    document.getElementById("menuBtn").style.display = 'none';
    document.getElementById("cancelBtn").style.display = 'block';
}
function cancelBtn() {
    document.getElementById("menuBtn").style.display = 'block';
    document.getElementById("cancelBtn").style.display = 'none';
}

//SLIDER CODE

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 6000;
let slideInterval;

const nextSlide = () => {
    //get current Class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for next slide
    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current');
    }
    else {
        //add current to start
        slides[0].classList.add('current');

    }
    setTimeout(() => current.classList.remove('current'));


}
const prevSlide = () => {
    //get current Class
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for prev slide
    if (current.previousElementSibling) {
        //add current to next sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //add current to last
        slides[slides.length - 1].classList.add('current');

    }
    setTimeout(() => current.classList.remove('current'));
}

//button event
next.addEventListener('click', e => {
    if (auto) {
        //run next slide at interval time
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    nextSlide();
});
prev.addEventListener('click', e => {
    if (auto) {
        //run next slide at interval time
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    prevSlide();
});


//auto slide
if (auto) {
    //run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}


//** SCROLL ANIMATION
AOS.init({
    offset: 400,
    duration: 1000
});

//GALLERY CODE
$(function () {
    const gallery = $('.gallery a').simpleLightbox();
});

//counter code

// const counters = document.querySelectorAll('.counter');
// const speed = 200;
// counters.forEach(counter =>{
//     const updateCount = () =>{
//         const target = counter.getAttribute('data-target');
        
        
//         const count = counter.innerText;

//         const inc = target / speed;

//         if(count < target){
//             counter.innerText = Number((count + inc).toString().slice(0, -1));
//             setTimeout(updateCount, 1);
//         }
//         else{
//             count.innerText = target;
//         }

        
//     }
//     updateCount();
    
// });


// TO TOP CODE
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 60) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}