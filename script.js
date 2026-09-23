let photo = document.getElementById("photo");

photo.addEventListener("mouseenter",function(){
    photo.src = "images/moi2.jpg";
});
photo.addEventListener("mouseleave", function() {
    photo.src = "images/moi.jpg";
});