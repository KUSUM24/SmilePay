function retryLeft() {
    i = localStorage.getItem('retryLeft');
    i--;
    localStorage.setItem('retryLeft',i.toString());
    location.href = 'face.html';
}
function checkRetryLeft() {
    let i = localStorage.getItem('retryLeft');
    document.getElementById('retry-count').innerHTML = `Trails left: ${i}, then Your account will be temporarily blocked`
    if(i<1) {
        location.href = 'accountBlocked.html';
    }
}