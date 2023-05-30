

//Sign In And Signup Redirection

function sendSignUp(){
    window.location.href = "signup.html";
}

function sendSignIn(){
    window.location.href = "signin.html";
}

//Sign In And Signup Redirection Ends


//Navbar dropdowns

var dropDown = document.getElementById("menu");

function openDropdown(){
    dropDown.classList.toggle("show");
}

function closeDropdown(){
    dropDown.classList.remove("show");
};

var dropDown1 = document.getElementById("menu1");

function openDropdown1(){
    dropDown1.classList.toggle("show1");
}

function closeDropdown1(){
    dropDown1.classList.remove("show1");
};

//End Navbar dropdown



//All Overlay For Index

var openOverlay = document.getElementById('overlay');

function openMe(){
    openOverlay.classList.add('openOverlay');

}

function closeMe(){
        openOverlay.classList.remove('openOverlay');
}


//End Index Dropdowns


// Signin/up Effect
var run = document.getElementById('pop-main');



function visible(){
    run.classList.add('pop-show');
}

function visible_1(){
    run.classList.remove('pop-show');
}
// Signin/up Effect ends

//home redirection

function home(){
    window.location.href = 'index.htm';
}

/*Dark mode toggle script

const toggleChange = document.getElementById('toggleLight');
const body = document.querySelector('body');

toggleChange.addEventListener('click', function(){

    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon-fill')){
         body.style.background = 'black';
         body.style.color = "white";
         body.style.transition = '2s';
    }else{
        body.style.background = 'white';
         body.style.color = "black";
         body.style.transition = '2s';
    }
})*/

/*function lightmode(){
    var element = document.body;
    element.classList.toggle('body-light-mode');
}*/

//Form Validation 

var nameError = document.getElementById('name-error');
var passwordError = document.getElementById('password-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match (/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class= "bi-check-circle-fill"></i>';
    return true;
}

function validatePassword(){
    var password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.innerHTML = 'password is required';
        return false;
    }
    if(password.length < 8){
        passwordError.innerHTML = 'At least 8 digits';
        return false;
    }
        passwordError.innerHTML = '<i class= "bi-check-circle-fill"></i>';
        return true;
}


function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email  is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class= "bi-check-circle-fill"></i>';
        return true;
}

function validateForm(){
    if(!validateName() || !validatePassword() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill out all fields';
        setTimeout(function(){submitError.style.display = 'none'}, 3000);
        return false;
    }
}

function validateFormSignin(){
    if(!validatePassword() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill out all fields ';
        setTimeout(function(){submitError.style.display = 'none'}, 3000);
        return false;
    }
}

//Form Validation Ends
