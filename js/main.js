// Seleccionamos todos los enlaces del menú
const navLinks = document.querySelectorAll('.nav__link');
const check = document.getElementById('check');

// Cuando se hace clic en cualquier enlace, desmarcamos el checkbox
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        check.checked = false;
    });
});