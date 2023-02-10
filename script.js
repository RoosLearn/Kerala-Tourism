
  function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorEmail = document.getElementById("error");
    var errorPassword = document.getElementById("error1");

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errorEmail.innerHTML = "Invalid email address";
      errorEmail.style.color = "red";
      return false;
    } else {
      errorEmail.innerHTML = "Valid Email ID";
      errorEmail.style.color = "green";
    }

    if(password.length < 8){
      document.querySelector('#error1').innerHTML = "Password is too short";
      document.querySelector('#error1').style.color = "red";
    }else if(!password.match(/[a-z]/) || !password.match(/[A-Z]/)){
      document.querySelector('#error1').innerHTML = "Password must contain at least one lowercase letter and one uppercase letter";
      document.querySelector('#error1').style.color = "red";
    }else if(!password.match(/\d+/)){
      document.querySelector('#error1').innerHTML = "Password must contain at least one number";
      document.querySelector('#error1').style.color = "red";
    }else if(password.length >= 8 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d+/)){
      if(password.length >= 8 && password.length <= 12){
        document.querySelector('#error1').innerHTML = "Password strength: weak";
        document.querySelector('#error1').style.color = "orange";
      }else if(password.length > 12 && password.length <= 16){
        document.querySelector('#error1').innerHTML = "Password strength: medium";
        document.querySelector('#error1').style.color = "orange";
      }else if(password.length > 16){
        document.querySelector('#error1').innerHTML = "Password strength: strong";
        document.querySelector('#error1').style.color = "green";
      }
    }
    
  }



