// header
let lastPosition = window.scrollY;
document.addEventListener('scroll', function (e) {
    const header = document.getElementById('page-header');
    const currentPosition = window.scrollY;

    (currentPosition > 0) ?
        header.classList.add('header-invert') :
        header.classList.remove('header-invert');

    (currentPosition > lastPosition) ?
        header.classList.add('header-hidden') :
        header.classList.remove('header-hidden');
    lastPosition = currentPosition;
});

// toggleable tabs
const tabbox = document.querySelector(".tabbox");
tabbox.addEventListener("click", function (e) {
    const targetTab = changeTab(this.children, e.target)
    changeContent(targetTab)
})

function changeTab(tabs, target) {
    let targetIndex = 0
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
        if (tabs[i] == target) targetIndex = i;
    }
    target.classList.add('active-tab')
    return targetIndex;
}

function changeContent(targetIndex) {
    const contentbox = Array.from(document.querySelector('.contentbox').children);
    contentbox.forEach(content => content.classList.remove('active-content'));
    contentbox[targetIndex].classList.add('active-content');
}