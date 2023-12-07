/*
https://leetcode.com/problems/greatest-common-divisor-of-strings/
Leet Code 1071. Greatest Common Divisor of Strings
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""


Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.



Approach
First things first , we need the following

A base Case: if strings are = 
Mathmetical Logic : Here it's the use of %
A variable to store both strings
Usage of slice method; which slices the array


*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // return t divides s -> if s = t + ... + t . Where t is concat with itself one or more times
    // Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


    // Check if strings are equal by concating
    if (str1 + str2 != str2 + str1) return '';
    // Store length of each string to easily pass into Greatest Common Divider 'gcd' helper function
    let m = str1.length;
    let n = str2.length;

    // Greatest Common Divider 'gcd' helper function: Takes 2 lengths. 
    let gcd = function (x, y) {
        // if y is null then x is the gcd
        if (!y) return x;
        // Recursively call function with y, and modulus of x/y. 
        // return the remainder of x & y which will be the gcd in our case
        return gcd(y, x % y);
    }

    //create a variable to store gcd with both strings in it
    let divider = gcd (m, n);
    // slices from up to element right before div index. 
    return str1.slice(0, divider)
};



/*
Complexity
Time complexity: O(log(min(n,k)))
    1. Because here n is the length of str1 and k is the length of str2.
    2. This is because the time complexity of the gcds function, which implements the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers, is O(log(min(x, y))), where x and y are the two input numbers.

Space complexity: O(1)
    1. Because as the function uses only a few variables and does not store any data structures in memory, such as arrays or objects.
*/