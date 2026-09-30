function commonSkills(skills1, skills2) {
  const set1 = new Set(skills1.map(s => s.toLowerCase()));
  const set2 = new Set(skills2.map(s => s.toLowerCase()));

  const common = [];
  for (const skill of set1) {
    if (set2.has(skill)) {
      common.push(skill);
    }
  }

  return common.sort();
}