
var thirdDetails = "";
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('submit3').addEventListener('click',addThirdDetails);
});
const addThirdDetails = (ev) => {
    ev.preventDefault();
    let userThird = {
        Username: document.getElementById("username").value,
        Password: document.getElementById("password").value,
        Password2: document.getElementById("password2").value,
        Pin: document.getElementById("pin").value,
    }
    thirdDetails = JSON.stringify(userThird);
    localStorage.setItem('thirdDetails',thirdDetails);
    window.location.href = "finalSignup.html";
}
let userFirst = JSON.parse(localStorage.getItem('firstDetails'));
let userSecond = JSON.parse(localStorage.getItem('secondDetails'));
let userThird = JSON.parse(localStorage.getItem('thirdDetails'));
let currentUser = {
    Name: userFirst.Name,
    Number: userFirst.Number,
    Email: userFirst.Email,
    Account: userSecond.Account,
    Aadhar: userSecond.Aadhar,
    Pan: userSecond.Pan,
    Username: userThird.Username,
    Password: userThird.Password,
    Pin: userThird.Pin
};