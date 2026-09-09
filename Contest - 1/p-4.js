function extractBodyContent(htmlString) {
  // TODO: Implement this function
  const modifiedString = htmlString.split("<body>");
  const newModifiedString = modifiedString[1].split("</body>");

  return newModifiedString;
}


