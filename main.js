//test
// // 6 kyu

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

let cardinalCount = {}

function countCardinals(arr){
  for(const ele of arr){
    if(cardinalCount[ele]){
    cardinalCount[ele] += 1
    }else{
    cardinalCount[ele] = 1
    }}
}

function isValidWalk(walk) {
  countCardinals(walk)
  return cardinalCount.n === cardinalCount.s && cardinalCount.e === cardinalCount.w && walk.length === 10
  cardinalCount = {}
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