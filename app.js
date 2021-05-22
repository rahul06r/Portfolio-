// gsap format
var tl = new TimelineMax();
tl

    .from("nav ", {
        duration: 3,

        y: "-100% ",
    })
    .from(".starting-container", {
        opacity: 0,
        duration: 2,
    })
    .from(".about-section", {
        opacity: 0,
        duration: 2,
    })
    .from(".skills-section", {
        opacity: 0,
        duration: 2,
    })
    .from(".work-section", {
        opacity: 0,
        duration: 2,
    })
    .from(".footer-section", {
        opacity: 0,
        duration: 2,
    })




// typing effect

var typed = new Typed(".typing", {
    strings: ["developer.", "designer.", "freelancer.", "blogger."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});





// for button
var buttonre = document.getElementById("button-resume");
buttonre.addEventListener("click", function() {
    alert("Sorry some problem has occurred during download or visit flutter_boydev ");

});