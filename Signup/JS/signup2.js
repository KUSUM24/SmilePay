let flag = false;
var secondDetails = "";
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('submit2').addEventListener('click',addSecondDetails);
});
const addSecondDetails = (ev) => {
    ev.preventDefault();
    let userSecond = {
        Account: document.getElementById("account").value,
        Aadhar: document.getElementById("aadhar").value,
        Pan: document.getElementById("pan").value
    }
    let allUserDetails = JSON.parse("["+localStorage.getItem('allUserDetails')+"]");
    if(userSecond.Account.length!=10) {
        alert('Account No should be of 10 digits');
        flag = true;
    }
    if(userSecond.Aadhar.length!=12) {
        alert('Aadhar No should be of 12 digits');
        flag = true;
    }
    if(userSecond.Pan.length!=10) {
        alert('Pan No should be of 10 digits');
        flag = true;
    }
    for(let i = 0; i < allUserDetails.length; i++) {
        if(allUserDetails[i].Account == userSecond.Account) {
            flag = true;
            alert('Account No Already Exists');
            break;
        } 
        if(allUserDetails[i].Aadhar == userSecond.Aadhar) {
            flag = true;
            alert('Aadhar Already Exists');
            break;
        }
        if(allUserDetails[i].Pan == userSecond.Pan) {
            flag = true;
            alert('Pan No Already Exists');
            break;
        }
        flag = false;
    };
    secondDetails = JSON.stringify(userSecond);
    localStorage.setItem('secondDetails',secondDetails);
    if(!flag)
    window.location.href = "signupPage3.html"
}