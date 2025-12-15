const User_lc9 = process.argv[2];
if (User_lc9 === undefined) process.exit();
let r = false;
let s = false;
if (User_lc9.length >= 8) {
    for (let p = 0; p <= User_lc9.length; p++){
        if(User_lc9[p] === undefined){
            break
        }
        if (isNaN(Number(User_lc9[p])) && (User_lc9[p].toUpperCase() === User_lc9[p])){
            r = true
        }
        else{
            s = true
        }
    }
    if (r && s){
        console.log("Valid")
    }
    else{
        console.log("Invalid")
    }
} 
else {
    console.log("Invalid")
}