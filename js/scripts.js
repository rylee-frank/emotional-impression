
var vidCapture, cTracker, drawCanvas;

function setup() {

	var cvn = createCanvas(windowWidth, windowHeight/2);
	cvn.parent('canvas');

	vidCapture = createCapture(VIDEO);
	vidCapture.size(vidCapture.width*2, vidCapture.height*3);
	vidCapture.hide();

	cTracker = new clm.tracker();
	cTracker.init();
	cTracker.start(vidCapture.elt);

	drawCanvas = document.getElementById('defaultCanvas0');

}

function draw() {

	var x = 15;	

	background(255);
	rect(175,50, 225, 225);
	stroke(0);

	translate(vidCapture.width, 0);
	scale(-1,1);
	
	//image(vidCapture, 0,0);


	var position = cTracker.getCurrentPosition();


	if (position) {
		//content calling from facial trace
		strokeWeight(2);
		stroke(0);

		print("y: " + position[57][1]);
		//only work in this statement
		cTracker.draw(drawCanvas);

		if ((position[62][1]<155)&&(position[62][1]>135)) {
			x = x+10;

			noFill();
			circle(100, 100, x);
		} 

		if ((position[57][1]<210)&&(position[57][1]>192)) {
			x = x+10;

			noFill();
			circle(100, 100, x);
		}

	}
	
}