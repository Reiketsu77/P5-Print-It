const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let maBaliseImg = document.querySelector("arrow-left");

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

leftArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche gauche');
    alert('Vous avez cliqué sur la flèche gauche !');
});

rightArrow.addEventListener('click', function() {
    console.log('Clic sur la flèche droite');
    alert('Vous avez cliqué sur la flèche droite !');
});

// declarer l'index de l'image courant
// Gerer le clic sur la fleche de droite
//Incrimenter l'index de l'image courante
// Recuperer l'image correspondante a partir du tableau
// Mettre a jour le src de l'image 