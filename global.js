"use strict";
var window;
var document;
var console;

window.onload = function () {
    var myForm = document.forms["login-form"];
    var output = document.getElementById("output");
    
    var userName = myForm["login-username"];
    var passWord = myForm["login-pass"];
    var checkOutput;

    myForm.onsubmit = function () {
        checkOutput = checkLogin(userName.value, passWord.value);
        if (checkOutput === "No Username entered") {
            userName.style.backgroundColor = "red";
            output.innerHTML = checkOutput;
            return false;
        }
        userName.style.backgroundColor = "white";
        if (checkOutput === "No Password entered") {
            passWord.style.backgroundColor = "red";
            output.innerHTML = checkOutput;
            return false;
        }
        if (checkOutput === "Invalid Username or Password") {
            userName.style.backgroundColor = "lightyellow";
            passWord.style.backgroundColor = "lightyellow";
            output.innerHTML = checkOutput;
            return false;
        }
        passWord.style.backgroundColor = "white";
        output.style.display = "block";
        output.innerHTML = "Welcome back!";
        return false;
    };
};

// Function to encrypt password using MD5
function md5Encrypt(input){
    return CryptoJS.MD5(input) + "";
}

// function to validate login
function checkLogin(inputUsername, inputPassword){
    let validMess = true;
    let invalidMess = "Invalid Username or Password";
    let noUsernameMess = "No Username entered";
    let noPasswordMess = "No Password entered";

    let desiredUsername = "bibek";
    let desiredPassword = "a96cdd558dcbc0d1f98618caf0493ea7";// MD5 output for "imironman"

    var output;

    if (inputUsername === "" || inputUsername === null){
        output = noUsernameMess;
        return output;
    }

    if (inputPassword === "" || inputPassword === null){
        output = noPasswordMess;
        return output;
    }
    
    var encryptedPassword;
    if (inputPassword !== ""){
        encryptedPassword = md5Encrypt(inputPassword);
    }

    if (inputUsername === desiredUsername && encryptedPassword === desiredPassword){
        output = validMess;
    } else {
        output = invalidMess;
    }
    return output;
}