function mostra(imageNumber) {
    var images = document.getElementsByClassName("selected");
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";     
    }
    document.getElementById("image" + imageNumber).style.display = "block";

    var allImages = document.querySelectorAll('.Fotos');
        for (var i = 0; i < allImages.length; i++) {
            if (i + 1 !== imageNumber) {
                allImages[i].classList.add('blur');
            } else {
                allImages[i].classList.remove('blur');
            }
        }
}