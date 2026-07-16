const form=document.getElementById("myForm");

let wrongAttempts=0;
let isLocked=false;

form.addEventListener("submit",function(event){

event.preventDefault();

clearErrors();

if(isLocked){

document.getElementById("passwordError").innerHTML="Password locked for 1 minute.";

return;

}

let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let email=document.getElementById("email");
let password=document.getElementById("password");
let department=document.getElementById("department");
let description=document.getElementById("description");

let gender=document.querySelector('input[name="gender"]:checked');
let services=document.querySelectorAll('input[name="service"]:checked');

let valid=true;


// First Name

if(firstName.value.trim()==""){

showError(firstName,"firstNameError","First name required");
valid=false;

}
else if(!/^[A-Za-z ]+$/.test(firstName.value)){

showError(firstName,"firstNameError","Letters only");
valid=false;

}
else{

showSuccess(firstName);

}


// Last Name

if(lastName.value.trim()==""){

showError(lastName,"lastNameError","Last name required");
valid=false;

}
else if(!/^[A-Za-z ]+$/.test(lastName.value)){

showError(lastName,"lastNameError","Letters only");
valid=false;

}
else{

showSuccess(lastName);

}


// Email

if(email.value.trim()==""){

showError(email,"emailError","Email required");
valid=false;

}
else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){

showError(email,"emailError","Invalid Email");
valid=false;

}
else{

showSuccess(email);

}


// Password

if(password.value==""){

showError(password,"passwordError","Password required");
valid=false;

}
else if(password.value!="rifat123"){

wrongAttempts++;

showError(password,"passwordError","Wrong Password Attempt "+wrongAttempts+" of 3");

valid=false;

if(wrongAttempts>=3){

isLocked=true;

password.disabled=true;

document.getElementById("passwordError").innerHTML="Password Locked for 1 minute";

setTimeout(function(){

password.disabled=false;
wrongAttempts=0;
isLocked=false;

document.getElementById("passwordError").innerHTML="Password Unlocked";

},60000);

}

}
else{

wrongAttempts=0;

showSuccess(password);

}


// Gender

if(gender==null){

document.getElementById("genderError").innerHTML="Select Gender";

valid=false;

}


// Department

if(department.value==""){

showError(department,"departmentError","Select Department");

valid=false;

}
else{

showSuccess(department);

}


// Service

if(services.length==0){

document.getElementById("serviceError").innerHTML="Select at least one service";

valid=false;

}


// Description

if(description.value.trim()==""){

showError(description,"descriptionError","Description required");

valid=false;

}
else if(description.value.trim().length<20){

showError(description,"descriptionError","Minimum 20 characters");

valid=false;

}
else{

showSuccess(description);

}


// Success

if(valid){

alert("Appointment Registration Completed Successfully!");

form.reset();

clearErrors();

}

});



function showError(input,errorId,message){

input.classList.add("errorBorder");
input.classList.remove("successBorder");

document.getElementById(errorId).innerHTML=message;

}


function showSuccess(input){

input.classList.remove("errorBorder");
input.classList.add("successBorder");

}


function clearErrors(){

let errors=document.querySelectorAll(".error");

errors.forEach(function(item){

item.innerHTML="";

});

let fields=document.querySelectorAll("input,select,textarea");

fields.forEach(function(field){

field.classList.remove("errorBorder");
field.classList.remove("successBorder");

});

}