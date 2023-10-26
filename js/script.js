const album = document.getElementById('album de fotos')
const casamentos = document.getElementById('Casamentos')
const buffets = document.getElementById('Buffets')

const movieAlbum = document.querySelector('.movieAlbum');
const movieCasamentos = document.querySelector('.movieCasamentos');
const movieBuffet = document.querySelector('.movieBuffets');

album.addEventListener('click', () =>{
    album.classList.toggle('active');
    movieAlbum.classList.toggle('active');
});

casamentos.addEventListener('click', () =>{
    casamentos.classList.toggle('active');
    movieCasamentos.classList.toggle('active');
});

