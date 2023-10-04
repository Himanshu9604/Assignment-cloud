// 1. Take a sentence as an input and reverse every word in that sentence.
// Example - This is a sunny day > shiT si a ynnus yad.

function reverseWords(sentence) {
    return sentence.split(/\b/).map(word => {
      if (/[a-zA-Z]/.test(word)) {
        return word.split('').reverse().join('');
      }
      return word;
    }).join('');
  }
  
  const inputSentence = "This is a sunny day!";
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence);
  