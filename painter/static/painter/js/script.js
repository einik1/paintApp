let canvasPosition;
let canvasBack = document.getElementById('back-canvas');
let mouseX, mouseY,
    mouseXl = document.getElementById('mouseX'),
    mouseYl = document.getElementById('mouseY');
let shape = -1;
let shapes = [];
let none= document.getElementById('none'),
    circle= document.getElementById('circle'),
    triangle = document.getElementById('triangle'),
    rectangular = document.getElementById('rectangular');
let saveme = document.getElementById('saveme');

shapes.none= document.getElementById('none'),
shapes.circle= document.getElementById('circle'),
shapes.triangle = document.getElementById('triangle'),
shapes.rectangular = document.getElementById('rectangular');

window.onload = function (){
    canvasPosition = canvasBack.getBoundingClientRect();
}


canvasBack.onmousedown = function (e) {
    mouseX = e.clientX - canvasPosition.left;
    mouseY = e.clientY - canvasPosition.top;
    if(shape == 0){ // circle
        draw(mouseX,mouseY);
    }else if(shape == 1){ //triangle
        draw1(mouseX,mouseY);
    }else if(shape == 2){ // rectangular
        draw2(mouseX,mouseY);
    }

}

canvasBack.onmousemove = function (e) {
    mouseX = e.clientX - canvasPosition.left;
    mouseY = e.clientY - canvasPosition.top;
    mouseXl.innerHTML= mouseX;
    mouseYl.innerHTML= mouseY;

}

function draw(X,Y) {
    var canvas = document.getElementById('back-canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var R = 45;
        ctx.beginPath();
        ctx.arc(X , Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
    }
}

    function draw1(X,Y) {
        var canvas = document.getElementById('back-canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            // Stroked triangle
            ctx.beginPath();
            ctx.moveTo(X, Y);
            ctx.lineTo(X, Y -80);
            ctx.lineTo(X -80, Y);
            ctx.closePath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#FF0000';
            ctx.stroke();
        }
    }

        function draw2(X,Y) {
            var canvas = document.getElementById('back-canvas');
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.lineWidth = 3;
                ctx.strokeStyle = '#FF0000';
                ctx.strokeRect(X, Y, 50, 50);
                //ctx.stroke();
            }
        }

circle.onclick= function(){
    shape = 0;
}
triangle.onclick= function(){
    shape = 1;
}
rectangular.onclick= function(){
    shape = 2;
}
none.onclick= function(){
    shape = -1;
}

addAllHandlers(shapes, "shape-active");


function addAllHandlers(arr, className){
    for (let item in arr) {
        arr[item].onmousedown = addHandler(arr[item], arr,className);
    }
}

function addHandler(element, arr, className){
    return function(){
        removeAllClasses(arr);
        element.setAttribute("class",className);
    }
}

function removeAllClasses(arr){
    for (let item in arr) {
        arr[item].removeAttribute("class");
    }
}

saveme.onclick = function(){

        $.post("/save/",{'name':"1",'data':JSON.stringify(jsondata)},function(data,status){alert("saved")});
        alert("Enter filename:");

}

