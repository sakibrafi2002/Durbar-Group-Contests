function countNumberProperties(numbers) {
  // TODO: Implement this function
  let even=0, negative=0, odd=0, positive=0;
  for(let i in numbers){
    if((Math.abs(numbers[i]))%2 === 0) even++;
    if((Math.abs(numbers[i]))%2 === 1) odd++;
    if(numbers[i] > 0 ) positive++;
    if(numbers[i] < 0) negative++;
  }

  return {
    even,
    negative,
    odd,
    positive
  };
}