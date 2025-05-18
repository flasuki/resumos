const btn = document.getElementById('toggle-theme');
const icon = btn.querySelector('i');

if(localStorage.getItem('dark-mode') === 'enabled'){
  document.body.classList.add('dark-theme');
  icon.className = 'fas fa-sun';
} else {
  icon.className = 'fas fa-moon';
}

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if(document.body.classList.contains('dark-theme')){
    localStorage.setItem('dark-mode', 'enabled');
    icon.className = 'fas fa-sun';
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    icon.className = 'fas fa-moon';
  }
});
