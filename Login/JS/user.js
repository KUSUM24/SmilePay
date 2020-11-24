let flag = false;
localStorage.setItem('retryLeft','3');
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
const TotalAmount = loggedInUser.TotalAmount;
function displayBalance() {
    if(!flag) {
        let amountFormatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(TotalAmount);
        document.getElementById('amount').style.display = 'block';
        document.getElementById('amount').innerHTML = amountFormatted;
        document.getElementById('balance-text').innerHTML = "Current Balance";
        console.log(TotalAmount)
        // document.getElementById('amount').innerHTML = '$ ' + format.format(TotalAmount)
        flag = true;
    } else {
        document.getElementById('amount').style.display = 'none';
        document.getElementById('balance-text').innerHTML = "Check Balance";
        flag = false;
    }
}
var currentUser;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('pay').addEventListener('click',payment);
})
function payment(ev) {
    ev.preventDefault()
    const payDetails = {
        Amount: document.getElementById('amount-text').value,
        Account: document.getElementById('account').value
    }
    console.log(payDetails)
    if(payDetails.Amount<TotalAmount) {
        alert('Insufficient balance');
    } else {
        localStorage.setItem('payDetails',JSON.stringify(payDetails));
        location.href = "face.html";
    }
    ///here account is to be checked
}