const btn = document.getElementById('toggle-theme');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  if(document.body.classList.contains('dark-theme')){
    btn.textContent = 'Light Mode';
  } else {
    btn.textContent = 'Dark Mode';
  }
});
