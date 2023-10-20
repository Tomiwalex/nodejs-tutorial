const path = require("path");

console.log(path.sep);

// join adds the patths together
const filePath = path.join("/content", "sub-folder", "text.txt");
console.log(filePath);

// the base is the last path
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "sub-folder", "text.txt");
console.log(absolute);
