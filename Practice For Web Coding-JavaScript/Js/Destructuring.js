// For Array
const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday"];
console.log(weekday[0]);

// Manual Labour Way
const st = weekday[0];
const nd = weekday[1];
const th = weekday[2];
const ls = weekday[3];
console.log(ls);

// Now With Destructure Way
const [mon, tue, wed, thr] = weekday;
console.log(tue, mon, wed, thr);

// For Object
const error = {
    name: "Error.Dllss",
    type: "Dlss Missing",
    code: "404",
}
console.log(error.name);

// Manual Labour Way
const nam = error.name;
const typ = error.type;
const cod = error.code;
console.log(cod);

// Now With Destructure Way
const { name, type, code } = error
console.log(name, type, code);

// For Custom Name Use : 
const { name: q, type: w, code: e } = error
console.log(q, w, e);