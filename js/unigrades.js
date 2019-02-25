var map = document.getElementById("map");
map.addEventListener("load", function() {
    var svgDoc = map.contentDocument;
    alert("SVG contentDocument Loaded!");
    var stations = map.contentDocument.getElementById("stations");
    s_n = stations.getElementsByTagName("text");
    var Arr = [];
    for (var i = 0 ; i < s_n.length ; i++) {
        Arr.push({text: s_n[i], circ: s_n[i].nextElementSibling});
    }

    for (var i =0; i< Arr.length; i++) {
        Arr[i].text.style.transition = "all .3s"   
        Arr[i].text.addEventListener("mouseover", function(i) {
            this.style.fill = "rgb(0,0,0,.5)";
        });
        Arr[i].text.addEventListener("mouseout", function() {
            this.style.fill = "black";
        });
    }
}, false);



