function findFirstUniqueChar(s) {
  // TODO: Implement this function
  let freq = new Array(26).fill(0);
  for(i of s){
    freq[i.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  //console.log(freq);
  for(i of s){
    if((freq[i.charCodeAt(0) - 'a'.charCodeAt(0)]) === 1) return i;
  }

  return (-1);

}

//console.log(findFirstUniqueChar("aabbcdeff"));