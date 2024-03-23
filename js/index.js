// mendapatkan nilai scroll
//  jika posisi berada di top, maka bg = yang gelap
//  else maka warna di inverse

//  jika scrolly lebih besar dari posisi sekarang, maka:
//      header transisi menghilang keatas page
//  else scrolly lebih kecil dari posisi sekarang, maka:
//      header muncul dengan transisi dari atas kebawah


let lastPosition = window.scrollY;

document.addEventListener('scroll', function (e) {
    const header = document.getElementById('page-header');

    (window.scrollY > 0) ?
        changeHeader(header, "invert(1)", "white", "black") :
        changeHeader(header, "invert(0)", "none", "white");
});

setTimeout(function () {
    document.addEventListener('scroll', function (e) {
        const header = document.getElementById('page-header');
        const currentPosition = window.scrollY;

        (currentPosition > lastPosition) ?
            headerPosition(header, "down") :
            headerPosition(header, "up");
        lastPosition = currentPosition;
    });
}, 1000)

function changeHeader(header, filter, bg, color) {
    const logo = document.querySelector('.logo');
    logo.style.filter = filter
    header.style.background = bg;
    document.querySelectorAll('.invert')
        .forEach(function (element) {
            element.style.color = color;
        })
}

function headerPosition(header, position) {
    console.log(position)
    if (position == "down") {
        let top = 0;
        let opacity = 100;

        // Fungsi untuk melakukan transisi secara bertahap
        function transition() {
            // Memperbarui gaya header dengan nilai yang diperbarui
            header.style.top = `-${top}px`;
            header.style.opacity = `${opacity}%`;

            // Mengurangi nilai top dan opacity
            top++;
            opacity--;

            // Menghentikan interval jika kondisi terpenuhi
            if (top >= 100 || opacity <= 0) {
                clearInterval(intervalId);
            }
        }

        // Memulai interval dengan jeda waktu 100 milidetik
        let intervalId = setInterval(transition, 3);

    } else {
        let top = 100;
        let opacity = 0;

        // Fungsi untuk melakukan transisi secara bertahap
        function transition() {
            // Memperbarui gaya header dengan nilai yang diperbarui
            header.style.top = `-${top}px`;
            header.style.opacity = `${opacity}%`;

            // Mengurangi nilai top dan opacity
            top--;
            opacity++;

            // Menghentikan interval jika kondisi terpenuhi
            if (top <= 0 || opacity >= 100) {
                clearInterval(intervalId);
            }
        }

        // Memulai interval dengan jeda waktu 100 milidetik
        let intervalId = setInterval(transition, 3);
    }
}










// let top = 0;
// let opacity = 100;
// setTimeout(() => { }, 100)
// while (top < 100 && opacity > 0) {
//     header.style.top = `-${top}px`;
//     header.style.opacity = `${opacity}%`;

//     // setTimeout(() => top++, 1000);
//     top++;
//     opacity--;
// }

