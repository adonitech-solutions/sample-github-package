/**
 * @file Biblioteca de exemplo para GitHub Packages
 * @author Adonitech
 */

/**
 * Soma dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} A soma de a e b
 */
function soma(a, b) {
  return a + b;
}

/**
 * Subtrai dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} A subtração de b de a
 */
function subtrai(a, b) {
  return a - b;
}

/**
 * Formata um valor para moeda brasileira
 * @param {number} valor - Valor a ser formatado
 * @returns {string} Valor formatado como moeda brasileira
 */
function formataMoedaBR(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/**
 * Valida se uma string é um CPF válido
 * @param {string} cpf - CPF a ser validado
 * @returns {boolean} true se for um CPF válido, false caso contrário
 */
function validaCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;
  
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

  return digitoVerificador1 === parseInt(cpf.charAt(9)) && 
         digitoVerificador2 === parseInt(cpf.charAt(10));
}

// Exportando as funções para uso externo
module.exports = {
  soma,
  subtrai,
  formataMoedaBR,
  validaCPF
};