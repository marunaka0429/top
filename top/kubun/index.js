liff.init({ liffId: "1657153787-9zLk2MQq" })
.then(() => {
    if (!liff.isLoggedIn()) {
        liff.login();
    } else {
        document.getElementById('title').textContent = 'ログイン済み';
    }
})