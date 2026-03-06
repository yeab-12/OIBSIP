function register(){

let user = document.getElementById("regUser").value
let pass = document.getElementById("regPass").value

localStorage.setItem(user, pass)

alert("User Registered")

}

function login(){

let user = document.getElementById("loginUser").value
let pass = document.getElementById("loginPass").value

let stored = localStorage.getItem(user)

if(pass === stored){
alert("Login Successful")
}else{
alert("Invalid login")
}

}
