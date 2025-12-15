

const pattern10 = Number(process.argv[2])

let pattern_10 = ''

for ( let i = 1 ; i <= pattern10 ; i++){
  for (let j = 1 ; j <= pattern10 ;j++){
    pattern_10 += i
  }
  pattern_10 += '\n'
}
console.log(pattern_10)