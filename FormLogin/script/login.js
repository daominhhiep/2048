const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "123456";
let input = document.querySelectorAll("input");
let button = document.querySelectorAll("button");

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username !== DEFAULT_USERNAME || password !== DEFAULT_PASSWORD) {
        swal("Oops!", "Đăng nhập thất bại, mời đăng nhập lại!", "error");
        return false;
    } else if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD){
        return true;
    }
}

function check() {
    if (input[0].value != "" && input[1].value != "")
        button.disabled = false;
    else {
        button.disabled = true;
    }
}
let eye = document.querySelector(".pass");
eye.addEventListener("click",function () {
    if(this.classList[2]== "fa-eye"){
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
        input[1].type="text";
    } else {
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
        input[1].type="password";
    }
})
input[0].addEventListener("keyup",check);
input[1].addEventListener("keyup",check);
