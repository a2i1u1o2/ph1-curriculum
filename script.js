const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");

button.addEventListener("click" , () => {
    header.classList.toggle("is-open");
});

// メインビジュアルの要素を取得
const mainVisual = document.getElementById("js-mainVisual");

// スクロールした時の処理
window.addEventListener("scroll", () => {
  // [スクロールした分の高さ] が [メインビジュアルの高さ - ヘッダーの高さ] より大きい時
  if (window.scrollY > mainVisual.clientHeight - header.clientHeight) {
    header.classList.remove("is-transparent");
  } else {
    header.classList.add("is-transparent");
  }
});
const eventSlideOptions = {
  オプション: その設定,
  オプション: その設定
}

new Splide('#js-eventSlide',eventSlideOptions).mount();

const eventSlideOptions = {
  オプション: その設定,
  オプション: その設定
}
new Splide('#js-dailySlide',eventSlideOptions).mount();
