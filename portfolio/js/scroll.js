//1.href属性値が#{id名}で始まるa要素を取得
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

//2.クリックイベントを設定
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener("click", (e) => {
    //3.ターゲットの位置をターゲットの位置を取得
    e.preventDefault(); //デフォルトの動作をキャンセル
    let href = smoothScrollTrigger[i].getAttribute("href"); //各a要素のリンク先を取得
    let targetElement = document.getElementById(href.replace("#", "")); //リンク先の要素(コンテンツ)を取得

    const rect = targetElement.getBoundingClientRect().top; //ブラウザからの高さを取得
    const offset = window.pageYOffset; //現在のスクロール量を取得
    // const gap = 72; //固定ヘッダー分の高さを取得
    const target = rect + offset; //最終的な位置を計算

    //4.スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}
