var i = 0;
var j = 0;
var samplerPics = [];
var buffPics = [];
var time = 2000;
//array for the sampler app pictures
samplerPics[0] = 'images/drum00.png';
samplerPics[1] = 'images/drum1.png';
samplerPics[2] = 'images/drum2.png';
//array for the slideshow pictures
buffPics[0] = 'images/pic1.jpg';
buffPics[1] = 'images/pic2.jpg';
buffPics[2] = 'images/pic3.jpg';

//slideshow function for the sampler pictures
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

//slideshow function for the bodybuilding pictures
function buffSlideShow() {
	document.buff.src = buffPics[j];
	j++;
	if (j >= 3) {
		j = 0;
	}	
}

window.onload = buffSlideShow;
window.onload = slideShow;
