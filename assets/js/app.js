
const playlist = document.getElementById("playlist");

const lecteur = document.querySelector("#lecteur")

const config = {
    urlCover : "assets/pictures/",
    urlSound : "assets/media/",
}



const dbmusic = [
    {
        id : 1,
        cover : "rammstein.png",
        sound : "Rammstein-Sonne.mp3",
        title : "Rammstein-Sonne",
        category : "Metal",
    },
    {
        id : 2,
        cover : "rammstein.png",
        sound : "Rammstein-Du-Hast.mp3",
        title : "Rammstein-Du-Hast",
        category : "Metal",
    },
    {
        id : 3,
        cover : "rammstein.png",
        sound : "Dicke-Titten.mp3",
        title : "Rammstein-Dikken",
        category : "Metal",
    },

]




dbmusic.forEach((music) => {
    playlist.innerHTML +=`<li id=${music.id}><h2> ${music.title} </h2><img src=${config.urlCover}${music.cover} alt=${music.title}><div><small> ${music.category}</small></div></li>`;
});

const allLi = document.querySelectorAll("li");

allLi.forEach((li) => {
    li.addEventListener("click", function(elem){
        const id = parseInt(li.id);
        const searchById = dbmusic.find((element) => element.id === id);
        console.log(searchById);
        lecteur.src = `${config.urlSound}${searchById.sound}`;
        lecteur.play();
    });
})
