const nightModeButton = document.getElementById('nightModeCheckbox'); 
const body = document.body;

nightModeButton.addEventListener('click', function() {
  body.classList.toggle('night-mode'); 
});

nightModeButton.addEventListener('change', function() {

  localStorage.setItem('nightMode', body.classList.contains('night-mode'));
});

window.onload = function() {
  const isNightMode = localStorage.getItem('nightMode') === 'true';


  if (isNightMode) {
    body.classList.add('night-mode');
  }
};
