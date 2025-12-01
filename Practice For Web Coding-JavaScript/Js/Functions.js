console.log("Error");

//Base-Regular Fucntion
function ShowError() {
    console.log("Error Apeared");
    console.log("Error.dlls missing");
    console.log("202.boplsc not found");
}

ShowError(); //To Call Function 

//Arrow Function 
//->With KeyWord
let ErrorFound = () => {
    console.log("Error Found");
    console.log("Error.202");
    console.log("204.not found");
}

ErrorFound();

//->Without KeyWord
Error = () => {
    console.log("Error");
    console.log("Error.8801");
    console.log("ip.missing");
}

Error();

//Parameterized 
function Calc(x, y) {
    console.log(x + y);
}

Calc(121, 212);

let multi = (a, b) => {
    console.log(a * b);
}

multi(120, 20);