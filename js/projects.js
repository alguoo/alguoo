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
paletteChange(head)


var links = document.querySelectorAll("li a");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", hover);
    links[i].addEventListener("mouseout", unhover);	
    links[i].style.transition = "all .6s"
}


// Theme Change - CitySet:
var toggled = false;
function citySet() {
    if (toggled) { return; } else { toggled = !toggled; }

    body.classList.add("newTheme");
    nav.classList.add("newTheme");
    palette = (palette==palette_1) ? palette_2 : palette_1;
    // unhoverCol = (unhoverCol == "black") ? "#584B53" : "black";

    var svg = d3.select('svg');
    document.querySelector("svg").style.height = document.querySelector(".container").scrollHeight;
    var city = svg.selectAll('rect');

    var cityData = [];
    var nBox = Math.floor(Math.random()*15+25);
    for (var i = 0 ; i < nBox ; i++) {
        cityData[i] = {x: (i-1+Math.random())*100/nBox, width: Math.floor(Math.random()*5+3), height: (Math.random()*50) };
    }

    city.data(cityData)
        .enter()
        .append('rect')
        .attr("x", (d)=>{ return (.98*(d.x-50)+50)+"%";})
        .attr("y", (d)=>{ return "100%"})
        .attr("width", (d)=>{ return d.width+"%";})
        .attr('height', (d)=>{ return d.height+"%";})
        .attr('fill', 'white');


    city.data(cityData)
        .enter()
        .append('rect')
        .attr("y", (d)=>{ return "100%"})
        .attr("x", (d)=>{ return d.x+"%";})
        .attr("width", (d)=>{ return d.width+"%";})
        .attr('height', (d)=>{ return d.height+"%";})
        .attr('fill', 'rgb(88, 75, 83)');

    d3.selectAll('circle')
        .transition()
        .duration(3000)
        .attr('cy', "60%")
        .ease(d3.easeElastic);

    d3.selectAll('rect')
        .transition()
        .delay(2000)
        .attr("y", (d)=>{ return (100-1.00*d.height)+"%"; });
}

var footer = document.querySelector("#footer");
var thmChg = document.querySelector("#thmChg");
var body = document.querySelector("body");
var nav = document.querySelector(".nav");
footer.addEventListener("click", citySet);
thmChg.addEventListener("click", citySet);
