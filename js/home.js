// h1 Colour Change
var head = document.querySelector("h1");

head.style.transition = "all .6s";
head.addEventListener("mouseover", ()=>{paletteChange(head);});
head.addEventListener("click", ()=>{paletteChange(head);});

// Links Colour Change
var links = document.querySelectorAll("li a");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", hover);
    links[i].addEventListener("mouseout", unhover);	
    links[i].style.transition = "all .6s"
}


// Contact Info Display
var contact = document.querySelector("#contactLink");
var contactInfo = document.querySelector("#contactInfo");
contactInfo.style.transition = "opacity .6s";
contactInfo.style.visibility = "hidden";
contactInfo.style.opacity = "0";
contact.addEventListener("click", contactClick);

function contactClick() {
    if (contactInfo.style.visibility == "hidden" ) {
        contactInfo.style.visibility = "visible";
        contactInfo.style.opacity = "1";
        console.log(Date());
        console.log(timeGreeting());
        

    } else {
        contactInfo.style.opacity = "0";
        setTimeout(function() {
            contactInfo.style.visibility = "hidden";
        }, 600);

    }
}

// Sticky navbar
var nav = document.querySelector(".nav");
var header = document.querySelector("#header");
var about = document.querySelector("#about");

window.addEventListener("scroll", function(){
    var fromTop = window.scrollY;
    if (header.offsetTop+header.scrollHeight < fromTop) {
        nav.classList.add("nav-fixed");
        about.href="#top";
        about.textContent = "Home";

    } else {
        nav.classList.remove("nav-fixed");
        about.href="#content";
        about.textContent = "About Me";
    }
})

// begin in palette[0] (orange)
paletteChange(head);

// Accordians hover effect
for (var i = 0; i < acc.length; i++) {
    acc[i].style.transition = "all .6s";
    acc[i].addEventListener("mouseover", hover);
    acc[i].addEventListener("mouseout", unhover);
}

// Time Greeting

var date = new Date();

function timeGreeting() {
    if (date.getHours() < 5) {
        return "Good Evening";
    } else if (date.getHours() < 12) {
        return "Good Morning";
    } else if (date.getHours() < 17) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}