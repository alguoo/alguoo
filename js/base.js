var acc = document.querySelectorAll(".accordian");
var panels = document.querySelectorAll(".panel");

for (var i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        // panel.style.display = (panel.style.display == "none") ? "block" : "none";

        if ("accordian active" == this.classList.value) {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } else {
            panel.style.maxHeight = 0;
        }
    
    });

    
}


var index = 4;
var palette_1 = ["#EDAE49", "#D1495B", "#00798C", "#30638E", "#003D5B"];
var palette_2 = ["#584B53","#D6E3F8","#F2CCC3","#E78F8E", "#9D5C63"];
var palette_3 = ["#000000","#F2CCC3","#E78F8E","#FFE6E8"];
var palette = palette_1;
var unhoverCol = "black";


function paletteChange(elem) {
    index = (index + 1)%palette.length;
    elem.style.color = palette[index];
}

function hover() {
    this.style.color = palette[index];
    this.style.opacity = 0.6;
}

function unhover() {
    this.style.color = unhoverCol;
    this.style.opacity = 1;
}

// Theme Change?

var footer = document.querySelector("#footer");
footer.addEventListener("click", themeChange);
var body = document.querySelector("body");
var nav = document.querySelector(".nav");

function themeChange() {
    body.style.transition = "all 1s";
    body.classList.toggle("newTheme");

    nav.classList.toggle("newTheme");
    
    palette = (palette==palette_1) ? palette_2 : palette_1;
    // unhoverCol = (unhoverCol == "black") ? "#F2CCC3" : "black";
    unhoverCol = (unhoverCol == "black") ? "#584B53" : "black";
}