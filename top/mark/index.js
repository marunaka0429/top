$('.menu').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 2,
    slidesToScroll: 2,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,
});

liff.init({ liffId: "1657153787-A6PXyx7z" })
.then(() => {
    if (!liff.isLoggedIn()) {
        liff.login();
    } else {
        document.getElementById('title').textContent = 'ログイン済み';
    }
})