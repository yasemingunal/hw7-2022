var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() { 
	video.playbackRate = video.playbackRate - (0.1*video.playbackRate);
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() { 
	video.playbackRate = video.playbackRate + (0.1*video.playbackRate);
	console.log("Speed is " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() { 
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration) { 
		video.currentTime = 0;
	} 
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() { 
	if (video.muted == false) { 
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Mute");
	}
	else { 
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmute");
	}
});

document.querySelector("#slider").addEventListener("click", function() { 
	video.volume = this.value/100;
	document.getElementById("volume").innerHTML = video.volume*100 + "%";
	console.log("The current value is " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() { 
	video.classList.add(".oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() { 
	video.classList.remove(".oldSchool");
});
