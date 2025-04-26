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

/**
 * Valida se uma string é um CNPJ válido
 * @param {string} cnpj - CNPJ a ser validado
 * @returns {boolean} true se for um CNPJ válido, false caso contrário
 */
function validaCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

  // Validação do primeiro dígito
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  const digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(0))) return false;
  
  // Validação do segundo dígito
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(1))) return false;
  
  return true;
}

// Exportando as funções para uso externo
module.exports = {
  soma,
  subtrai,
  formataMoedaBR,
  validaCPF,
  validaCNPJ
};