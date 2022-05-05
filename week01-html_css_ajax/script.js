const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const submitName = document.getElementById('submit-name');
const submitPhone = document.getElementById('submit-phone');
const submitEmail = document.getElementById('submit-email');
const submitWebsite = document.getElementById('submit-website');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // use HTML constraint API to check form validity
  isValid = form.checkValidity();
  // if the form isn't valid
  if (!isValid) {
    // style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // check to see if both password fields match
  if (password1.value === password2.value) {
    // if they match, set value to true and borders to green
    passwordsMatch = true;
    password1.style.borderColor = 'green';
    password2.style.borderColor = 'green';
  } else {
    // if they don't match, border color of input to red, change message
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1.style.borderColor = 'red';
    password2.style.borderColor = 'red';
    return;
  }
  // if form is valid and passwords match
  if (isValid && passwordsMatch) {
    // style main message for success
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  // // store data in local storage
  // localStorage.setItem('name', form.name.value);
  // localStorage.setItem('phone', form.phone.value);
  // localStorage.setItem('email', form.email.value);
  // localStorage.setItem('website', form.website.value);
  // localStorage.setItem('password', form.password.value);

  submitName.innerHTML = form.name.value;
  submitPhone.innerHTML = form.phone.value;
  submitEmail.innerHTML = form.email.value;
  submitWebsite.innerHTML = form.website.value;

  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // log form data to the console
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // validate Form
  validateForm();
  // submit Form if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// event Listener
form.addEventListener('submit', processFormData);
