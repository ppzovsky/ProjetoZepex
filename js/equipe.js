function mostrarTexto(id) {
  var texto = document.getElementById(id);
  
  // Verificar se o texto está visível
  if (texto.style.display === 'block') {
    // Se estiver visível, ocultá-lo
    texto.style.display = 'none';
  } else {
    // Se estiver oculto, exibi-lo
    texto.style.display = 'block';
  }
}
