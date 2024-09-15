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


const dotsContainer = document.querySelector('.dots');
let currentSlide = 0; // La première slide est active par défaut

// Fonction pour mettre à jour la bannière et les dots
function updateBanner(index) {
    document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[index].image}`;
    document.querySelector('#banner p').innerHTML = slides[index].tagLine;

    // Mise à jour des dots
    document.querySelectorAll('.dot').forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add('dot_selected'); // Dot actif
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// dots dynamiquement en fonction du nombre de slides
function generateDots() {
    slides.forEach((item, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        
        // écouteur de clic pour changer la slide
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateBanner(currentSlide);
        });

        // dot dans le conteneur
        dotsContainer.appendChild(dot);
    });

    
}

// Initialisation : Générer les points et afficher la première slide
generateDots();

// premier dot par défaut
	
    updateBanner(currentSlide);

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Passe à la prochaine diapositive
    updateBanner(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Passe à la diapositive précédente
    updateBanner(currentSlide);
}

leftArrow.addEventListener('click', function() {
    prevSlide();
});

rightArrow.addEventListener('click', function() {

    nextSlide();
});



// declarer l'index de l'image courant
// Gerer le clic sur la fleche de droite
//Incrimenter l'index de l'image courante
// Recuperer l'image correspondante a partir du tableau
// Mettre a jour le src de l'image 