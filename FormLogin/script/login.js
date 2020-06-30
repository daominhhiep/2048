const DEFAULT_USERNAME = "admin";
const DEFAULT_PASSWORD = "123456";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username !== DEFAULT_USERNAME || password !== DEFAULT_PASSWORD){
        alert("Đăng nhập thất bại, mời đăng nhập lại!");
        return false;
    }else if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD){
        alert("Đăng nhập thành công!")
    }
}




//         if (user == DEFAULT_USERNAME) {
//             if (pass == "") {
//                 swal("Mật khẩu không được để trống.");
//                 break;
//             }
//             if (pass == DEFAULT_PASSWORD) {
//                 alert("Đăng nhập thành công");
//                 break;
//             } else {
//                 alert("Bạn đã nhập sai mật khẩu");
//                 break;
//             }
//         }
//         else if (user == "" || pass == "") {
//             swal ("Tên tài khoản và mật khẩu không được để trống.");
//             break;
//         }
//         else if (user == "") {
//             swal ("Tên tài khoản không được để trống.");
//             break;
//         }
//         else if (pass == "") {
//             swal("Mật khẩu không được để trống.");
//             break;
//         }
//         else if (user !== DEFAULT_USERNAME) {
//             alert("Bạn chưa đăng ký hoặc tên tài khoản sai!");
//             break;
//         }
//     }
//     return true;
// }





