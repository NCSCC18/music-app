const songs = [
  { title: "Song 1", file: "song1.mp3" },
  { title: "Song 2", file: "song2.mp3" },
  { title: "Song 3", file: "song3.mp3" }
];

const playlist = document.getElementById("playlist");

songs.forEach(song => {
  const div = document.createElement("div");
  div.classList.add("song");
  div.innerHTML = `
    <strong>${song.title}</strong><br>
    <audio controls>
      <source src="${song.file}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  `;
  playlist.appendChild(div);
});
