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

function reverseString(str: string, type: number) {
  if (type === 1) {
    return str.split("").reverse().join("");
  }
}

console.log(dnaToRna("Twelve", 5));
console.log(reverseString("Hello World", 1));

//count the char in the string countChars("hello").  {h:1,e:1,l:2,o:1}

function countChar(str: string): Record<string, number> {
  const result: Record<string, number> = {};
  for (const char of str) {
    if (result[char]) {
      result[char] = result[char]! + 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(countChar("helloworld"));


function countCharacters(str: string){
  const result: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (result[char]) {
      result[char] = result[char]! + 1;
    } else {
      result[char] = 1;
    } 
  }
  return result;
}


console.log("Count CHaracters:",countCharacters("hello world"));
