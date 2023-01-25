var sid = 0;
songsData.map(displaysong);
function displaysong(song) {
  document.getElementById("songs").innerHTML += `
  <div class="card-container" onclick="load_song(${sid});update_queue(songsData)">
      <div class="card-cover">
          <img src="${song.cover}" alt="">
      </div>
      <div class="album-desc">
          <p class="card-name">${song.name}</p>
          <p class="card-artist">${song.artist}</p>
      </div>
      <div class="card-play">
          <i class="fa-solid fa-circle-play"></i>
      </div>
  </div>`;
  document.getElementById("now-playing").innerHTML += `
  <div class="side" id = "q-${sid}" onclick="load_song(${sid++})">
              <i class="fa-solid fa-music"></i>
              <p>${song.name}</p>
  </div>`;
}

function load_song(data) {
  currentAlbum = songsData;
  load_track(data);
  track.play();
  document.getElementById("play_button").innerHTML =
    '<i id = "play" class="fa-solid fa-circle-pause" onclick="play_song()"></i>';
  palying = true;
  console.log(currentAlbum);
}
