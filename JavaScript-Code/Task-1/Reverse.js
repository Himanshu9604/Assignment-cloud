// 1. Take a sentence as an input and reverse every word in that sentence.
// Example - This is a sunny day > shiT si a ynnus yad.


function reverseWords(sentence) {
  const words = [];
  let currentWord = '';
  for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      if (/[a-zA-Z]/.test(char)) {
          currentWord = char + currentWord;
      } else {
          if (currentWord) {
              words.push(currentWord);
              currentWord = '';
          }
          words.push(char);
      }
  }
  if (currentWord) {
      words.push(currentWord);
  }
  return words.join('');
}

const inputSentence = "This is a sunny day!";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);



/////another way///


// function reverseWords(sentence) {
//     return sentence.split(/\b/).map(word => {
//       if (/[a-zA-Z]/.test(word)) {
//         return word.split('').reverse().join('');
//       }
//       return word;
//     }).join('');
//   }
  
//   const inputSentence = "This is a sunny day!";
//   const reversedSentence = reverseWords(inputSentence);
//   console.log(reversedSentence);
  