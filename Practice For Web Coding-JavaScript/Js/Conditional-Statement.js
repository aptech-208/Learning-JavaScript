console.log("IF - ElseIf - Else | Statement");

//If - Else
// let input = prompt("Your Current Age", "");
// console.log(input);
// if (input >= 18) {
//     document.write("You are 18+ Verified");
// }
// else {
//     document.write("You are 18- Verification Failed");
// }

//If - ElseIf - Else
let inp = prompt("Your Current Age", "");
console.log(inp);
if (inp >= 19) {
    document.write("Proceed 19+");
}
else if (inp == "") {
    document.write("Add Your Age");
}
else {
    document.write("Cant-Proceed");
}