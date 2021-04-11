
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
			line(160, 170, 420, 170);
			line(160, 245, 420, 245);

			strokeWeight(2);
			cTracker.draw(drawCanvas);

			//print("y:" + position[0][1] + "y:" + position[14][1]);
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
		
		//SHOCK
		if ((position[57][1]<225)&&(position[57][1]>210)) {
			noFill();
			strokeWeight(3);
			stroke("#ffffff")
			circle(0, 200, diameter);
		}
		//SKEPTICISM
		else if ((position[20][1]<105)&&(position[17][1]<105)) {
			noFill();
			strokeWeight(5);
			stroke("#ed3911")
			circle(0, 200, diameter);
		}
		//HAPPINESS
		else if ((position[44][1]<197)&&(position[50][1]<195)&&(position[44][1]>180)&&(position[50][1]>180)) {
			noFill();
			strokeWeight(2);
			stroke("#edde11")
			circle(0, 200, diameter);
		}
		//DEFIANCE
		else if ((position[7][0]>210)&&(position[7][0]<260)) {
			noFill();
			strokeWeight(15);
			stroke("#11ed11");
			circle(0, 200, diameter);
		}
		//SHAME
		else if ((position[7][1]>255)&&(position[7][1]<275)) {
			noFill();
			strokeWeight(15);
			stroke("#8f0651");
			circle(0, 200, diameter);
		}
		//CONFUSED
		else if ((position[0][0]>230)&&(position[0][0]<243)) {
			noFill();
			strokeWeight(14);
			stroke("#d67281");
			circle(0, 200, diameter);
		}
		else if ((position[14][0]<340)&&(position[14][0]>310)) {
			noFill();
			strokeWeight(14);
			stroke("#d67281");
			circle(0, 200, diameter);		
		}
		//BOREDOM
		else if ((position[57][1]<198)&&(position[57][1]>195)) {
			noFill();
			strokeWeight(1);
			stroke("#899c9a")
			circle(0, 200, diameter);
		}
				//DISGUST
		else if ((position[62][1]<155)&&(position[62][1]>135)) {
			noFill();
			strokeWeight(10);
			stroke("#000059")
			circle(0, 200, diameter);
		} 
	}
}