const nome = 'Lara';
const sobrenome = 'Alves de Freitas'
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let indiceMassaCorporal;
indiceMassaCorporal = peso/ (alturaEmM*alturaEmM);
let anoNascimento; 
anoNascimento = 2023 - idade; 
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg tem', alturaEmM, 'e seu IMC é de', indiceMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento);
//template
console.log(`${nome} nasceu em ${anoNascimento}`);




