function checkLogin(inputUsername, inputPassword){
    let validMess = true;
    let invalidMess = "Invalid Username or Password.";
    let noUsernameMess = "No username entered.";
    let noPasswordMess = "No password entered.";

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