/*
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.




*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack_brackets = [];
    const openBrackets = '({[';
    const closeBrackets = ')}]';

    // what goes in last must must come out first
    // Pop and push chars in and out of the top of the stack
    for ( let bracket of s) {
        if (openBrackets.includes(bracket)) {
            stack_brackets.push(bracket); // Push opening brackets onto the stack
        } else if (closeBrackets.includes(bracket)) {
            const matchingOpenBracket = openBrackets[closeBrackets.indexOf(bracket)]; // Find matching opening bracket

            if (stack_brackets.length === 0 || stack_brackets.pop() !== matchingOpenBracket) {
                return false; // If the stack_brackets is empty or the last opening bracket doesn't match the closing one, return false
            }
        }
    }

  return stack_brackets.length === 0; // Return true if the stack is empty (all brackets matched)
};


// Test cases:
console.log(isValid('{[()]}')); // Output: true
console.log(isValid('{[()]()')); // Output: false
console.log(isValid('()[]{}')); // Output: true
console.log(isValid(']')); // Output: false
console.log(isValid("(]")); // Output: false