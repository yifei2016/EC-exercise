window.onload = function() {
	let canvas = document.getElementById("myCanvas");
	let context = canvas.getContext('2d');

	context.beginPath();

	context.strokeStyle = 'green';
	context.fillStyle = 'black';

	context.strokeRect(10, 10, 80, 80);
	context.fillRect(20, 10, 50, 50);

	context.closePath();

}




