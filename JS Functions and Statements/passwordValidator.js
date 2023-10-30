function isValid(password) {
    let flag = true;
    if (password.length < 6 || password.length > 10) {
        flag = false;
        console.log("Password must be between 6 and 10 characters");
    }
    if (onlyDigitsAndNumbers(password) == false) {
        flag = false;
        console.log("Password must consist only of letters and digits");
    }
    if (twoDigits(password) == false) {
        flag = false;
        console.log("Password must have at least 2 digits");
    }

    if (flag == true) {
        console.log("Password is valid");
    }


    function onlyDigitsAndNumbers(pass) {
        return /^[A-Za-z0-9]*$/.test(pass);
    }
    function twoDigits(pass) {
        let reg=/[0-9]/g;
        let count=0;
        const matches=pass.match(reg);
        if(matches==null)
        {
            return false;
        }
      for(let i=0;i<matches.length;i++)
      {
        count++;
      }
        if (count < 2) {
            return false;
        }
        return true;
    }
}
