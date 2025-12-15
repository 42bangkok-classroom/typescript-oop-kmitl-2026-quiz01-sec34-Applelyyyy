const text = process.argv[2];

if (text === undefined) {
    process.exit();
}

let reverse = "";
for ( let i = text.length -1; i >= 0; i--){
    reverse += text[i];
}
console.log(reverse)