var search = function(nums, target) {
    let left = 0, 
            right = nums.length -1;
    while (left <= right) {
        let middle = Math.floor((left + right)/2);
        let potentialMatch = nums[middle];
        
        if (potentialMatch === target){
            return middle;
        } else if (potentialMatch > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
};

// ex 1:  Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
var nums1 = [-1,0,3,5,9,12]
var target1 = 9

console.log(search(nums1, target1))


/*
Time Complexity: O(log n) - halfing search each iteration
Space Complexity: O(1) - consistent variables
Pseudo Code:
1. Create variable "left" as a left pointer.
2. Create variable "right" as a right pointer.
3. Create while loop for while left <= right.
    a. Create middle variable by adding right and left /2 and round down.
    b. Create potential match variable with index of middle.
    c. Create condition if potential match = target, return the middle.
    d. Create condition if potential match is greater than target, change right pointer to middle - 1.
    e. Create condition if potential match is less than target, change left pointer to middle - 1.
4. Otherwise return -1
    
*/
