

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
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var uppLetters = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z];
var lowLetters = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var specChar = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
    "~", "*", "?", ":", "\"", "\\"];




// if (passAmt >= 8 <= 128) {
//     prompt(passSpec);
// }
// else {
//     prompt(passAmt);
// }