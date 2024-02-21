const checkbox = document.getElementById('hamburger');
const main = document.querySelector('main');
const lineheader = document.getElementById('line-header');
const footer = document.querySelector('footer');
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        main.style.display = 'none';
        footer.style.display = 'none';
        lineheader.style.display = 'none';
    } else {
        main.style.display = '';
        footer.style.display = '';
        lineheader.style.display = '';
    }
});