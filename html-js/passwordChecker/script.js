function password() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const mesazh = document.getElementById("mesazhi");

  if (password !== confirmPassword) {
    mesazh.textContent = "Passwordet nuk perputhen";
    return;
  }

  mesazh.textContent = "Signed in";
  window.location.href =
    "http://127.0.0.1:5500/html-js/passwordChecker/example.html";
}
