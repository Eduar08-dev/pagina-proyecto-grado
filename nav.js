window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) { // Cambia a opaco después de 50px de scroll
        nav.style.backgroundColor = 'rgba(91, 89, 89, 1)';
    } else {
        nav.style.backgroundColor = 'rgba(91, 89, 89, 0.8)';
    }
});