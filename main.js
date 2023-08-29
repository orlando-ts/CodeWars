// 7 kyu

// 8 kyu


//Write a function that returns a string in which firstname is swapped with last name.
//Example(Input --> Output)
//"john McClane" --> "McClane john"

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
 }

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

 function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((acc, cv) => acc + cv , 0);
  return sum/classPoints.length < yourPoints;
}