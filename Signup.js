
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

function validateForm()
{	
	var mail=document.myForm.email.value;
    var pass=document.myForm.password.value;
    var uname= document.myForm.username.value;

    var passpattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

	var length=pass.length;
    if(uname== "" || mail=="" || pass=="")
	{
		alert("YOU HAVE MISSED SOMETHING : (  ");
		
		return false;
    }
    else if(!pass.match(passpattern)) 
    { 
      alert("WRONG PASSWORD PATTERN: Password must contain atleast 6 characters , a digit,a lower case letter and an upper case letter");
      return false;
	  
    }
	
	return true;
	
		
}
