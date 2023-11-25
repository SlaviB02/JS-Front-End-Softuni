function validate() {
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;
    let email=document.getElementById("email");
    email.addEventListener('change',validateEmail);
    function validateEmail(e)
    {
        if(reg.test(e.target.value))
        {
            e.target.removeAttribute('class');
return;
        }
        e.target.className = 'error';
    }
}