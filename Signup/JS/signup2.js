
var secondDetails = "";
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('submit2').addEventListener('click',addSecondDetails);
});
const addSecondDetails = (ev) => {
    ev.preventDefault();
    let userSecond = {
        Account: document.getElementById("account").value,
        Aadhar: document.getElementById("aadhar").value,
        Pan: document.getElementById("pan").value
    }
    secondDetails = JSON.stringify(userSecond);
    localStorage.setItem('secondDetails',secondDetails);
    window.location.href = "signupPage3.html"
}