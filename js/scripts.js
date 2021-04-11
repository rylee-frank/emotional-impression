
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

	translate(vidCapture.width, 0);
	scale(-1,1);
	
	//image(vidCapture, 0,0);


	var position = cTracker.getCurrentPosition();


	if (position) {
		//content calling from facial trace

	}
	
}