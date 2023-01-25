var albums = [
  `{
    "artist":"Owl City",
    "album":"Ocean Eyes",
    "cover":"assets/music/Owl City/Ocean Eyes/cover.jpg",
    "songs":[
        {
            "name":"Cave In",
            "src":"assets/music/Owl City/Ocean Eyes/1.mp3"
        },{
            "name":"Hello Seattle",
            "src":"assets/music/Owl City/Ocean Eyes/1.mp3"
        },{
            "name":"The Saltwater Room",
            "src":"assets/music/Owl City/Ocean Eyes/1.mp3"
        },{
            "name":"Fireflies",
            "src":"assets/music/Owl City/Ocean Eyes/1.mp3"
        },{
            "name":"Vanila Twilight",
            "src":"assets/music/Owl City/Ocean Eyes/1.mp3"
        },{
            "name":"Hot Air Balloon",
            "src":"assets/music/Owl City/Ocean Eyes/1.mp3"
        }
    ]
}`,
  `{
    "artist":"Linkin Park",
    "album":"Living Things",
    "cover":"assets/music/Linkin Park/Living Things/cover.jpg",
    "songs":[
        {
            "name":"Lost in Echo",
            "src":"assets/music/Linkin Park/Living Things/1.mp3"
        },{
            "name":"Victimized",
            "src":"assets/music/Linkin Park/Living Things/1.mp3"
        },{
            "name":"Roads Untraveled",
            "src":"assets/music/Linkin Park/Living Things/1.mp3"
        },{
            "name":"Skin To Bone",
            "src":"assets/music/Linkin Park/Living Things/1.mp3"
        },{
            "name":"Tinfoil",
            "src":"assets/music/Linkin Park/Living Things/1.mp3"
        },{
            "name":"Powerless",
            "src":"assets/music/Linkin Park/Living Things/1.mp3"
        }
    ]
}`,
  `{
    "artist":"Linkin Park",
    "album":"Minutes To Midnight",
    "cover":"assets/music/Linkin Park/Minutes To Midnight/cover.jpg",
    "songs":[
        {
            "name":"Valentine's Day",
            "src":"assets/music/Linkin Park/Minutes To Midnight/1.mp3"
        },{
            "name":"In Pieces",
            "src":"assets/music/Linkin Park/Minutes To Midnight/1.mp3"
        },{
            "name":"Leave Out All The Rest",
            "src":"assets/music/Linkin Park/Minutes To Midnight/1.mp3"
        },{
            "name":"What I've Done",
            "src":"assets/music/Linkin Park/Minutes To Midnight/1.mp3"
        }
    ]
}`,
  `{
    "artist":"Paramore",
    "album":"Brand New Eyes",
    "cover":"assets/music/Paramore/Brand New Eyes/cover.jpg",
    "songs":[
        {
            "name":"Decode",
            "src":"assets/music/Paramore/Brand New Eyes/1.mp3"
        },{
            "name":"Monster",
            "src":"assets/music/Paramore/Brand New Eyes/1.mp3"
        },{
            "name":"Ignorance",
            "src":"assets/music/Paramore/Brand New Eyes/1.mp3"
        },{
            "name":"Still Into You",
            "src":"assets/music/Paramore/Brand New Eyes/1.mp3"
        },{
            "name":"Crush Crush Crush",
            "src":"assets/music/Paramore/Brand New Eyes/1.mp3"
        }
    ]
}`,
  `{
    "artist":"Imagine Dragons",
    "album":"Night Visions",
    "cover":"assets/music/Imagine Dragons/Night Visions/cover.jpg",
    "songs":[
        {
            "name":"It's Time",
            "src":"assets/music/Imagine Dragons/Night Visions/1.mp3"
        },{
            "name":"Radioactive",
            "src":"assets/music/Imagine Dragons/Night Visions/1.mp3"
        },{
            "name":"Demons",
            "src":"assets/music/Imagine Dragons/Night Visions/1.mp3"
        },{
            "name":"Monster",
            "src":"assets/music/Imagine Dragons/Night Visions/1.mp3"
        }
    ]
}`,
  `{
    "artist":"Avicii",
    "album":"True",
    "cover":"assets/music/Avicii/True/cover.jpg",
    "songs":[
        {
            "name":"You Make Me",
            "src":"assets/music/Avicii/True/1.mp3"
        },{
            "name":"Hey Brother",
            "src":"assets/music/Avicii/True/1.mp3"
        },{
            "name":"Addicted To You",
            "src":"assets/music/Avicii/True/1.mp3"
        },{
            "name":"Wake Me Up",
            "src":"assets/music/Avicii/True/1.mp3"
        }
    ]
}`,
];

var id = 0;
albums.map(display);
function display(data) {
  var album = JSON.parse(data);
  document.getElementById("albums").innerHTML += `
  <div class="card-container" onclick="load_album(${id++})">
      <div class="card-cover">
          <img src="${album.cover}" alt="">
      </div>
      <div class="album-desc">
          <p class="card-name">${album.album}</p>
          <p class="card-artist">${album.artist}</p>
          <p class="card-artist" style = "margin-top:1rem">${
            album.songs.length
          } Songs</p>
      </div>
      <div class="card-play">
          <i class="fa-solid fa-circle-play"></i>
      </div>
  </div>`;
}

var sarray;
function load_album(data) {
  currentAlbum = JSON.parse(albums[data]);
  sarray = currentAlbum.songs;
  update_queue(sarray);
  load_track(0);
  track.play();
  document.getElementById("play_button").innerHTML =
    '<i id = "play" class="fa-solid fa-circle-pause" onclick="play_song()"></i>';
  palying = true;
}

var asid = 0;
var queue = document.getElementById("now-playing");

function update_queue(arr) {
  queue.innerHTML = `    <label for="now-playing">
  <i class="fa-solid fa-bars"></i>Queue
</label>`;
  asid = 0;
  arr.map(refresh);
}

function refresh(data) {
  queue.innerHTML += `
    <div class="side" onclick="load_track(${asid++});track.play()">
                <i class="fa-solid fa-music"></i>
                <p>${data.name}</p>
    </div>`;
}
