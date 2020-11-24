let flag = false;
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
    let allUserDetails = JSON.parse("["+localStorage.getItem('allUserDetails')+"]");
    for(let i = 0; i < allUserDetails.length; i++) {
        if(allUserDetails[i].Username == userThird.Username) {
            flag = true;
            document.getElementById("exist-username").style.display="block";
            break;
        }
        flag = false;
    };
    if(userThird.Password !== userThird.Password2) {
        flag = true;
        document.getElementById("alert-confirm").style.display="block";
    }
    if(userThird.Password.length<8) {
        flag = true;
        document.getElementById("alert-password").style.display="block";
    }
    thirdDetails = JSON.stringify(userThird);
    localStorage.setItem('thirdDetails',thirdDetails);
    localStorage.setItem('imgNo','2');
    if(!flag)
    window.location.href = "face.html";
}