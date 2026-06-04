// Project Euler - freeCodeCamp
// Problemas: 4, 5, 7, 15 e 36

function isPalindrome(value) {
  const text = String(value);
  return text === text.split('').reverse().join('');
}

// Problema 4: Largest palindrome product
function largestPalindromeProduct(n) {
  const max = 10 ** n - 1;
  const min = 10 ** (n - 1);
  let maior = 0;

  for (let i = max; i >= min; i--) {
    if (i * max < maior) break;

    for (let j = i; j >= min; j--) {
      const produto = i * j;
      if (produto <= maior) break;

      if (isPalindrome(produto)) {
        maior = produto;
        break;
      }
    }
  }

  return maior;
}

// Problema 5: Smallest multiple
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestMult(n) {
  let resultado = 1;

  for (let i = 2; i <= n; i++) {
    resultado = lcm(resultado, i);
  }

  return resultado;
}

// Problema 7: 10001st prime
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function nthPrime(n) {
  let contador = 0;
  let numero = 1;

  while (contador < n) {
    numero++;
    if (isPrime(numero)) contador++;
  }

  return numero;
}

// Problema 15: Lattice paths
function latticePaths(gridSize) {
  // Quantidade de caminhos em uma grade n x n: C(2n, n)
  let resultado = 1;

  for (let i = 1; i <= gridSize; i++) {
    resultado = (resultado * (gridSize + i)) / i;
  }

  return resultado;
}

// Problema 36: Double-base palindromes
function isBinaryPalindrome(num) {
  return isPalindrome(num.toString(2));
}

function doubleBasePalindromes(n) {
  let soma = 0;

  for (let i = 1; i < n; i++) {
    if (isPalindrome(i) && isBinaryPalindrome(i)) {
      soma += i;
    }
  }

  return soma;
}

console.log('Questão 4:', largestPalindromeProduct(3));
console.log('Questão 5:', smallestMult(20));
console.log('Questão 7:', nthPrime(10001));
console.log('Questão 15:', latticePaths(20));
console.log('Questão 36:', doubleBasePalindromes(1000000));

module.exports = {
  largestPalindromeProduct,
  smallestMult,
  nthPrime,
  latticePaths,
  doubleBasePalindromes
};
