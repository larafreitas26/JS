/* 
+ Adição e concatenação
- subtração
/ divisão
** potenciação
% resto da divisão (módulo)
*/
const a = 1;
const b = 2; 
const c = 10;
const d = 5;
console.log(a+b);
console.log(c%d);
// Há precedência entre os operadores 
/* Precedência: 
() 
**
* / %
+
-  
Operadores que apresentam a mesma precedência serão lidos da esquerda para direita.*/
// Pré-incremento ou Pós incremento 
let contador = 1; 
console.log(contador++);
console.log(++contador);
// Pré-decremento ou Pós decremento 
let contador2 = 1; 
console.log(--contador);
console.log(contador--);
let contador3 = 0;
let passo = 2;
/* 
contador3 = contador3 + passo
contador3 += contador + passo */
console.log(contador3+=passo);

const num3 = parseInt('5');
const num4 = parseFloat('5');
// NaN - Not a number 

