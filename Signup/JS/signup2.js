let flag = false;
var id = 0;
var secondDetails = "";
var userSecond;
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('submit2').addEventListener('click',addSecondDetails);
});
const addSecondDetails = (ev) => {
    ev.preventDefault();
    userSecond = {
        Account: document.getElementById("account").value,
        Aadhar: document.getElementById("aadhar").value,
        Pan: document.getElementById("pan").value
    }
    let allUserDetails = JSON.parse("["+localStorage.getItem('allUserDetails')+"]");
    for(let i = 1; i < allUserDetails.length; i++) {
        if(allUserDetails[i].Account == userSecond.Account) {
            flag = true;
            document.getElementById("exist-account").style.display="block";
            break;
        } 
        if(allUserDetails[i].Aadhar == userSecond.Aadhar) {
            flag = true;
            document.getElementById("exist-aadhar").style.display="block";
            break;
        }
        if(allUserDetails[i].Pan == userSecond.Pan) {
            flag = true;
            document.getElementById("exist-pan").style.display="block";
            break;
        }
        flag = false;
    };
    if(userSecond.Account.length!=10) {
        document.getElementById("alert-account").style.display="block";
        flag = true;
    }
    if(id == 1 && userSecond.Aadhar.length !=12) {
        console.log(userSecond.Aadhar.length);
        document.getElementById("alert-aadhar").style.display="block";
        flag = true;
    }
    if(id == 2 && userSecond.Pan.length !=10) {
        console.log(userSecond.Pan.length);
        document.getElementById("alert-pan").style.display="block";
        flag = true;
    }
    if(id == 1) {
        userSecond.Pan = "";
    }
    if(id == 2) {
        userSecond.Aadhar = "";
    }
    secondDetails = JSON.stringify(userSecond);
    localStorage.setItem('secondDetails',secondDetails);
    if(!flag)
    window.location.href = "signupPage3.html"
}
const displayAadhar = () => {
    id = 1;
    document.getElementById('displayAadhar').style.display = 'block';
    document.getElementById('displayPan').style.display = 'none';
}
const displayPan = () => {
    id = 2;
    document.getElementById('displayPan').style.display = 'block';
    document.getElementById('displayAadhar').style.display = 'none';
}