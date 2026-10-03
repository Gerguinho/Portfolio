const photos = [
    document.getElementById("photo"),
    document.getElementById("photo-2")
];
let photoIndex = 0;

window.setInterval(() => {
    const nextPhotoIndex = (photoIndex + 1) % photos.length;
    photos[photoIndex].classList.remove("is-active");
    photos[nextPhotoIndex].classList.add("is-active");
    photoIndex = nextPhotoIndex;
}, 5000);

