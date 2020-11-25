let flag = false;
let i;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('pin-btn').addEventListener('click',getPin);
});
function getPin(ev) {
    ev.preventDefault();
    var username = document.getElementById('username').value;
    var pin = document.getElementById('pin').value;
    let allUserDetails =JSON.parse("["+localStorage.getItem('allUserDetails')+"]");
    for(i = 1; i < allUserDetails.length; i++) {
        if(allUserDetails[i].Username == username && allUserDetails[i].Pin == pin) {
            flag = true;
            console.log(allUserDetails[i] + " " + i);
            localStorage.setItem('loggedInUser',JSON.stringify(allUserDetails[i]));
            location.href = "recoverPassword.html";
            break;
        } else {
            flag = false;
        }
    }
    if(i==allUserDetails.length) {
        document.getElementById("incorrect-detail").style.display="block";
    }
}
