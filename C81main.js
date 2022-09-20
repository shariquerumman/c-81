canvas=document.getElementById("myCanvas");
colour="red";
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.rect(250,143,750,400,);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.arc(450,350,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=3;
ctx.arc(550,400,70,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.arc(650,350,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=3;
ctx.arc(750,400,70,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3;
ctx.arc(850,350,70,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymouse);
function mymouse(e){
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=3;
ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}
