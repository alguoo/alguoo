var head = document.querySelector("h1");
var links = document.querySelectorAll("li a");

var index = 4;
var palette = ["#EDAE49", "#D1495B", "#00798C", "#30638E", "#003D5B"];
head.style.transition = "all .6s";
head.addEventListener("mouseover", paletteChange);
head.addEventListener("click", paletteChange);

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", hover);
    links[i].addEventListener("mouseout", unhover);	
    links[i].style.transition = "all .6s"
}

function paletteChange() {
    index = (index + 1)%palette.length;
    head.style.color = palette[index];
}

function hover() {
    this.style.color = head.style.color;
    this.style.opacity = 0.6;
}

function unhover() {
    this.style.color = "black";
    this.style.opacity = 1;
}

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
    } else {
        contactInfo.style.opacity = "0";
        setTimeout(function() {
            contactInfo.style.visibility = "hidden";
        }, 600);

    }
}

var nav = document.querySelector(".nav");
var header = document.querySelector("#header");
var about = document.querySelector("#about");

window.addEventListener("scroll", function(){
    var fromTop = window.scrollY;
    if (header.offsetTop+header.scrollHeight < fromTop) {
        nav.classList.add("nav-fixed");
        about.href="#";
        about.textContent = "Home";

    } else {
        nav.classList.remove("nav-fixed");
        about.href="#content";
        about.textContent = "About Me";
    }
})
paletteChange();
