var allUserDetails = "";
var firstDetails = "";
var secondDetails = "";
var thirdDetails = "";
const addFirstDetails = () => {
    let userFirst = {
        Name: document.getElementById("name").value,
        Number: document.getElementById("number").value,
        Email: document.getElementById("email").value
    }
    firstDetails = JSON.stringify(userFirst);
    localStorage.setItem('firstDetails',firstDetails);
}
if(firstDetails!="") {
    location.href = "signupPage.html";
}