const nightModeButton = document.getElementById('nightModeCheckbox'); // Update ID
const body = document.body;

nightModeButton.addEventListener('click', function() {
  body.classList.toggle('night-mode'); // Toggle the night-mode class on/off
});


