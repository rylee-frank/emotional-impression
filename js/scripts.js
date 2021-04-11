
var vidCapture, cTracker, drawCanvas;

function setup() {
	var cvn = createCanvas(windowWidth, windowHeight/2+50);
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
		fill("#e6e7e8");
		strokeWeight(0.5);
		rect(175, 50, 225, 225);
		line(210, 20, 210, 300);
		line(360, 20, 360, 300);
		line(160, 170, 420, 170);
		line(160, 245, 420, 245);
		strokeWeight(2);
		cTracker.draw(drawCanvas);

		//print("y:" + position[61][1]+ "y:" + position[59][1]);

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
			circle(0, 150, diameter);
		}
		//SKEPTICISM
		else if ((position[20][1]<110)&&(position[17][1]<107)) {
			noFill();
			strokeWeight(4);
			stroke("#0daa9f")
			circle(0, 150, diameter);
		}
		//HAPPINESS
		else if ((position[59][1]<193)&&(position[61][1]<193)&&(position[59][1]>187)&&(position[61][1]>187)) {
			noFill();
			strokeWeight(5);
			stroke("#ffd400")
			circle(0, 150, diameter);
		}
		//DEFIANCE
		else if ((position[7][0]<320)&&(position[7][0]>290)) {
			noFill();
			strokeWeight(4);
			stroke("#a71e22");
			circle(0, 150, diameter);
		}
		else if ((position[7][0]>245)&&(position[7][0]<260)) {
			noFill();
			strokeWeight(4);
			stroke("#a71e22");
			circle(0, 150, diameter);
		}
		//SHAME
		else if ((position[7][1]>255)&&(position[7][1]<275)) {
			noFill();
			strokeWeight(3);
			stroke("#230c13");
			circle(0, 150, diameter);
		}
		//CONFUSED
		else if ((position[0][0]>240)&&(position[0][0]<253)) {
			noFill();
			strokeWeight(2);
			stroke("#b5ce00");
			circle(0, 150, diameter);
		}
		else if ((position[14][0]<340)&&(position[14][0]>310)) {
			noFill();
			strokeWeight(2);
			stroke("#b5ce00");
			circle(0, 150, diameter);		
		}
		//BOREDOM
		else if ((position[57][1]<200)&&(position[57][1]>195)) {
			noFill();
			strokeWeight(1);
			stroke("#6d5d6b")
			circle(0, 150, diameter);
		}
	}
}


