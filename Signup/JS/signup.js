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
            document.getElementById("exist-num").style.display="block";
            break;
        } 
        if(allUserDetails[i].Email == userFirst.Email) {
            flag = true;
            document.getElementById("exist-email").style.display="block";
            break;
        }
        flag = false;
    };
    if(userFirst.Number.length!=10){
        document.getElementById("alert-num").style.display="block";
        flag = true;
    }
    firstDetails = JSON.stringify(userFirst);
    localStorage.setItem('firstDetails',firstDetails);
    if(!flag){
        window.location.href = "signupPage2.html"
    }
    
}