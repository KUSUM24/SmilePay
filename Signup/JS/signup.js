// var allUserDetails = "";
var firstDetails = "";
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('submit1').addEventListener('click',addFirstDetails);
});
const addFirstDetails = (ev) => {
    ev.preventDefault();
    let userFirst = {
        Name: document.getElementById("name").value,
        Number: document.getElementById("number").value,
        Email: document.getElementById("email").value
    }
    firstDetails = JSON.stringify(userFirst);
    localStorage.setItem('firstDetails',firstDetails);
    window.location.href = "signupPage2.html"
}