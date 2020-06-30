const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "admin";
let input = document.querySelectorAll("input");
let button = document.querySelectorAll("button");

let login = function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username !== DEFAULT_USERNAME || password !== DEFAULT_PASSWORD) {
        swal("Oops!", "Đăng nhập thất bại, mời đăng nhập lại!", "error");
        return false;
    } else if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD){
        return true;
    }
}