/* 
Manipulating strings to generate password to the clubs front door pw or back door pw.

Front door pw: 
1. first letter of each settence of poem. 
2. Proper capitalization of word 

add each first letter onto a var , insert to frontDoorPw() function to cap 1st letter and lower others

    -->  string.charAt(0).toUpperCase() + string.slice(1)


Back Door PW:
1. Last letter of each sentence from poem -- ignore whitespace if it is last char
2. return with concatination of ", please" at end 

*/

// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
let word = '';

export function frontDoorResponse(line) {
  // word = word + line.charAt(0);  
  word += line.slice(0,1); 
  
  word = word.toLowerCase()
  var response = line.charAt(0).toUpperCase();
  return response;
  console.log(response)
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  let fpw = '';
  fpw = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  console.log(fpw);
  return fpw;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  
  line = line.trim(); 
  console.log(line.charAt(line.length-1));

  var responseB = line.charAt(line.length-1);
  return responseB;
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  let bpw = '';
  bpw = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ', please';
  console.log(bpw);
  return bpw;
}
