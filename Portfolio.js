let photo = document.getElementById("photo");

photo.addEventListener("mouseenter",function(){
    photo.src = "images/moi2.jpg";
});
photo.addEventListener("mouseleave", function() {
    photo.src = "images/moi.jpg";
});

let overlay = document.getElementById("overlay");
let boutonOuvrir = document.getElementById("ouvrir-modale");
let boutonFermer = document.getElementById("fermer-modale");

function ouvrirModale() {
    overlay.classList.add("active");
   // overlay.setAttribute("aria-hidden", "false");
   // boutonOuvrir.setAttribute("aria-expanded", "true");
    boutonFermer.focus();
}

function fermerModale() {
    overlay.classList.remove("active");
   // overlay.setAttribute("aria-hidden", "true");
   // boutonOuvrir.setAttribute("aria-expanded", "false");
    boutonOuvrir.focus();
}

boutonOuvrir.addEventListener("click", ouvrirModale);
boutonFermer.addEventListener("click", fermerModale);

/*overlay.addEventListener("click", function(event) {
    if (event.target === overlay) fermerModale();
});*/

/*document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && overlay.classList.contains("active")) {
        fermerModale();
    }
});*/