document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('pin-btn').addEventListener('click',getPin);
});
function getPin(ev) {
    ev.preventDefault();
    var pin = document.getElementById('pin').value;
    var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if(loggedInUser.Pin == pin) {
        location.href = 'paymentDone.html';
    } else {
        localStorage.setItem('accountBlocked','true');
        location.href = './../../Main/HTML/MainPage.html';
    }
}
