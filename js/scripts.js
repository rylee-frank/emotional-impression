
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

	var diameter = random(10, 200);

	translate(vidCapture.width, 0);
	scale(-1,1);

	var position = cTracker.getCurrentPosition();

	if (position) {
			stroke(0);
			fill("#ffffff");
			strokeWeight(0.5);
			rect(175, 50, 225, 225);
			line(210, 20, 210, 300);
			line(360, 20, 360, 300);
			line(160, 160, 420, 160);
			line(160, 245, 420, 245);

			strokeWeight(2);
			cTracker.draw(drawCanvas);

			//print("y:" + position[44][1] + "y:" + position[50][1]);
//makes laoding extremely slow and inconsistent
		// if ((position[1][0]>175)&&(position[13][0]<320)) {
		// 	stroke(0);
		// 	fill("#ffffff");
		// 	rect(175, 50, 225, 225);

		// 	strokeWeight(0.5);
		// 	line(210, 20, 210, 300);
		// 	line(360, 20, 360, 300);
		// 	line(160, 160, 420, 160);
		// 	line(160, 245, 420, 245);

		// 	strokeWeight(2);
		// 	cTracker.draw(drawCanvas);
		// }

		//DEFIANCE
		// if ((position[7][1]<235)&&(position[7][1]>225)) {

		// 	noFill();
		// 	strokeWeight(10);
		// 	stroke("#11ed11")

		// 	circle(0, 200, diameter);
		// }
		//DISGUST
		if ((position[62][1]<155)&&(position[62][1]>145)) {

			noFill();
			strokeWeight(2);
			stroke("#000059")
			circle(0, 200, diameter);
		} 
		
		
		// //SHOCK
		// else if ((position[57][1]<236)&&(position[57][1]>200)) {

		// 	noFill();
		// 	strokeWeight(3);
		// 	stroke("#ffffff")
		// 	circle(0, 200, diameter);
		// }
		// //SKEPTICISM
		// else if ((position[20][1]<100)&&(position[17][1]<97)) {

		// 	noFill();
		// 	strokeWeight(5);
		// 	stroke("#ed3911")
		// 	circle(0, 200, diameter);
		// }
		// //HAPPINESS
		// else if ((position[44][1]<200)&&(position[50][1]<200)&&(position[44][1]>180)&&(position[50][1]>180)) {

		// 	noFill();
		// 	strokeWeight(10);
		// 	stroke("#edde11")
		// 	circle(0, 200, diameter);
		// }
		//BOREDOM
		else {

			stroke("#000000");
			// noFill();
			// strokeWeight(1);
			// stroke("#ed3911")
			// circle(0, 200, diameter);
		}

	}
}