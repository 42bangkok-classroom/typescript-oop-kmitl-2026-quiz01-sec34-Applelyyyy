
const light_action = process.argv[2]
if (light_action === undefined){
    console.log("Error")
    process.exit()
}

switch (light_action.toUpperCase()){
    case "RED": console.log("Stop"); break
    case "YELLOW": console.log("Caution"); break
    case "GREEN": console.log("Go"); break
    default: console.log("Unknown"); break
}