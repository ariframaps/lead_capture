let lastPosition = window.scrollY;

document.addEventListener('scroll', function (e) {
    const header = document.getElementById('page-header');
    const currentPosition = window.scrollY;

    (window.scrollY > 0) ?
        changeHeader(header, "invert(1)", "white", "black") :
        changeHeader(header, "invert(0)", "none", "white");

    (currentPosition > lastPosition) ?
        header.classList.add('header-hidden') :
        header.classList.remove('header-hidden');
    lastPosition = currentPosition;
});

function changeHeader(header, filter, bg, color) {
    const logo = document.querySelector('.logo');
    logo.style.filter = filter
    header.style.background = bg;
    document.querySelectorAll('.invert')
        .forEach(function (element) {
            element.style.color = color;
        })
}