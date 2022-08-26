// スクロール発火イベント
window.addEventListener('scroll', function() {
  //スクロールの高さを取得
  let scroll = window.pageYOffset;
  //ヘッダー要素を取得
  let element = document.getElementById('site-header');
  //イベントが発生する高さを取得
  let eventHeight = document.getElementById('top-banner').clientHeight - 50;

  if (scroll > eventHeight) {
    element.classList.add('bg-header');
  } else {
    element.classList.remove('bg-header');
  }
})