// Desafio 1 - Crie a função compareTrue
const compareTrue = (test1, test2) => test1 === true && test2 === true;
// Desafio 2 - Crie a função splitSentence
const splitSentence = (a) => a.split(' ');
// Desafio 3 - Crie a função concatName
const concatName = (cname) => `${cname.pop()}, ${cname.shift()}`;
// Desafio 4 - Crie a função footballPoints
const footballPoints = (p1, p2) => p1 * 3 + p2 * 1;
// Desafio 5 - Crie a função highestCount
const highestCount = (a) => {
  let max = Math.max(...a);
  let count = 0;

  for (let index = 0; index < a.length; index += 1) {
    if (a[index] === max) {
      count += 1;
    }
  }
  return count;
};
/*
const highestCount = (array) => {let mcontagem = array[0]; let rep = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > mcontagem) {
      mcontagem = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === mcontagem) {
      rep += 1;
    } 
  }
  return rep
}*/

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcRectangleArea = (base, height) => base * height;
const calcTriangleArea = (base, height) => (base * height) / 2;
function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(
      base,
      height
    )}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(
      base,
      height
    )}`;
  } else
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
} else {
    return "os gatos trombam e o rato foge";
  }
}
// Desafio 8 - Crie a função fizzBuzz
function fizzBuzz(array) {
  let test = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      test.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      test.push('buzz');
    } else if (array[index] % 3 === 0) {
      test.push(`fizz`);
    } else {
      test.push('bug!');
    }
  }
  return test;
}
// Desafio 9 - Crie a função encode e a função decode
function encode(string) {
  return string.replaceAll('a', '1')
  .replaceAll('e', '2')
  .replaceAll('i', '3')
  .replaceAll('o', '4')
  .replaceAll('u', '5')
  }

  function decode(string) {
    return string.replaceAll('1', 'a')
    .replaceAll('2', 'e')
    .replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u')
    }
// Desafio 10 - Crie a função techList
function techList(array,string) {
  array = array.sort();
  let novoArray = [];
  for (let index = 0; index < array.length; index += 1) {
  novoArray.push({tech: array[index], name: string})   
  }
  return novoArray;
  }
// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => { },
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => { },
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => { },
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => { },
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => { },
  concatName: typeof concatName === 'function' ? concatName : () => { },
  decode: typeof decode === 'function' ? decode : () => { },
  encode: typeof encode === 'function' ? encode : () => { },
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => { },
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => { },
  highestCount: typeof highestCount === 'function' ? highestCount : () => { },
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => { },
  techList: typeof techList === 'function' ? techList : () => { },
};
