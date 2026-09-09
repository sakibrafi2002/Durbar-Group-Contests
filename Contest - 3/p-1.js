function reverseEachWord(str) {
  // TODO: Implement this function
    return str = str.split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
    //console.log(str);

}


//reverseEachWord("JavaScript is fun");