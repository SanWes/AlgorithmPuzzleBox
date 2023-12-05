/*

1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

*/



/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let newWord = '';
    // .push() add to end 
    // loop through each word with the same index pointer 
    // add conditional for length discrepency  
    // choose which length is going to be proper indexer

    let baseLength = null;
    let extraLetters = '';

    // Maybe split both the combine 1 then 2 continuously len times. Concat rest of string at end
    // const chars = str.split('');
    // console.log(chars[8]); 
    
    // if word 1 has shorter len
    if (word1.length <= word2.length) {
        baseLength = word1.length;
        // store letters from longer string
        extraLetters = word2.slice(baseLength);
        console.log(extraLetters);
        } 
    // if word 2 has shorter len
        else {
        baseLength = word2.length;
        // store letters from longer string
        extraLetters = word1.slice(baseLength);
        console.log(extraLetters);
        }


    for (let i = 0; i < baseLength; i++) {
        newWord += word1[i] + word2[i]; 
    }

    return newWord + extraLetters;
};


console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("arby", "bpaqres"));
console.log(mergeAlternately("abcd", "pq"));

