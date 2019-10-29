//Generate Password

var passQ = confirm("Would you like to create a Password???");
var passAmt = "How many characters would you like your password to be??? Minimum 8, Maximum 128";
var passSpec = "Would you like to add special characters???";
var passNum = "Would you like to add numeric characters???";
var passLow = "Would you like lowercase characters???";
var passUpp = "Would you like uppercase characters???";
var noPass = "I guess this concludes our session...";
// var passCharAmt = (passAmt = true);


if (passQ) {
    prompt(passAmt);
}
else {
    alert(noPass);
}
// if (passAmt >= 8 && passAmt <= 128) {
//     console.log(passCharAmt);
//     prompt(passSpec);
// }

// if (passAmt >= 8 <= 128) {
//     prompt(passSpec);
// }
// else {
//     prompt(passAmt);
// }


function generate() {
    let passCharAmt = document.getElementById(passAmt = passAmt)value;

    // Possiible Password Values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    let password = "";

    for (var i = 0; i <= passCharAmt; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(value,length - 1)));
    }

    //add password to rtextbox.display area
    document.getElementById("passGenerator").value = password;

}
