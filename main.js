
// // 6 kyu

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length === 0){
    return "no one likes this"
  }else if(names.length === 1){
    return `${names[0]} likes this`
  }else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
   }else{
     return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
 }
}

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