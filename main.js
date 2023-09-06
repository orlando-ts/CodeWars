// 6 kyu
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