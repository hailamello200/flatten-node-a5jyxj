/**
 * Desafio: escrever uma função que receba um array com valores ou sub-arrays, e retorne todos os valores abertos em um único array
 * Todos os valores serão compostos por numeros inteiros.
 *
 * IMPORTANTE:
 * Não devem ser utilizadas as funções flat() ou flatMap() dos arrays.
 * A ideia é avaliar a lógica utilizada, e não a utilização dos métodos prontos.
 *
 * Voce pode testar o seu codigo rodando o comando `npm run test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @example `flatten([1, [2, 3], 4, [5, 6]])` retorna `[1, 2, 3, 4, 5, 6]`
 * @param numbers array de inteiros ou sub-arrays
 * @returns novo array, somente com os valores
 */

/* const arrayNumeros = [10, [20, 30], 40, [50, 60]];
arrayNumeros.forEach(flatten);

function flatten(elemento) {
  return [elemento.toString()];
}
*/

function flatten(array) {
  //converte o array em string e remove caracters diferentes de números e virgula
  let vetorString = array.toString().replace(/[^0-9,]/g, '');

  //converte para array novamente
  const arrayStrings = vetorString.split(',');
  let arrayRetorno = [];

  //alimenta o array de retorno com os caracters convertidos em inteiros
  for (let e = 0; e < arrayStrings.length; e++) {
    arrayRetorno.push(parseInt(arrayStrings[e], 10));
  }
  return arrayRetorno;
}
module.exports = flatten;
