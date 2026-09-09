  function convertToCamelCase(sentence) {
    const words = sentence.trim().split(/\s+/); // removes all kinds of spaces
    //console.log(words);
    return (
      words[0].toLowerCase() + words.slice(1)
      .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).join("")
    );
  }

  //console.log(convertToCamelCase("java    script is fun"));