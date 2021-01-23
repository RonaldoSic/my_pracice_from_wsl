const inputFiels = document.querySelectorAll('input[type= "text"]');
inputFiels.forEach(input => {
  input.addEventListener('blur', () => {
    if (input.value.trim().length) {
      input.classList.add('blurred');
    } else {
      input.classList.remove('blurred');
    }
  })
});