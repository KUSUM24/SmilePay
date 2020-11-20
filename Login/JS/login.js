let flag = false;
var i;
var currentUser;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login').addEventListener('click',checkUser);
});
const checkUser = (ev) => {
    ev.preventDefault();
    currentUser = {
        Username: document.getElementById('username').value,
        Password: document.getElementById('password').value
    };
    let allUserDetails =JSON.parse("["+localStorage.getItem('allUserDetails')+"]");
    for(i = 1; i < allUserDetails.length; i++) {
        console.log(allUserDetails[i]);
        if(allUserDetails[i].Username == currentUser.Username && allUserDetails[i].Password == currentUser.Password) {
            flag = true;
            console.log(allUserDetails[i] + " " + i);
            localStorage.setItem('loggedInUser',JSON.stringify(allUserDetails[i]));
            location.href = "LoginPage.html";
            break;
        } else {
            flag = false;
        }
    }
    if(i==allUserDetails.length) {
        alert('Incorrect Details');
    }
}
const resetUser = () => {
    localStorage.setItem('loggedInUser', " ");
}