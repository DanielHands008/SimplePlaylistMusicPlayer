// Setup vars.
var containers = document.getElementsByClassName('spmp-container');
for (var c = 0; c < containers.length; c++) {
	(function(){
		var containerId = 'spmp-container'+c;
		containers[c].id = containerId;
		var byId = function(id) {
			return document.querySelector('#'+containerId+' '+'#'+id);
		}
		var music = [];
		var pos = 0;
		var seeking = false;
		var progPos = 0;
		var progWidth = 0;
		var volChanging = false;
		var volBarPos = 0;
		var addEvent = window.addEventListener.bind(window);
		var container = containers[c];
		var buttonColour = getComputedStyle(container).color;

		// Get tracks from links in main container.
		for (var i = 0; i < container.childNodes.length; i++) {
			var node = container.childNodes[i];
			if (node.nodeName == 'A') {
				music.push([node.innerHTML, node.href]);
			}
		}

		// Set the inner HTML of the container.
		container.innerHTML = '<div id="spmp-playpause" class="spmp-button"></div><div id="spmp-stop" class="spmp-button"></div><div id="spmp-prev" class="spmp-button"></div><div id="spmp-next" class="spmp-button"></div><div id="spmp-prog"><div id="spmp-prog-bar"><div id="spmp-prog-buffer"></div><div id="spmp-prog-fill"></div></div></div><div id="spmp-drop" class="spmp-button spmp-right"></div><div id="spmp-vol" class="spmp-right"><div id="spmp-vol-bar"><div id="spmp-vol-fill"></div></div><div id="spmp-mute" class="spmp-button"></div></div><div id="spmp-playlist"><div id="spmp-playlist-container"></div></div><audio id="spmp-audio"></audio>';

		// Add the tracks to the playlist.
		for (var i = 0; i < music.length; i++) {
			byId('spmp-playlist-container').insertAdjacentHTML('beforeend', '<div class="spmp-track" id="spmp-track' + i + '"><div class="spmp-indicator"></div>' + music[i][0] + '</div>');
			byId('spmp-track' + i).addEventListener('click', clickedTrack);
		}

		// Get the audio element and the volume bar.
		var player = byId('spmp-audio');
		var volBar = byId('spmp-vol-fill');

		// Add events to UI.
		byId('spmp-playpause').addEventListener('click', function(){
			if (player.paused) player.play();
			else player.pause();
		});
		byId('spmp-prev').addEventListener('click', prevSong);
		byId('spmp-next').addEventListener('click', nextSong);
		byId('spmp-stop').addEventListener('click', stopMusic);
		byId('spmp-drop').addEventListener('click', function(){
			if (hasClass(containerId, 'spmp-open')) removeClass(containerId, 'spmp-open');
			else addClass(containerId, 'spmp-open');
		});
		byId('spmp-mute').addEventListener('click', function(){
			if (player.muted) removeClass(containerId, 'spmp-muted');
			else addClass(containerId, 'spmp-muted');
			player.muted = !player.muted;
		});
		byId('spmp-vol-bar').addEventListener('mousedown', function(e){
			volBarPos = byId('spmp-vol-bar').getBoundingClientRect().y;
			volChanging = true;
			volSeekChange(e);
		});
		byId('spmp-prog-bar').addEventListener('mousedown', function(e){
			var barRect = byId('spmp-prog-bar').getBoundingClientRect();
			progPos = barRect.x;
			progWidth = barRect.width;
			seeking = true;
			volSeekChange(e);
		});

		// Add events to the audio element.
		player.addEventListener('play', function(){
			addClass(containerId, 'spmp-playing');
			trackChanged();
		});
		player.addEventListener('pause', function(){
			removeClass(containerId, 'spmp-playing');
		});
		player.addEventListener('timeupdate', function(){
			byId('spmp-prog-fill').style.width = (player.currentTime / player.duration) * 100 + '%';
		});
		player.addEventListener('ended', nextSong);
		player.addEventListener('progress', function() {
			var duration =  player.duration;
			if (duration > 0) {
			  for (var i = 0; i < player.buffered.length; i++) {
					if (player.buffered.start(player.buffered.length - 1 - i) < player.currentTime) {
						byId("spmp-prog-buffer").style.width = (player.buffered.end(player.buffered.length - 1 - i) / duration) * 100 + "%";
						break;
					}
				}
			}
		  });

		// Add events to the mouse.
		addEvent('mouseenter', stopMouse);
		addEvent('mouseup', stopMouse);
		addEvent('mousemove', volSeekChange);

		// Set the volume or seek.
		function volSeekChange(e) {
			if (volChanging) {
				var vol = (-Math.round(e.clientY - volBarPos)+140)/140;
				if (vol > 1) vol = 1;
				if (vol < 0) vol = 0;
				player.volume = vol;
				volBar.style.height = Math.round(vol * 100) + '%';
			}
			if (seeking) {
				var prog = (e.clientX - progPos) / progWidth;
				if (prog > 1) prog = 1;
				if (prog < 0) prog = 0;
				player.currentTime = player.duration * prog;
			}
		}
		function stopMouse() {
			volChanging = false;
			seeking = false;
		}
		function stopMusic() {
			player.pause();
			player.currentTime = 0;
		}
		function prevSong() {
			if (pos > 0) pos--;
			else if (hasClass(containerId, 'loop')) pos = music.length - 1;
			else return;
			player.src = music[pos][1];
			player.play();
		}
		function nextSong() {
			if (pos < music.length - 1) pos++;
			else if (hasClass(containerId, 'loop')) pos = 0;
			else return;
			player.src = music[pos][1];
			player.play();
		}
		function clickedTrack() {
			pos = parseInt(this.id.split('spmp-track')[1]); // Get the track that was clicked from the ID
			player.src = music[pos][1];
			player.play();
		}
		function trackChanged() { // Change the play icon in the playlist.
			var tracksInList = document.querySelectorAll('#'+containerId+' .spmp-track');
			for (var i = 0; i < tracksInList.length; i++) {
				removeClass(tracksInList[i].id, 'spmp-track-playing');
			}
			addClass(tracksInList[pos].id, 'spmp-track-playing');
		}

		function hasClass(id, theClass) {
			if (id == containerId) var classes = document.getElementById(containerId).className.split(' ');
			else var classes = byId(id).className.split(' ');
			for(var i = 0 ; i < classes.length ; i++) {
				if (classes[i] == theClass) return true;
			}
			return false;
		}
		function addClass(id, theClass) {
			var alreadyPresent = false;
			if (id == containerId) var classes = document.getElementById(containerId).className.split(' ');
			else var classes = byId(id).className.split(' ');
			for(var i = 0 ; i < classes.length ; i++) {
				if (classes[i] == theClass) alreadyPresent = true;
			}
			if (alreadyPresent) return false;
			classes.push(theClass);
			if (id == containerId) return document.getElementById(id).className = classes.join(' ');
			else return byId(id).className = classes.join(' ');
		}
		function removeClass(id, theClass) {
			if (id == containerId) var classes = document.getElementById(containerId).className.split(' ');
			else var classes = byId(id).className.split(' ');
			for(var i = 0 ; i < classes.length ; i++) {
				if (classes[i] == theClass) {
					classes.splice(i, 1);
					if (id == containerId) return document.getElementById(id).className = classes.join(' ');
					else return byId(id).className = classes.join(' ');
				}
			}
			return false;
		}

		// Disable volume bar on touch devices.
		addEvent('touchstart', function testTouch(){
			addClass(containerId, 'spmp-touch');
			window.removeEventListener('touchstart', testTouch, false);
		});

		// Set the volume bar to the volume of the player
		volBar.style.height = (player.volume * 100) + '%';

		// Enable autoplay.
		if (hasClass(containerId, 'autoplay')) player.autoplay = true;

		// Check if there are tracks in the playlist and set the audio src for the first track.
		if (music.length > 0 && music[0].length > 0) player.src = music[pos][1];