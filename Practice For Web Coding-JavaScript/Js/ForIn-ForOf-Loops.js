const inpout = ["Keyboard", "Mouse", "Monitor", "Printer"]
const gpu = {
    name: "Amd Radeon Rx 6700 xtx",
    brand: "Amd",
    subvendor: "Msi Ventus",
    seriel: "rx129077009081",
}

//For Of { Used To Print Array DataType }
for (value of inpout) {
    console.log(value);
}

console.log("-----------");

//For In { Used To Print Object DataType }
for (key in gpu) {
    console.log(gpu[key]);
}