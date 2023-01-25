var aid = sessionStorage.getItem("currentArtist") || 1;
var artist = artists[aid];
document.getElementById("t").innerHTML = artist.Name;
currentAlbum = artist.songs;
console.log(currentAlbum);
next_song();

document.getElementById("banner-name").innerHTML = artist.Name;
document.getElementById("banner-img").src = artist.banner;

var sid = 0;
currentAlbum.map(display);
function display(song) {
  var n1 = Math.floor(Math.random() * 3) + 2;
  var n2 = Math.floor(Math.random() * 50) + 10;
  document.getElementById("now-playing").innerHTML += `
        <div class="side" id = "q-${sid}" onclick="load_song(${sid})">
                    <i class="fa-solid fa-music"></i>
                    <p>${song.name}</p>
        </div>`;
  document.getElementById("artist-songs").innerHTML += `
        <div class="artist-song" onclick="load_song(${sid++})">
            <p>${sid}.</p>
            <img src="${song.cover}" alt="">
            <div class = "song-desc">
                <p>${song.name}</p>
                <p class="album-name">${song.album}</p>
                <p>${n1}:${n2}</p>
            </div>
        </div>
    `;
}

function load_song(data) {
  load_track(data);
  track.play();
  document.getElementById("play_button").innerHTML =
    '<i id = "play" class="fa-solid fa-circle-pause" onclick="play_song()"></i>';
  palying = true;
  console.log(currentAlbum);
}
