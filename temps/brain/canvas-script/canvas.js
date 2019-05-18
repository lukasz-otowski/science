var canvas = document.querySelector('#fourLobes');
//	canvas.width=window.innerWidth;
//	canvas.height=window.innerHeight;
	canvas.width=400;
	canvas.height=400;
canvas.style.border='3px solid #000';
canvas.style.display='block';
canvas.style.background='#fff';
canvas.style.marginRight='0;';
canvas.style.marginLeft='0;';


var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(200,25);
ctx.bezierCurveTo(0, 50, 0, 400, 200, 375);
ctx.bezierCurveTo(400, 400, 400, 50, 200, 25);
ctx.lineWidth=5;
ctx.stroke();

ctx.moveTo(50, 220);
//ctx.quadraticCurveTo(200, 300, 350, 220)
ctx.bezierCurveTo(150, 200, 100, 250, 200, 260);
ctx.bezierCurveTo(300, 250, 250, 200, 350, 220);
ctx.stroke();
ctx.moveTo(70, 310);
ctx.bezierCurveTo(180, 350, 220, 350, 330, 310);
ctx.stroke();
