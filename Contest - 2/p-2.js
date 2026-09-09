function countEvenOdd(numbers) {
  // TODO: Implement this function
  let even = 0, odd = 0;
  for(number of numbers){
    if(number % 2) odd++;
    else even++;
  }

  return { even, odd };
}

