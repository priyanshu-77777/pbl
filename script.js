const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginBtn.onclick = () => {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
};

registerBtn.onclick = () => {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
};

document.querySelector("#loginForm .submit")
.addEventListener("click", function() {
    window.location.href = "dashboard.html";
});