
//console.log("hello");

//やりたいことを書く
const loading = document.querySelector(".spinner");

const finish = () =>{
    loading.classList.add("loaded");
}

//ローディングが終わったらfinishという関数をする
window.addEventListener('load',()=>{
    setTimeout(finish, 8000);
})

const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slide");
let slideIndex = 0;
const totalSlides = slideImages.length;

// 初期状態で最初のスライドをアクティブに
slideImages[slideIndex].classList.add('active');

function showNextSlide() {
    // 現在のスライドから 'active' クラスを削除
    slideImages[slideIndex].classList.remove('active');
    
    // 次のスライドに進む
    slideIndex = (slideIndex + 1) % totalSlides; // 最後のスライドの後は最初に戻る
    
    // 次のスライドに 'active' クラスを追加
    slideImages[slideIndex].classList.add('active');
    
    updateSlidePosition();
}

function updateSlidePosition() {
    const slideWidth = slideImages[0].clientWidth; // 1つのスライドの幅
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`; // スライドを移動
}

// スライドを3秒ごとに更新
setInterval(showNextSlide, 3000); // 3秒ごとにスライドを切り替え

// フェードスライド用の変数と関数
const images = document.querySelectorAll('.like img');
let imageIndex = 0; // フェード用インデックス

function showNextImage() {
    // 現在の画像のクラスを外す
    images[imageIndex].classList.remove('active');
    
    // 次の画像のインデックスを計算
    imageIndex = (imageIndex + 1) % images.length;
    
    // 次の画像にクラスを付与
    images[imageIndex].classList.add('active');
}

// 初期状態で最初の画像を表示
images[imageIndex].classList.add('active');

// 3秒ごとに画像を切り替える
setInterval(showNextImage, 3000);