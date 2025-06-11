const disabledLinks = document.querySelectorAll('a[href="#"]');
disabledLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
    });
});