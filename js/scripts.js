
var vidCapture, cTracker, drawCanvas;

function setup() {
	var cvn = createCanvas(600, windowHeight/2+75);
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

	translate(400, 0);
	scale(-1,1);

	var position = cTracker.getCurrentPosition();

	if (position) {

		stroke(0);
		fill("#e6e7e8");
		strokeWeight(0.5);
		rect(150, 50, 225, 225);
		line(185, 20, 185, 300);
		line(335, 20, 335, 300);
		line(135, 170, 395, 170);
		line(135, 245, 395, 245);
		strokeWeight(2);
		cTracker.draw(drawCanvas);

		print("x:" + position[0][0]+ "x:" + position[14][0]);

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
			strokeWeight(0.5);
			stroke("#ffe6fe")
			circle(-80, 150, diameter);
		}
		//SKEPTICISM
		else if ((position[20][1]<100)&&(position[17][1]<100)) {
			noFill();
			strokeWeight(2);
			stroke("#0daa9f")
			circle(-80, 150, diameter);
		}
		//HAPPINESS
		else if ((position[59][1]<193)&&(position[61][1]<193)&&(position[59][1]>187)&&(position[61][1]>187)) {
			noFill();
			strokeWeight(3);
			stroke("#ffd400")
			circle(-80, 150, diameter);
		}
		//DEFIANCE
		else if ((position[7][0]<320)&&(position[7][0]>290)) {
			noFill();
			strokeWeight(2.5);
			stroke("#a71e22");
			circle(-80, 150, diameter);
		}
		else if ((position[7][0]>215)&&(position[7][0]<240)) {
			noFill();
			strokeWeight(2.5);
			stroke("#a71e22");
			circle(-80, 150, diameter);
		}
		//SHAME
		else if ((position[7][1]>255)&&(position[7][1]<285)) {
			noFill();
			strokeWeight(1.5);
			stroke("#230c13");
			circle(-80, 150, diameter);
		}
		//BOREDOM
		else if ((position[57][1]<200)&&(position[57][1]>195)) {
			noFill();
			strokeWeight(1);
			stroke("#6d5d6b")
			circle(-80, 150, diameter);
		}
	}
}


