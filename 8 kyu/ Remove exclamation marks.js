// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    const arryString = s.split('')
    let filteredString = []
    for(let i=0; i<arryString.length; i++){
      if(arryString[i]!== '!'){
        filteredString.push(arryString[i])
      }
    }
    return filteredString.join('')
  };

function removeExclamationMarksBetterSolution(s) {
    return s.split('!').join('')
};
  