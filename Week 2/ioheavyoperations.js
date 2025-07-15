const fs = require("fs");

const contents = fs.readFileSync('a.txt', "");
console.log(contents);

const contents2 = fs.readFileSync('b.txt', "utf-8");
console.log(contents2);

// this thing will run sequentially, first a.txt will be read and then b.txt