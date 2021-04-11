
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
	stroke(0);
	noFill();
	rect(175,50, 225, 225);
	strokeWeight(0.5);
	line(210, 20, 210, 300);
	line(360, 20, 360, 300);
	line(160, 160, 420, 160);
	line(160, 245, 420, 245);
	

	translate(vidCapture.width, 0);
	scale(-1,1);
	
	//image(vidCapture, 0,0);


	var position = cTracker.getCurrentPosition();


	if (position) {
		//content calling from facial trace
		strokeWeight(2);

		//print("y: " + position[20][1]);
		//only work in this statement
		cTracker.draw(drawCanvas);

		//DISGUST
		if ((position[62][1]<152)&&(position[62][1]>148)) {
			x = x+10;

			noFill();
			stroke("#6f8695")
			circle(0, 150, x);
		} 
		//SHOCK
		if ((position[57][1]<205)&&(position[57][1]>196)) {
			x = x+10;

			noFill();
			stroke("#11e6ed")
			circle(0, 150, x);
		}
		//SKEPTICISM
		if ((position[20][1]<100)&&(position[21][1]<100)&&(position[17][1]<100)&&(position[16][1]<100)) {
			x = x+10;

			noFill();
			stroke("#ed3911")
			circle(0, 150, x);
		} 
		//BOREDOM
		else {
			// x = x+10;
			// stroke("#EDDE11");
			// noFill();
			// stroke("#ed3911")
			// circle(0, 150, x);
		}

	}
	
}