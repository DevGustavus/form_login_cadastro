const mode = document.getElementById("mode_icon");
const msg = document.getElementById("msgLogin");
const login = document.getElementById("login_button");
const email = document.getElementById("email_login");
const nameLogin = document.getElementById("name_login");
const password = document.getElementById("password_login");

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

login.addEventListener('click', function(submit_login){
    submit_login.preventDefault();

    let listUser = JSON.parse(localStorage.getItem('listUser'));

    let flag = 0;

    listUser.forEach((element) => {

        if(email.value == element.emailSign && nameLogin.value == element.nameSign && password.value == element.passwordSign){  
            flag = 1;
        }

    });

    if(flag == 0){
        msg.setAttribute('style', 'display: block; color: red');
        msg.innerHTML = "<strong>Usuário não encontrado!</strong>";
    }
    else{
        msg.setAttribute('style', 'display: block; color: green');
        msg.innerHTML = "<strong>Login realizado com sucesso!</strong>";
    }

});
