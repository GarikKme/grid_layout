//gallery
lightGallery(document.getElementById('lightgallery'));

//menu
let menuBtn = document.getElementById('btn');
let menu = document.getElementById('menu');

menuBtn.onclick = function () {
    menu.classList.toggle("open");
}

