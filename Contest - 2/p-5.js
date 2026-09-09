function findSecondLargestUnique(numbers) {
  let uniqueNumbers = new Set();

  for(const num of numbers){
    uniqueNumbers.add(num);
  }

  if (uniqueNumbers.size <= 1) return null;
  
  let sortedNumbers = [...uniqueNumbers].sort((a, b) => b - a);

  return sortedNumbers[1];
}
