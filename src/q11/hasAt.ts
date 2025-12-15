
const inputString = process.argv[2];

if (inputString.includes('@')) {
    console.log('Has @');
} else {
    console.log('No @');
}