


let n = 2
let o = 3
let Largest = 0;
let range_ = 0
while(1){
    let User_lc7 = Number(process.argv[n]);
    let User_lc7_plus1 = Number(process.argv[o]);
    if (User_lc7 === undefined || isNaN(User_lc7_plus1)) break;

    if ( User_lc7 >= User_lc7_plus1) {
        Largest = User_lc7
        o++
    }
    else if ( User_lc7 <= User_lc7_plus1) {
        if ( o > n){
            range_ = o - n
            n += range_
            Largest = User_lc7
            o++
        }
    }
    range_ = 0
}
console.log(`${Largest}`)