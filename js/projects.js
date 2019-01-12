for (var i = 0; i < acc.length; i++) {
    acc[i].style.transition = "all .6s";
    acc[i].addEventListener("mouseover", hover);
    acc[i].addEventListener("mouseout", unhover);
}