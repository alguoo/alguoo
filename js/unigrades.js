var map = document.getElementById("map");
map.addEventListener("load", function() {
    var svgDoc = map.contentDocument;
    alert("SVG contentDocument Loaded!");
}, false);