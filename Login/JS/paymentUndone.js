function retryLeft() {
    i = localStorage.getItem('retryLeft');
    i--;
    localStorage.setItem('retryLeft',i.toString());
    location.href = 'face.html';
}
function checkRetryLeft() {
    let i = localStorage.getItem('retryLeft');
    document.getElementById('retry-count').innerHTML = `Trails left: ${i}, then Your account will be permanently blocked`
    if(i<1) {
        localStorage.setItem('accountBlocked','true');
        location.href = './../../Main/HTML/MainPage.html';
    }
}