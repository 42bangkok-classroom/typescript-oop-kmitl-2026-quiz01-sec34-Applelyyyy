const User_loop6 = Number(process.argv[2])

if (User_loop6 === undefined || isNaN(User_loop6)){
    process.exit()
}


for (let i = 0; i <= User_loop6 ; i++){
    if( (i % 2) === 0){
        console.log(i.toString())
        continue;
    }
}