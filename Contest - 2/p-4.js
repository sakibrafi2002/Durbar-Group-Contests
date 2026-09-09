function findLongestWord(sentence) {
  const words = sentence.match(/[a-zA-Z0-9]+/g) || [];
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

//console.log(findLongestWord(".,,,"));
