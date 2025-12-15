


const pattern3 = Number(process.argv[2])

let pattern_4 = ''
for (let z = 1; z <= pattern3; z++ ){
  for ( let x = 1; x <= pattern3; x++){
    if ( x % 2 === 0){
      pattern_4 += '1'
    }
    else{
      pattern_4 += '0'
    }
  }
  pattern_4 += '\n'
}
console.log(pattern_4)