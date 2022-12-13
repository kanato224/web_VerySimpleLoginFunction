function main_login() {
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;
    if(id == "") {
        document.getElementById("message").innerHTML = "ID が入力されていません";
    } else {
        if(password == "") {
            document.getElementById("message").innerHTML = "Password が入力されていません";
        } else {
            document.getElementById("message").innerHTML = "";
            window.location.href = ("./Users/" + id + "_" + password + "/");
        };
    };
};
