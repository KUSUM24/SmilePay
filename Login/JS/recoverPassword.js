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
        alert('password should be atleast 8 characters');
    else
        if(password == password2) {
            loggedInUser.Password = password;
            alert('Your Password has been changed successfully');
            updatePassword();
        } else {
            alert('password didnt match')
        }
}
var allUserDetails = JSON.parse("["+localStorage.getItem('allUserDetails')+"]");
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