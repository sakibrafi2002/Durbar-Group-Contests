function groupStudentsByGradeBand(students) {
  const result = {
    A: [],
    B: [],
    C: [],
    F: []
  };

  for (const student of students) {
    if (student.marks >= 80) {
      result.A.push(student);
    } else if (student.marks >= 70) {
      result.B.push(student);
    } else if (student.marks >= 60) {
      result.C.push(student);
    } else {
      result.F.push(student);
    }
  }

  return result;
}


// Alternative Solution:

// function groupStudentsByGradeBand(students) {
//   return students.reduce((acc, student) => {
//     if (student.marks >= 80) acc.A.push(student);
//     else if (student.marks >= 70) acc.B.push(student);
//     else if (student.marks >= 60) acc.C.push(student);
//     else acc.F.push(student);
//     return acc;
//   }, { A: [], B: [], C: [], F: [] });
// }
