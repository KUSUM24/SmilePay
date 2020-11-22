var flag = false;
var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
var payDetails = JSON.parse(localStorage.getItem('payDetails'));
console.log(localStorage.getItem('amountDebited'));
if(localStorage.getItem('amountDebited').includes('false')){
    var currentBalance = loggedInUser.TotalAmount - payDetails.Amount;
    localStorage.setItem('currentBalance',currentBalance);
    localStorage.setItem('amountDebited','true');
}
var currentBalance = localStorage.getItem('currentBalance');
loggedInUser.TotalAmount = currentBalance;
var allUserDetails = JSON.parse("["+localStorage.getItem('allUserDetails')+"]");
function updateAmount() {
    localStorage.setItem('loggedInUser',JSON.stringify(loggedInUser));
    for(let i = 1; i < allUserDetails.length; i++) {
        if(allUserDetails[i].Username == loggedInUser.Username) {
            allUserDetails[i].TotalAmount = currentBalance;
            break;
        }
    }
    allUserDetails = JSON.stringify(allUserDetails).replace("[","").replace("]","");
    console.log(allUserDetails)
localStorage.setItem('allUserDetails',allUserDetails);
localStorage.setItem('backupAllUserDetails',allUserDetails);
}
function displayBalance() {
    if(!flag) {
        let amountFormatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(currentBalance);
        document.getElementById('amount').style.display = 'block';
        document.getElementById('amount').innerHTML = amountFormatted;
        flag = true;
    } else {
        document.getElementById('amount').style.display = 'none';
        flag = false;
    }
}