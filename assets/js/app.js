// This loop will not rest until someone input a valid option 3:)

function whatToCipher() {
  do {
    var answer = prompt('Si desea cifrar una frase, ingrese el número 1. Si desea descifrar, ingrese el número 2');
    if (answer !== '') {
      if (answer === '1') {
        cipher();
      } else if (answer === '2') {
        decipher();
      } else {
        alert('Ingrese una opción válida ¬¬');
      }
    }
  } while (answer === '' || (answer !== '1' && answer !== '2'));
};


/*
* This is the function that will cipher any phrase, but it'll ignore numbers.
* You can replace '33' with the number of words you want to shift
*/


function cipher(str) {
  str = prompt('¿Qué quieres cifrar? Por favor, evita usar números.');
  var output = '';
  for (var i = 0; i < str.length; i++) {
    var codeAscii = str.charCodeAt(i);
    if (codeAscii >= 48 && codeAscii <= 57) {
      alert('¡Los números no serán cifrados!');
      break;
      // Use of break so the alert doesn't appear one time for each number.
      continue;
      // Use of continue so the alert doesn't appear one time for each number.
    } else if (codeAscii >= 65 && codeAscii <= 90) {
      output += String.fromCharCode((codeAscii - 65 + 33) % 26 + 65);
    } else if (codeAscii >= 97 && codeAscii <= 122) {
      output += String.fromCharCode((codeAscii - 97 + 33) % 26 + 97);
    } else {
      output += String.fromCharCode(codeAscii);
    }
  }
  return prompt('Este es tu texto cifrado', output);
  // Prompt instead of alert so the user can copy/paste the result.
};

// This function will uncipher any ciphered phrase, but it'll ignore the numbers.

function decipher(str) {
  str = prompt('¿Qué quieres descifrar?');
  var output = '';
  for (var i = 0; i < str.length; i++) {
    var codeAscii = str.charCodeAt(i);
    if (codeAscii >= 48 && codeAscii <= 57) {
      alert('¡Los números no serán descifrados!');
      break;
      continue;
    } else if (codeAscii >= 65 && codeAscii <= 90) {
      output += String.fromCharCode((codeAscii - 65 - 7 + 52) % 26 + 65);
    } else if (codeAscii >= 97 && codeAscii <= 122) {
      output += String.fromCharCode((codeAscii - 97 - 7 + 52) % 26 + 97);
    } else {
      output += String.fromCharCode(codeAscii);
    }
  }
  return prompt('Este es tu texto descifrado', output);
};
