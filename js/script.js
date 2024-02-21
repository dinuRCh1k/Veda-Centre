const checkbox = document.getElementById('hamburger');
const main = document.querySelector('main');
const cd = document.getElementById('cd');
const lineheader = document.getElementById('line-header');
const footer = document.querySelector('footer');
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        main.style.display = 'none';
        cd.style.display = 'none';
        footer.style.display = 'none';
        lineheader.style.display = 'none';
    } else {
        main.style.display = '';
        cd.style.display = '';
        footer.style.display = '';
        lineheader.style.display = '';
    }
});