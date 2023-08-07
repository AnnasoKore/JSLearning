console.log("-------------- Assignment A - Task - 1 --------------");
function countVowels(str) {
  let count = 0;
  let vowels = "";
  for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      vowels = vowels.concat(char).concat(" ");
      count++;
    }
  }
  console.log(
    `Vowels in given string is : '${vowels}'\nand Total number of Vowels is : ${count}`
  );
}
countVowels("I am very good IT Developer");

console.log("--------------------- Task - 2 --------------------");
function sumOFCubeOfNumbers(num) {
  let sumOFCube = 0;
  for (let index = 1; index <= num; index++) {
    sumOFCube = sumOFCube + index * index * index;
  }
  console.log(`Sum of cube of first ${num} numbers is : ${sumOFCube}`);
}
sumOFCubeOfNumbers(5);
sumOFCubeOfNumbers(8);

console.log("--------------------- Task - 3 --------------------");
function oddPositionedCharacters(str) {
  let oddCharacters = "";
  for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index);
    if (index % 2 != 0 && char != " ") {
      oddCharacters = oddCharacters.concat(char).concat(" ");
    }
  }
  console.log(
    `Odd characters in given string '${str}' is : \n'${oddCharacters}'`
  );
}
oddPositionedCharacters("Hard work always pays back");
oddPositionedCharacters("Soon I will be Angular IT Champ");

console.log("-------------- Assignment B - Task - 1 --------------");
function reverseString(str) {
  let reverseStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    let char = str.charAt(index);
    if (char == " ") {
      continue;
    }
    reverseStr = reverseStr.concat(char);
  }
  console.log(`Revers of given string '${str}' is : \n'${reverseStr}'\n`);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");
