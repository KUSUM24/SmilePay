// var allUserDetails = "";
let flag = false;
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
    let allUserDetails = JSON.parse("["+localStorage.getItem('allUserDetails')+"]");
    for(let i = 0; i < allUserDetails.length; i++) {
        if(allUserDetails[i].Number == userFirst.Number) {
            flag = true;
            alert('Number Already Exists');
            break;
        } if(allUserDetails[i].Email == userFirst.Email) {
            flag = true;
            alert('Email Already Exists');
            break;
        }
        flag = false;
    };
    if(userFirst.Number.length!=10){
        alert('Number is incorrect');
        flag = true;
    }
    firstDetails = JSON.stringify(userFirst);
    localStorage.setItem('firstDetails',firstDetails);
    if(!flag){
        window.location.href = "signupPage2.html"
    }
}