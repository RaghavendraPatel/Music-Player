var currentAlbum = songsData;
let recent_volume = document.querySelector("#volume");
let duration = document.getElementById("duration");
let palying = false;

var timer;
let track = document.createElement("audio");
let idx = 0;
var shuffle = false;
var loop = false;

function updateThumbnail(idx) {
  try {
    document.getElementById("thumb").src = currentAlbum.cover;
    document.getElementById("song-name").innerHTML =
      currentAlbum.songs[idx].name;
    document.getElementById("artist").innerHTML = currentAlbum.artist;
  } catch {
    document.getElementById("thumb").src = currentAlbum[idx].cover;
    document.getElementById("song-name").innerHTML = currentAlbum[idx].name;
    document.getElementById("artist").innerHTML = currentAlbum[idx].artist;
  }
}

function load_track(idx) {
  clearInterval(timer);
  try {
    track.src = currentAlbum.songs[idx].src;
  } catch {
    track.src = currentAlbum[idx].src;
  }
  updateThumbnail(idx);
  track.load();
  timer = setInterval(rangeSlider, 1000);
}
load_track(idx);

function play_song() {
  if (palying == false) {
    console.log("playing");
    document.getElementById("play_button").innerHTML =
      '<i class="fa-solid fa-circle-pause" onclick="play_song()"></i>';
    palying = true;
    track.play();
  } else {
    console.log("pause");
    document.getElementById("play_button").innerHTML =
      '<i class="fa-solid fa-circle-play" onclick="play_song()"></i>';
    palying = false;
    track.pause();
  }
}

track.onended = function () {
  if (loop) {
    track.play();
  } else {
    if (shuffle) {
      // console.log(currentAlbum.songs.length);
      var n;
      do {
        try {
          n = Math.floor(Math.random() * currentAlbum.songs.length);
        } catch {
          n = Math.floor(Math.random() * currentAlbum.length);
        }
      } while (n == idx);
      idx = n;
      load_track(idx);
      track.play();
    } else {
      next_song();
    }
  }
};

function toggleShuffle() {
  if (shuffle == false) {
    shuffle = true;
    document.getElementById("shuffle").style.color = "white";
  } else {
    shuffle = false;
    document.getElementById("shuffle").style.color = "#929292";
  }
}

function toggleLoop() {
  if (loop == false) {
    loop = true;
    document.getElementById("loop").style.color = "white";
  } else {
    loop = false;
    document.getElementById("loop").style.color = "#929292";
  }
}
function changeVolume() {
  track.volume = recent_volume.value / 100;
  if (recent_volume.value == 0) {
    document.getElementById("vol").innerHTML =
      '<i class="fa-solid fa-volume-xmark"  onclick="toggleAudio()"></i>';
  } else if (recent_volume.value > 40) {
    document.getElementById("vol").innerHTML =
      '<i class="fa-solid fa-volume-high" onclick="toggleAudio()"></i>';
  } else {
    document.getElementById("vol").innerHTML =
      '<i class="fa-solid fa-volume-low" onclick="toggleAudio()"></i>';
  }
}

function changeDuration() {
  track.currentTime = track.duration * (duration.value / 100);
}

function rangeSlider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    duration.value = position;
  }
}

var len;
function next_song() {
  try {
    len = currentAlbum.songs.length;
  } catch {
    len = currentAlbum.length;
  }
  if (idx < len - 1) {
    idx += 1;
  } else {
    idx = 0;
  }
  load_track(idx);
  if (palying) {
    document.getElementById("play_button").innerHTML =
      '<i id = "play" class="fa-solid fa-circle-pause" onclick="play_song()"></i>';
    track.play();
  } else {
    document.getElementById("play_button").innerHTML =
      '<i id = "play" class="fa-solid fa-circle-play" onclick="play_song()"></i>';
  }
}
function prev_song() {
  try {
    len = currentAlbum.songs.length;
  } catch {
    len = currentAlbum.length;
  }
  if (idx > 0) {
    idx -= 1;
  } else {
    idx = len - 1;
  }
  load_track(idx);
  if (palying) {
    document.getElementById("play_button").innerHTML =
      '<i id = "play" class="fa-solid fa-circle-pause" onclick="play_song()"></i>';
    track.play();
  } else {
    document.getElementById("play_button").innerHTML =
      '<i id = "play" class="fa-solid fa-circle-play" onclick="play_song()"></i>';
  }
}

function minus30() {
  track.currentTime = Math.max(0, track.currentTime - 10);
}

const vol = recent_volume.value;

function toggleAudio() {
  if (recent_volume.value != 0) {
    document.getElementById("vol").innerHTML =
      '<i class="fa-solid fa-volume-xmark"  onclick="toggleAudio()"></i>';
    // vol = recent_volume.value;
    recent_volume.value = 0;
    track.volume = 0;
  } else {
    recent_volume.value = vol;
    changeVolume();
  }
}

// eventListners for keyboard controls

window.addEventListener(
  "keyup",
  (event) => {
    // play/pause
    if (event.key == "Enter" || event.key == " ") {
      play_song();
    }

    /*
      change volume 
      + || up arrow -> increase vol
      - || down arrow -> reduce vol
      m -> mute/unmute
    */
    if (event.key == "-" || event.keyCode == 40) {
      recent_volume.value -= 10;
      changeVolume();
    }
    if (event.key == "+" || event.keyCode == 38) {
      var vol = Number(recent_volume.value);
      vol = vol + 10;
      recent_volume.value = vol;
      changeVolume();
    }
    if (event.key == "m") {
      toggleAudio();
    }

    //change track using arrow keys
    /* 
      left arrow -> prev song
      right arrow -> next song
    */
    if (event.keyCode == 37) {
      prev_song();
    }
    if (event.keyCode == 39) {
      next_song();
    }
  },
  true
);
