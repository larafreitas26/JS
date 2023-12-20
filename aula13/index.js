let varA = 'A';
let varb = 'B'; 
let varc = 'C';

const varATemp = varA
varA = varb; 
varb = varc;
varc = varATemp;
console.log(`${varA} ${varb} ${varc}`);