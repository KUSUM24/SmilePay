const checkingFirstValues = () => {
    if(localStorage.getItem('firstDetails') !=  " ") {
        let firstDetails =  JSON.parse(localStorage.getItem('firstDetails'));
        document.getElementById('name').value = firstDetails.Name;
        document.getElementById('number').value = firstDetails.Number;
        document.getElementById('email').value = firstDetails.Email;
    }
}
const checkingSecondValues = () => {
    if(localStorage.getItem('secondDetails') != " ") {
        let secondDetails =  JSON.parse(localStorage.getItem('secondDetails'));
        document.getElementById('account').value = secondDetails.Account;
        document.getElementById('aadhar').value = secondDetails.Aadhar;
        document.getElementById('pan').value = secondDetails.Pan;
    }
}
const checkingThirdValues = () => {
    if(localStorage.getItem('thirdDetails') != " ") {
        let thirdDetails =  JSON.parse(localStorage.getItem('thirdDetails'));
        document.getElementById('username').value = thirdDetails.Username;
    }
}