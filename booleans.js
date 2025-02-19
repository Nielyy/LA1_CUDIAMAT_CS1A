let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 11;
favNumb = favNumb + undefined; //Adding undefined to a number results in NaN

console.log("Is JavaScript a programming language?", isJsProgrammingLanguage);
console.log("Is JavaScript hard?", isJsHard);
console.log("Favorite Number:", favNumb); //This will show NaN because of the addition with undefined.