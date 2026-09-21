function countWordFrequencies(sentence) {
  const words = sentence.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
  const freq = {};
  for (const w of words) freq[w] = (freq[w] || 0) + 1;
  return freq;
}