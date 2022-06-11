// Decleration of Variables
const errorMessage = document.getElementById('errorMessage')
const emailReq = document.getElementById('emailRe')
const passwordReq = document.getElementById('passwordRe')
const loginBtn = document.getElementById('loginReq')
const checkbox = document.getElementById('exampleCheck1')


// Adding an Event listener for the login button
loginBtn.addEventListener('click', validationForm)

// checkbox.addEventListener('click', validateNext)

// // Creating a function for validation
// function validateNext() {
//     let checkbox = document.querySelector('input[type= checkbox]:checked')

//     if (!checkbox) {
//         alert('please check the box')

//     }
// }
// validateNext();



// creating a function for form validation
function validationForm(e) {
    // Process of preventing default submit action
    e.preventDefault();


    // creating an array of errormessages
    let message = []

    if (emailReq.value === '') {
        message.push(" Please fill in your details")
    }

    if (passwordReq.value === '') {
        message.push()
    }

    if (passwordReq.value.length < 8) {
        message.push("Password must be at least 8 characters")
    }

    if (message.length > 0) {
        errorMessage.innerText = message.join(',')
    }


    // if (message.length > 0) {
    //     errorMessage.innerText = message.join(',')
    // }

    if (checkbox.checked === true) {
        alert('Welcome home')
    }
    if (checkbox.checked === false) {
        alert('Please tick the checkbox')
        // window.location = 'C:\Users\HyelNet\Desktop\webclass\JSProject\CBT SIGN IN\signIn.html'
    } else {
        window.location = 'file:///C:/Users/HyelNet/Desktop/webclass/JSProject/CBT/cbtExam.html'
    }
}

// creating a function for Email validation
function ValidateEmail(emailRe) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRe.value.match(validRegex)) {

        // alert("Valid email address!");

        emailRe.focus();

        return true;

    } else {

        alert("Invalid email address!");

        //   emailRe.focus();

        return false;

    }
}