// // 6 kyu
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  const individualWords = x.split(' ')
  const numerizedWords = individualWords.map(e => e.split('').reduce((acc, c) => acc + c.charCodeAt(0) - 96, 0))
  return individualWords[numerizedWords.indexOf(Math.max(...numerizedWords))]
}

//Complete the solution so that the function will break up camel casing, using a space between words.
//Example
//"camelCasing"  =>  "camel Casing"

function solution(string) {
  return string.split(/(?=[A-Z])/).join(" ");
}

// 7 kyu

// 8 kyu

//Write a function that returns a string in which firstname is swapped with last name.
//Example(Input --> Output)
//"john McClane" --> "McClane john"

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
 }

 function solution(string) {
  return string.split(/(?=[A-Z])/).join(' ')
 }