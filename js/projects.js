for (var i = 0; i < acc.length; i++) {
    acc[i].style.transition = "all .6s";
    acc[i].addEventListener("mouseover", hover);
    acc[i].addEventListener("mouseout", unhover);
}


// h1 + links Colour Change - placeholder effect
var head = document.querySelector("h1");
head.style.transition = "all .6s";
head.addEventListener("mouseover", ()=>{paletteChange(head);});
head.addEventListener("click", ()=>{paletteChange(head);});

var links = document.querySelectorAll("li a");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", hover);
    links[i].addEventListener("mouseout", unhover);	
    links[i].style.transition = "all .6s"
}



    
