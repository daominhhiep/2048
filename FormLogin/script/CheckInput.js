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
