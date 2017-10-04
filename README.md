# Caesar Cipher
Final project
# Pseudocódigo de main.js
```
Crea una función que le pregunte al usuario qué cifrar o descifrar(){
  Crea un loop en donde el resultado dependa del input ingresado {
    Si la respuesta es diferente a un espacio en blanco {
      Si la respuesta es 1 {
        Aplica la función cipher();
      } Si la respuesta es 2 {
        Aplica la función decipher();
      } Si no es ninguna de las anteriores, envíale un mensaje al usuario para que ingrese
      una opción válida;
    }
  } Repite este loop mientras la respuesta sea un espacio en blanco o cualquier cosa diferente de 1 y 2.
  
}

Crea una función para convertir cualquier string a código César (str) {
    Pregúntale al usuario qué quiere cifrar y almacena su respuesta;
    Crea una variable vacía en donde se irán añadiendo los caracteres que cambies = "";
    Crea un loop que analice los caracteres en cada índice del string {
        La variable codeAscii almacenará cada índice convertido a su equivalente Ascii;
        Si su equivalente es mayor a 65 y menor a 90 {
            La variable output almacenará el número vuelto a convertir en letra aplicándole la fórmula correspondiente;
        } Si su equivalente es mayor a 97 y menor a 122 {
            La variable output alamcenará el número vuelto a convertir en letra aplicándole la fórmula correspondiente;
        } En cualquier otro caso {
            output almacenará el equivalente número volverá a ser convertido en el caracter original;
        }
    }
    
    Crea una alert box en dónde se le entregue al usuario el resultado del cifrado ("Este es tu texto cifrado: \n" + output);
}

Crea una función para descifrar código César (str) {
    Pregúntale al usuario qué descifrar y almacena su respuesta;
    Crea una variable vacía en donde se irán añadiendo los caracteres que cambies = "";
        Crea un loop que analice los caracteres en cada índice del string {
        La variable codeAscii almacenará cada índice convertido a su equivalente Ascii;
        Si su equivalente es mayor a 65 y menor a 90 {
            La variable output almacenará el número vuelto a convertir en letra aplicándole la fórmula correspondiente;
        } Si su equivalente es mayor a 97 y menor a 122 {
            La variable output alamcenará el número vuelto a convertir en letra aplicándole la fórmula correspondiente;
        } En cualquier otro caso {
            output almacenará el equivalente número volverá a ser convertido en el caracter original;
        }
    }
    Crea una alert box en dónde se le entregue al usuario el resultado del descifrado("Este es tu texto descifrado: \n" + output);
}

```