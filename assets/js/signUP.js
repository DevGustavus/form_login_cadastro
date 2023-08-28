const mode = document.getElementById("mode_icon");
const email = document.getElementById("email_signUP");
const nameSignUp = document.getElementById("name_signUP");
const password = document.getElementById("password_signUP");
const confirmPassword = document.getElementById("confirm_password");
const signUP = document.getElementById("signUP_button");
const msg = document.getElementById("msg");

mode.addEventListener('click', () => {

    const form = document.getElementById("login-form");

    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
    }
    else{
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
    }

    form.classList.toggle('ativo');
});

function validateForm(){
    let emailValue = email.value;
    let nameValue = nameSignUp.value;
    let passwordValue = password.value;
    let confirmPasswordValue = confirmPassword.value;
  
    if (emailValue === '' || nameValue === '' || passwordValue === '' || confirmPasswordValue === ''){
        return false;
    }
    else if(passwordValue != confirmPasswordValue){
        return false;
    }

    return true;
}

signUP.addEventListener('click', function(submit_signUP){
    submit_signUP.preventDefault();

    if (validateForm()){
        
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]');

        listUser.push(
            {
                emailSign: email.value,
                nameSign: nameSignUp.value,
                passwordSign: password.value
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser));

        msg.setAttribute('style', 'display: block; color: green');
        msg.innerHTML = "<strong>Cadastro realizado com sucesso!</strong>";

        setTimeout( () => {
            window.location.href = 'http://127.0.0.1:5500/index.html';
        }, 2000);
        
    } else{
        msg.setAttribute('style', 'display: block; color: red');
        msg.innerHTML = "<strong>Preencha os campos corretamente!</strong>";
    }
});
