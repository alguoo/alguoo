async function fetchJSON(url) {
    let response = await fetch(url);
    let parsed = await response.json();
}

fetchJSON("Marks.json");

var map = document.getElementById("map");
map.addEventListener("load", function() {
    var stations = map.contentDocument.getElementById("stations");
    s_n = stations.getElementsByTagName("text");
    var Arr = [];
    for (var i = 0 ; i < s_n.length ; i++) {
        Arr.push({text: s_n[i], circ: s_n[i].nextElementSibling});
    }

    for (var i =0; i< Arr.length; i++) {
        Arr[i].text.style.transition = "all .3s"   
        Arr[i].text.addEventListener("mouseover", function() {
            this.style.fill = "rgba(0,0,0,.5)";
        });
        Arr[i].text.addEventListener("mouseout", function() {
            this.style.fill = "black";
        });

        Arr[i].text.addEventListener("click", textBox);
    }
}, false);

function textBox() {
    var stationName = this.textContent.replace(/\s/g, "");
    var found = parsed.Sheet1.find(function(e) {
        return stationName == e.Title.replace(/\s/g, "");
    });

    if (typeof found !== 'undefined') {
        // console.log(found.Code+":"+found.Title)
        // console.log(found.Semester+", "+found.Year);
        // console.log("Mark: "+found.Mark+" ("+found.Grade+")");
        alert(found.Code+": "+found.Title + "\n" +
            found.Semester+", "+found.Year + "\n" + 
            "Mark: "+found.Mark+" ("+found.Grade+")" + "\n")
    } else {
        // console.log("Not Yet!");
        alert("TBD, 2019.")
    }
}




