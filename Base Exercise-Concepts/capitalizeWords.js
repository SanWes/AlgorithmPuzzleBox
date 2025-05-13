/*
 Capitalize Words
Write a function 'capitalizeWords' that takes a string and returns the string with the first letter of each word capitalized.
*/
function capitalizeWords(string) {

    // get an array of words
    const words = string.split(" ");
    // iterate over our words
    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

// const capitalizeWords = string => string.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");



  // For example:
  console.log(capitalizeWords('hello world')); // should return 'Hello World'
