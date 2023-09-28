// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  let checker = sq + 1
  if(!checksIfPerfectSquare(sq)){
    return -1;
  }else{
    do{
      if(checksIfPerfectSquare(checker)){
        return checker
      }else{
        checker++
      }
    }while(!checksIfPerfectSquare(checker-1));
  }
}

function checksIfPerfectSquare(n){
  return Math.sqrt(n) % 1 === 0
}

console.log(findNextSquare(121))

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);
