/********************************音频类********************************/
	var Music = function(url) {
		var audio = new Audio();
		this.audio = audio;
		if (url) {
			this.audio.src = url;
		}
	};
	Music.prototype.play = function() {
		this.audio.play();
	};