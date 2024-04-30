function mostra(imageNumber) {
    var images = document.getElementsByClassName("selected");
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";     
    }
    document.getElementById("image" + imageNumber).style.display = "block";
}

document.getElementById('enviarModal').addEventListener('click', function() {
//  Adicionar codigo que envie para um json
    document.getElementById('formModal').reset();
  });