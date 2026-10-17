function chunkArray(arr, size) {
  // TODO: Return an array of chunks of length `size`
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}
