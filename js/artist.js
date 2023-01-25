var aid = 0;
console.log(artists);
artists.map(displayArtist);
function displayArtist(artist) {
  document.getElementById("artists").innerHTML += `
    <div class="card-container" onclick="load_artist(${aid++})">
        <div class="artist-cover">
            <img src="${artist.cover}" alt="">
        </div>
        <div class="album-desc">
            <p class="card-name">${artist.Name}</p>
            <p class="card-artist">Artist</p>
        </div>
    </div>`;
}
function load_artist(data) {
  sessionStorage.setItem("currentArtist", data);
  document.location.href = "./artist.html";
}
