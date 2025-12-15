








const pattern2 = Number(process.argv[2])
let pattern_3 = ''
for (let a = 1 ; a<= pattern2; a++){
  if (a % 2 === 0 ){
    for (let s = 1; s <= pattern2; s++){
      pattern_3 += '0'
    }
  }
  else{
      for (let f = 1; f <= pattern2; f++){
        pattern_3 += '1'
    }
  }
  pattern_3 += '\n'
  }
console.log(pattern_3)