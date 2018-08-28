

document.getElementById("whiteBoard").onclick=function() {
	var canvas = document.getElementById("whiteBoard";
	var context = canvas.getContext("2d");

	context.lineWidth = 30;
	context.strokeStyle = "blue";

	//draw line with standard butt ending

	context.moveTo(25, 50);
	context.lineTo(400, 50);
	context.lineCap = "butt";
	context.stroke();


	//draw second line change color etc

	context.lineWidth = 20;
	context.strokeStyle = "red";

	context.beginPath();
	context.moveTo(25, 120);
	context.lineTo(400, 120);
	context.lineCap = "butt";
	context.stroke();
}