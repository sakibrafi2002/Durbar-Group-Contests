function isAnagram(s1, s2) {
  const normalize = (s) => s.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
  
  return normalize(s1) === normalize(s2);
}