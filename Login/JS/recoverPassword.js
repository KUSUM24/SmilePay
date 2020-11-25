var flag = false;
var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
var password;
var password2;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('pass-btn').addEventListener('click',recoverPassword);
});
function recoverPassword(ev) {
    ev.preventDefault();
    password = document.getElementById('password').value;
    password2 = document.getElementById('password2').value;
    if(password.length<8)
    document.getElementById("alert-password").style.display="block";
    else
        if(password == password2) {
            loggedInUser.Password = password;
            document.getElementById("password-changed").style.display="block";
            updatePassword();
        } else {
            document.getElementById("mismatch-password").style.display="block";
        }
}
var allUserDetails = JSON.parse("["+localStorage.getItem('allUserDetails')+"]");
console.log(allUserDetails)
function updatePassword() {
localStorage.setItem('loggedInUser',JSON.stringify(loggedInUser));
for(let i = 1; i < allUserDetails.length; i++) {
    if(allUserDetails[i].Username == loggedInUser.Username) {
        allUserDetails[i].Password = password;
        break;
    }
}
allUserDetails = JSON.stringify(allUserDetails).replace("[","").replace("]","");
localStorage.setItem('allUserDetails',allUserDetails);
localStorage.setItem('backupAllUserDetails',allUserDetails);
location.href = 'firstLoginPage.html'
}