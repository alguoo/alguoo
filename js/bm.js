function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function t(x, max) {
    return max/(1+Math.exp(-x/200));
}

function r(x,y,max) {
    rad = (x**2 + y**2)**0.5
    return Math.atan(rad**1/200) * 2/Math.PI *max/(2*rad)
}

function shift() {
    switch (dir) {
        case 37:
            d=[[x+w,y],[x,y+w],[x-w,y],[x,y-w],[x-w,y]]
            break;
        case 38:
            d=[[x+w,y],[x,y+w],[x-w,y],[x,y-w],[x,y-w]]
            break;
        case 39:
            d=[[x+w,y],[x,y+w],[x-w,y],[x,y-w],[x+w,y]]
            break;
        case 40:
            d=[[x+w,y],[x,y+w],[x-w,y],[x,y-w],[x,y+w]]
            break;
        default:
            d = [[x+w,y],[x,y+w],[x-w,y],[x,y-w]];

        }
    
    // d = [[x+w,y],[x,y+w],[x-w,y],[x,y-w]][getRandomInt(0,4)];
    d = d[getRandomInt(0,d.length)];
    x=d[0]
    y=d[1]
}

function rw(ctx, coord, dim) {
    x = coord[0];
    y = coord[1];

    maxX = dim;
    maxY = dim;

    w = 5;

    xx = x*r(x,y,dim)+dim/2
    yy = y*r(x,y,dim)+dim/2
    // ctx.strokeStyle = 'rgba(' + (255-200*(y/maxY)*(x/maxX)) + ',' + x/maxX*255 +  ',' + y/maxY*255 + ',' + 1 + ')';
    str = 'rgba(' + (250-(xx/maxX)*(yy/maxY)*250) + ',' + (0+(xx/maxX)*250) +  ',' + (0+(yy/maxY)*250) + ',' + .5 + ')';
    // console.log(str)
    ctx.strokeStyle = str
    ctx.beginPath();

    // ctx.lineTo(t(x,maxX),t(y,maxY));
    ctx.lineTo(x*r(x,y,dim)+dim/2,y*r(x,y,dim)+dim/2);
    
    shift();
    shift();

    // ctx.lineTo(t(x,maxX),t(y,maxY));
    ctx.lineTo(x*r(x,y,dim)+dim/2,y*r(x,y,dim)+dim/2);

    ctx.stroke();
    ctx.closePath();

    return d
}

var dir = 0;
var ctx = canvas.getContext('2d');
ctx.translate(0.5, 0.5);
function draw() {
    dim = Math.floor(Math.min(window.innerWidth,window.innerHeight)*.8);
    ctx.canvas.width  = dim;
    ctx.canvas.height = dim;

    ctx.lineCap = 'butt'


    j = 0;
    while (j<1) {
        // coord=[[Math.floor(ctx.canvas.width/2),Math.floor(ctx.canvas.height/2)]];
        coord=[0,0]
        i = 0;
        while (i<100) {
            // coord=rw(ctx, coord, dim);
            setTimeout(step(), 0);
            i += 1;
        }
        // hi = setInterval(function(){ coord=rw(ctx, coord,dim); }, 0);
        // setTimeout(()=>{clearInterval(hi);}, 30000);
        j+=1;
    }
}
play = true;
function step() {
    if (play) {
        for (k=0;k<1;k++) {
            coord=rw(ctx, coord,dim);
        }
        setTimeout(function(){requestAnimationFrame(step)}, 10); 
        
    }
}

draw();


// Try to add some interactivity
document.addEventListener('keydown', function(e){
    // console.log(e.keyCode)
    dir = e.keyCode;
    // step();
    

});

document.addEventListener('click', press);

function press() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw()
}