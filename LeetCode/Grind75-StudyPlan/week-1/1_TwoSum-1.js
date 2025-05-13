/* https://leetcode.com/problems/two-sum/description/
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

var twoSum = function(nums, target) {
    let indexTwoSum = [];
    

    // loop through nums array and search for 2 indexes that will add up to our target value
    for (let i = 0; i < nums.length -1; i++) {
        // be careful what range you place your index til '.lenght-1' can be tricky
        for ( let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                // console.log(nums[i],"+", nums[j], "=", target)
                indexTwoSum.push(i,j); 
                };
        }
    };

    console.log("Target: ",target, " -> TwoSum index: ", indexTwoSum);
    return indexTwoSum
    
};


let nums1 = [2,7,11,15]
let target1 = 9
let nums2 = [3,2,4]
let target2 = 6
let nums3 = [3,3,34,7433,456,32,844,632,26,100,589]
let target3 = 689


twoSum(nums1, target1);
twoSum(nums2, target2);
twoSum(nums3, target3); //
// twoSum(nums, target);
// twoSum(nums, target);
console.log("==================================================================");
console.log("==================================================================");
/*
Target:  9  -> TwoSum index:  [ 0, 1 ]
Target:  6  -> TwoSum index:  [ 1, 2 ]
Target:  689  -> TwoSum index:  [ 9, 10 ]
*/


var twoSumOptimized = function(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // if compliment has the corresponding number to achieve our target then we return current index with the compliments index
        // otherwise we add it to our map for future reference 
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
        //This line adds the current number (nums[i]) and its index (i) into the map. This will be helpful for future iterations, as we’ll now be able to check if the complement of future numbers exists in the map.
    }

    return [];
};


let nums01 = [2,7,11,15]
let target01 = 9
let nums02 = [3,2,4]
let target02 = 6
let nums03 = [3,3,34,7433,456,32,844,632,26,100,589]
let target03 = 689


twoSumOptimized(nums01, target01);
twoSumOptimized(nums02, target02);
twoSumOptimized(nums03, target03); //
// twoSumOptimized(nums0, target0);
// twoSumOptimized(nums0, target0);

/*
Target:  9  -> TwoSum index:  [ 0, 1 ]
Target:  6  -> TwoSum index:  [ 1, 2 ]
Target:  689  -> TwoSum index:  [ 9, 10 ]
*/