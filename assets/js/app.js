// console.log("start")
// setTimeout(() => {
//     console.log("en cours")
// }, 5000);
// console.log("end") 

// setInterval(() => {
//     console.log("coucou")
// }, 1000);

// Sélectionnez votre élément de barre de navigation


var navbar = document.querySelector('.navbar');

navbar.classList.add('open');


const playlist = document.getElementById("playlist");

const lecteur = document.querySelector("#lecteur")

const config = {
    urlCover : "assets/pictures/",
    urlSound : "assets/media/",
}

const getData = async () => {
    
    const req = await fetch("./assets/js/data.json")
    console.log( req)
    const dbmusic = await req.json()
    console.log("result", dbmusic)

    dbmusic.forEach((music) => {
        playlist.innerHTML +=`<li id=${music.id}><h2> ${music.title} </h2><img src=${config.urlCover}${music.cover} alt=${music.title}><div><small> ${music.category}</small></div></li>`;
    });

    const allLi = document.querySelectorAll("li");

allLi.forEach((li) => {
    li.addEventListener("click", function(elem){
        console.log("click")
        const id = parseInt(li.id);
        
        const searchById = dbmusic.find((element) => element.id === id);
        console.log(searchById);
        lecteur.src = `${config.urlSound}${searchById.sound}`;
        lecteur.play();
    });
})

const getRandomMusic = (dbmusic) => {
    const randomIndex = Math.floor(Math.random() * dbmusic.length);
    return dbmusic[randomIndex];
};

const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", () => {
    lecteur.pause(); // Pausez la musique en cours de lecture
    const randomMusic = getRandomMusic(dbmusic);
    lecteur.src = `${config.urlSound}${randomMusic.sound}`;
    lecteur.play(); // Lancez la nouvelle musique sélectionnée aléatoirement
});

allLi.forEach((li) => {
    li.addEventListener("click", function(elem){
        console.log("click")
        const id = parseInt(li.id);
        
        const searchById = dbmusic.find((element) => element.id === id);
        console.log(searchById);
        lecteur.src = `${config.urlSound}${searchById.sound}`;
        lecteur.play();

        // Supprimer la classe 'selected' de tous les titres
        allLi.forEach(item => {
          item.querySelector('h2').classList.remove('selected');
        });

        // Ajouter la classe 'selected' au titre cliqué
        li.querySelector('h2').classList.add('selected');
    });
// Écoutez l'événement de pause du lecteur audio
lecteur.addEventListener("pause", function() {
    // Récupérer l'élément li actuellement en lecture
    const currentPlayingLi = document.querySelector("li.playing");
    
    // Vérifier si un élément est en lecture
    if (currentPlayingLi) {
      // Si oui, retirer la classe 'playing'
      currentPlayingLi.classList.remove("playing");
      
      // Récupérer le titre h2 de cet élément li
      const titleElement = currentPlayingLi.querySelector("h2");
      
      // Ajouter la classe 'paused' pour changer la couleur du texte
      titleElement.classList.add("paused");
    }
  });
  
  // Écoutez l'événement de lecture du lecteur audio
  lecteur.addEventListener("play", function() {
    // Récupérer l'élément li actuellement en lecture
    const currentPlayingLi = document.querySelector("li.playing");
    
    // Vérifier si un élément est en lecture
    if (currentPlayingLi) {
      // Si oui, retirer la classe 'paused'
      currentPlayingLi.querySelector("h2").classList.remove("paused");
    }
  });

  // Écoutez l'événement de pause du lecteur audio
lecteur.addEventListener("pause", function() {
  // Récupérer l'élément li actuellement en lecture
  const currentPlayingLi = document.querySelector("li.playing");
  
  // Vérifier si un élément est en lecture
  if (currentPlayingLi) {
    // Si oui, retirer la classe 'playing'
    currentPlayingLi.classList.remove("playing");
    
    // Récupérer le petit élément de texte de la catégorie de cet élément li
    const categoryElement = currentPlayingLi.querySelector("small");
    
    // Ajouter la classe 'paused' pour changer la couleur du texte de la catégorie
    categoryElement.classList.add("paused");
  }
});

// Écoutez l'événement de lecture du lecteur audio
lecteur.addEventListener("play", function() {
  // Récupérer l'élément li actuellement en lecture
  const currentPlayingLi = document.querySelector("li.playing");
  
  // Vérifier si un élément est en lecture
  if (currentPlayingLi) {
    // Si oui, retirer la classe 'paused'
    currentPlayingLi.querySelector("small").classList.remove("paused");
  }
});

function randomAnimation() {
  var animatedText = document.getElementById("animatedText");
  animatedText.classList.toggle("selected");
}
 
    
})

}
 getData();

 console.log("Chargement des data")

