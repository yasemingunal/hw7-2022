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
	video.playbackRate = video.playbackRate - 0.1;
	console.log("Speed of video is set to " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() { 
	video.playbackRate = video.playbackRate + 0.1;
	console.log("Speed of video is set to " + video.playbackRate);

})

document.querySelector("#skip").addEventListener("click", function() { 
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration) { 
		video.currentTime = 0;
	} 
	console.log("Current playback position of video is " + video.currentTime);
})


//fix this it's not working
document.querySelector("#mute").addEventListener("click", function() { 
	video.muted = true;
	console.log("askjdhfalksjdhfals");
	if (video.muted = false) { 
		video.muted = true;
		document.getElementById("mute").innerHtml = "unmute";
	}
	if (video.muted = true) { 
		video.muted = false;
		document.getElementById("mute").innerHtml = "mute";
	}

})

