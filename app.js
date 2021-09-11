var name;

var pas="";

let fromdata;

function signup() {
  var flag = true;
  b = document.getElementById("email").value;
  c = document.getElementById("password").value;
  d = document.getElementById("confirmPassword").value;

  if (c === d) {
    fromdata = JSON.parse(localStorage.getItem("fromdata")) || [];

    for (let i = 0; i < fromdata.length; i++) {
      if (fromdata[i].b === b) {
        alert("you already logged in");

        flag = false;
        break;
      }
    }

    if (flag) {
      fromdata.push({
        a: document.getElementById("users").value,
        b: document.getElementById("email").value,
        c: document.getElementById("password").value,
        d: document.getElementById("confirmPassword").value,
      });

      localStorage.setItem("fromdata", JSON.stringify(fromdata));

      window.location.href = "loging.html";
    }
  } else {
    alert("password does not same the confirm password");
  }
}

function logingg() {
  window.location.href = "loging.html";
}

function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  var emailcheck = true;
  var passwordcheck = true;

  fromdata = JSON.parse(localStorage.getItem("fromdata")) || [];

  for (let i = 0; i < fromdata.length; i++) {
    if (fromdata[i].b === email) {
      emailcheck = false;

      if (fromdata[i].c === pass) {
        localStorage.setItem("name",fromdata[i].a)
        localStorage.setItem("email",fromdata[i].b)
        
        
    
     
        window.location.href = "abc.html";

        passwordcheck = false;
        break;
      }
    }
  }
  if (emailcheck) {
    alert("The email is incorrect");
  } 
  else if (passwordcheck) {
    alert("The password is incorrect");
  }
}


function newfunction(){
 

  var name1=localStorage.getItem("name");
  var name2=localStorage.getItem("email");
  console.log(name2);
  document.getElementById("result-email").innerHTML=name1
  document.getElementById("result").innerHTML=name2
}
function sign() {
  window.location.href = "syalani.html";
}
/*
function newfunction(){
 
  var name1=localStorage.getItem("name");
document.getElementById("result-email").innerHTML=name1
 
}
*/