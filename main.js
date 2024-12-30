
//console.log("hello");

//やりたいことを書く
const loading = document.querySelector(".spinner");

const finish = () =>{
    loading.classList.add("loaded");
}

//ローディングが終わったらfinishという関数をする
window.addEventListener('load',()=>{
    setTimeout(finish, 5000);
})
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slide");
let currentIndex = 0; // 現在のスライドインデックス
const totalSlides = slideImages.length;

// 自動スライド
function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // 次のスライドへ
    updateSlidePosition();
}

function updateSlidePosition() {
    const slideWidth = slideImages[0].clientWidth; // 1つのスライドの幅
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // スライドを移動
}

// 一定間隔で次のスライドを表示
setInterval(showNextSlide, 3000); // 3秒ごとに切り替え
