const itm = document.getElementsByClassName("item");
console.log(itm);

console.log("For ->");

for (let i = 0; i <= 13; i++) {
    console.log(itm[i].innerHTML);
}

console.log("Do-While ->");

let j = 0;
do {
    console.log(itm[j].innerHTML);
    j++;
} while (j <= 12);

console.log("While ->");

let k = 0;
while (k <= 13) {
    console.log(itm[k].innerHTML);
    k++;
}