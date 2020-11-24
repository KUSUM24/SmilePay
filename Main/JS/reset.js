const resetData = () => {
    localStorage.setItem('firstDetails'," ");
    localStorage.setItem('secondDetails'," ");
    localStorage.setItem('thirdDetails'," ");
    localStorage.setItem('payDetails',"");
    localStorage.setItem('currentBalance',"");
    localStorage.setItem('img1',"");
    localStorage.setItem('img2',"");
    localStorage.setItem('img3',"");
    localStorage.setItem('img4',"");
    localStorage.setItem('img5',"");
    localStorage.setItem('imgNo',"2");
    localStorage.setItem('loggedInUser',"");
    let accountStatus = localStorage.getItem('accountBlocked');
    if(accountStatus=='true') {
        alert('Your account is blocked');
        localStorage.setItem('allUserDetails',"{}"); //this is not correct solution for multiple users
        localStorage.setItem('accountBlocked','false');
    }
}
