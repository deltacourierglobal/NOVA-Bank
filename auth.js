const loginForm =
document.getElementById("loginForm");

const togglePassword =
document.getElementById("togglePassword");

const passwordInput =
document.getElementById("password");

const loginMessage =
document.getElementById("loginMessage");

togglePassword.addEventListener("click",()=>{

if(passwordInput.type==="password"){

passwordInput.type="text";

togglePassword.innerHTML =
'<i class="fa-solid fa-eye-slash"></i>';

}else{

passwordInput.type="password";

togglePassword.innerHTML =
'<i class="fa-solid fa-eye"></i>';

}

});

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email =
document.getElementById("email").value;

const password =
passwordInput.value;

loginMessage.innerHTML =
"<p>Authenticating...</p>";

setTimeout(()=>{

if(email && password){

loginMessage.innerHTML =
"<p style='color:green'>Login Successful</p>";

window.location.href =
"dashboard.html";

}else{

loginMessage.innerHTML =
"<p style='color:red'>Invalid Credentials</p>";

}

},1500);

});