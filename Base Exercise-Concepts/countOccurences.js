/*
Count Occurrences
Write a function 'countOccurrences' that takes an array and a value as arguments and returns the number of times the value occurs in the array.

For example:
countOccurrences([1, 2, 2, 3, 2], 2) should return 3
*/

function countOccurences (arr, value) {
    let count = 0; 

    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] === value) {
            count++;
        }  else {
            continue;
        }  // else block ends here
    }

    return count;
}


console.log(countOccurences([1, 2, 2, 3, 2], 2)) // = 3


