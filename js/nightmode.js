const nightModeButton = document.getElementById('nightModeCheckbox'); 
const body = document.body;

nightModeButton.addEventListener('click', function() {
  body.classList.toggle('night-mode'); 
});


