document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let passwordError = document.getElementById("password-error");
    
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    passwordError.textContent = "";

    if (username === "") {
        alert("Username wajib diisi!");
        return;
    }

    if (email === "") {
        alert("Email wajib diisi!");
        return;
    }

    if (!regexEmail.test(email)) {
        alert("Format email tidak valid!");
        return;
    }

    if (password === "") {
        passwordError.textContent = "Password wajib diisi!";
        return;
    }

    if (password.length < 8) {
        passwordError.textContent = "Password harus minimal 8 karakter!";
        return;
    }

    alert("Form berhasil dikirim!");
});
