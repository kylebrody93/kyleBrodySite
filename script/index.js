var i = 0;
var samplerPics = [];
var time = 2000;

samplerPics[0] = 'images/drum00.png';
samplerPics[1] = 'images/drum1.png';
samplerPics[2] = 'images/drum2.png';

function slideShow() {
	document.drumpics.src = samplerPics[i];

	if(i < samplerPics.length - 1){
		i++;
	}
	else {
		i = 0;
	}

	setTimeout('slideShow()', time);
}

window.onload = slideShow;