


const star_Py = Number(process.argv[2])

let patten_3 = ""
for ( let q = 1 ; q <= star_Py; q ++){
    for (let w = 1; w <= q ; w++){
        patten_3 += "*"
    }
    patten_3 += "\n"
}
console.log(patten_3)