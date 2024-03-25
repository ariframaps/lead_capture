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

// testimoni

// membuat simpanan konten2nya menggunakan array atau semacamnya
// mengambil elemen carouselbox
// buat array 2 isinya elemen untuk konten yang akan ditampilkan
// tunggu 2 detik
// dikanan carousel append next konten
// geser kekiri (next konten)
// elemen 1 hilang, elemen 2 menjadi elemen 1, dna spawn index ke-2 isinhya adalah konten selanjutnya
// next konten lagi
// gitu terus loopnya

const carsouselData = [
    {
        name: "Sally Taylor",
        job: "CEO at Convex",
        caption: `<p class="testimonies">I had a great experience with PageBolt. The interest <br>rate was very low and the repayment terms were <br>very flexible.</p>`
    },
    {
        name: "Martin Jones",
        job: "Marketing Specialist",
        caption: `<p class="testimonies">Thanks to PageBolt. I was able to get the loan I <br>needed and get back on my feet.</p>`
    },
    {
        name: "David Fowler",
        job: "Freelancer",
        caption: `I was pleasantly surprised to recieve a response so <br>quickly, and the terms of the loan were very<br>reasonable.`
    },
]

const carouselbox = document.querySelector('.carouselbox');
let left = 0;
let index = 1;

setInterval(function () {
    carouselbox.append(renderContent(index));
    (index == 2) ? index = 0 : index++;

    const carousel = document.querySelectorAll(".carousel");
    left -= 700;
    setTimeout(() => {
        carousel.forEach((item) => {
            item.style.left = `${left}px`
        });
    }, 100);
}, 3500)


function renderContent(index) {
    const name = document.createElement('p');
    name.className = 'name';
    name.innerHTML = `${carsouselData[index].name}`

    const job = document.createElement('p');
    job.className = 'job';
    job.innerHTML = `${carsouselData[index].job}`

    const stars = document.createElement('div');
    stars.className = 'stars';
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        img.src = "images/testi/icons8-star-30.png"
        stars.append(img)
    }

    const testimonies = document.createElement('p');
    testimonies.className = 'testimonies';
    testimonies.innerHTML = carsouselData[index].caption;

    const carousel = document.createElement('div');
    carousel.className = 'carousel';
    carousel.append(name, job, stars, testimonies);
    carousel.style.marginRight = "100px"

    return carousel;
}