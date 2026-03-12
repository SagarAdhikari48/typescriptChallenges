// Create a function which translates a given DNA string into RNA.(For example: "GCAT"  =>  "GCAU")
function dnaToRna(dna: string, solutionTYpe: number): string | undefined {
  if (solutionTYpe === 1) {
    return dna.replace(/T/, "U");
  } else if (solutionTYpe === 2) {
    return dna
      .split("")
      .map((char) => (char === "T" ? "U" : char))
      .join("");
  } else if (solutionTYpe === 3) {
    const convertedString = dna.replaceAll("T", "U");
    return convertedString;
  } else if (solutionTYpe === 4) {
    let character = "";
    for (let i = 0; i < dna.length; i++) {
      if (dna.charAt(i) == "T") {
        character += "SAGAR";
      } else {
        character += dna.charAt(i);
      }
    }
    return character;
  } else {
    let newString = "";
    for (let char of dna) {
      if (char === "T") {
        newString += "SAGAR";
      } else {
        newString += char;
      }
    }
    return newString;
  }
}

console.log(dnaToRna("Twelve", 5));
