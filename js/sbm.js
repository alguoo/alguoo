clusterFlag = d => {
    var source = d.source["index"]
    var target = d.target["index"]
    return (source < 0.3*50 && target >= 0.3*50) || (source >= 0.3*50 && target < 0.3*50);
}

color = d => {
    const scale = d3.scaleOrdinal(d3.schemeCategory10);
    return d => d.id <= 0.3*50 ? "red" : "blue";
}

drag = simulation => {
  
    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
    
    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  }



const links = data.links.map(d => Object.create(d));
const nodes = data.nodes.map(d => Object.create(d));



const manyBody = d3.forceManyBody()

const linkForce = d3.forceLink(links)

var clickFlag = 0

const simulation = d3.forceSimulation(nodes)
    // .force("charge", manyBody)
    // .force("x", d3.forceX(d => 20*d.id))
    .force("x", d3.forceX(d => 200*polar(d)[0]))
    .force("y", d3.forceY(d => 200*polar(d)[1]))
    .force("link", linkForce.id(d => d.id).strength(d => 0))
    .force("center", d3.forceCenter(width / 2, height / 2));

manyBody.strength(-250);
// simulation.alphaDecay(0.1);
// simulation.alphaTarget(1)

const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height]);

const link = svg.append("g")
    .attr("stroke-opacity", .5)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke", d => clusterFlag(d) ? 'purple' : 'black')
    .attr("stroke-width", d => clusterFlag(d) ? 1.5 : 1.5);
    // .attr("stroke-width", 1);

const node = svg.append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", 5)
    .attr("fill", color)
    .call(drag(simulation));

node.append("title")
    .text(d => d.id);

svg.on("click", function() {
    console.log("hi");
    
    switch (clickFlag) {
    case 0:
        simulation
        .force("charge", manyBody)
        .force("x", null)
        .force("y", null)
        .force("link", d3.forceLink(links).id(d => d.id));
        break;
    case 1:
        link.transition().duration(1000)
        .attr("stroke", 'black')
        .attr("stroke-width", 1.5);

        node.transition().duration(1000)
        .attr("fill", 'black');
        break;
    case 2:
        simulation
        .force("x", d3.forceX(d => 200*polar(d)[0]))
        .force("y", d3.forceY(d => 200*polar(d)[1]))
        .force("link", linkForce)
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("charge", null);

        node.transition().duration(250)
        .attr("fill", color);
        link.transition().duration(250)
        .attr("stroke", d => clusterFlag(d) ? 'purple' : 'black')
        .attr("stroke-width", d => clusterFlag(d) ? 2 : 1.5);
        break;
            
    }
    clickFlag = (clickFlag + 1)%3
    simulation.alphaTarget(.2).restart();
    
})

simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
});

invalidation.then(() => simulation.stop());




