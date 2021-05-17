$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
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

AOS.init({
    offset: 400,
    duration: 1000
});