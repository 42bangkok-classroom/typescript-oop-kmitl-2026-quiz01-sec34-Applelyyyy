
const temperature = parseFloat(process.argv[2]);

if (temperature > 30) {
    console.log('Hot');
} else {
    console.log('Normal');
}