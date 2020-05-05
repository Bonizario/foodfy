function ToggleInfo (button, contentId) {
  if (button.innerHTML === 'Esconder') {
    button.innerHTML = 'Mostrar';
  } else {
    button.innerHTML = 'Esconder';
  }
  const content = document.getElementById(contentId);
  content.classList.toggle('show');
}
