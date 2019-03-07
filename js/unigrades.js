var xmlhttp = new XMLHttpRequest();
var url = "https://alguoo.github.io/projects/unigrades/Marks.json";

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var parsed = JSON.parse(this.responseText);
    console.log(parsed.Sheet1);
    console.log("Loaded JSON successfully.");
    function textBox() {
        var stationName = this.textContent.replace(/\s/g, "");
        var found = parsed.Sheet1.find(function(e) {
            return stationName == e.Title.replace(/\s/g, "");
        });

        if (typeof found !== 'undefined') {
            alert(found.Code+": "+found.Title + "\n" +
                found.Semester+", "+found.Year + "\n" + 
                "Mark: "+found.Mark+" ("+found.Grade+")" + "\n")
        } else {
            // console.log("Not Yet!");
            alert("TBD, 2019.")
        }
    }

    var map = document.getElementById("map");
    map.addEventListener("load", function() {
        var svgDoc = map.contentDocument;
        var stations = svgDoc.getElementById("stations");
        s_n = stations.getElementsByTagName("text");
        var Arr = [];
        for (var i = 0 ; i < s_n.length ; i++) {
            Arr.push({text: s_n[i], circ: s_n[i].nextElementSibling});
        }

        for (var i =0; i< Arr.length; i++) {
            Arr[i].text.style.transition = "all .3s"   
            Arr[i].text.addEventListener("mouseover", function() {
                this.style.fill = "rgba(0,0,0,.5)";
                this.style.fontSize = "16px";
                for (var j = 0; j < this.children.length; j++) {
                    this.children[j].style.transition = "all .3s";
                    this.children[j].style.fontSize = "16px";
                }
            });
            Arr[i].text.addEventListener("mouseout", function() {
                this.style.fill = "black";
                this.style.fontSize = "14px";
                for (var j = 0; j < this.children.length; j++) {
                    this.children[j].style.fontSize = "14px";
                }
            });

            Arr[i].text.addEventListener("click", textBox);
        }

        var subText = svgDoc.getElementById("subText");

        var dic = {'st8':'st1','st10':'st2','st11':'st3'};
        var set = ['st8', 'st10', 'st11'];

        function toggleClassOnClass(target, toggle, disable) {
            var items = svgDoc.getElementsByClassName(target);
            for (var i = 0; i < items.length; i++) {
                if (disable == "disable") {
                items[i].classList.remove(toggle);
                } else {
                    items[i].classList.add(toggle);
                }
            }
        }
        function togOpac() {
            for (var j = 0; j < set.length; j++) {
                if (set[j]!=this.classList[0]) {
                    toggleClassOnClass(set[j], "opac", "enable");
                    toggleClassOnClass(dic[set[j]], "opac", "enable");
                } else {      
                    toggleClassOnClass(set[j], "opac", "disable");
                    toggleClassOnClass(dic[set[j]], "opac", "disable");
                }
            }
        }

        function returnOpac() {
            for (var j = 0; j < set.length; j++) {     
                    toggleClassOnClass(set[j], "opac", "disable");
                    toggleClassOnClass(dic[set[j]], "opac", "disable");
            }
        }

        for (var i = 0; i < subText.children.length; i++) {
            subText.children[i].addEventListener("mouseover", togOpac);
            subText.children[i].addEventListener("mouseout", returnOpac);
            subText.children[i].addEventListener("click", togOpac);

        }
    }, false);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();