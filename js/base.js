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
var palette = ["#EDAE49", "#D1495B", "#00798C", "#30638E", "#003D5B"];

function paletteChange(elem) {
    index = (index + 1)%palette.length;
    elem.style.color = palette[index];
}

function hover() {
    this.style.color = palette[index];
    this.style.opacity = 0.6;
}

function unhover() {
    this.style.color = "black";
    this.style.opacity = 1;
}