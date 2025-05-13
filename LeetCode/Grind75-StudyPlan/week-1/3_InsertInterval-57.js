/*
https://leetcode.com/problems/insert-interval/

Pseudocode & Thinking Process:
Step 1: Initialize an output array
We'll collect intervals into this as we go.

Step 2: Iterate through existing intervals
We’ll go through 3 possible cases for each interval:

    Current interval ends before newInterval starts
        ➤ Just add it to the result — no overlap yet.

    Current interval starts after newInterval ends
        ➤ We’ve passed the merging range, so:

    Add the newInterval to result (once),

    Then add the rest of the intervals as-is.

    Intervals overlap with newInterval
        ➤ Merge them:

        newInterval[0] = min(current start, newInterval[0])

        newInterval[1] = max(current end, newInterval[1])

Step 3: Edge Case
What if we never inserted newInterval?
➤ Add it to the end after the loop (e.g., when newInterval comes after all intervals).
*/



/* 
    Psuedo Code 
- intervals[i] = [starti, endi] -> start = index [0] , end = index[1]
- two arrays of intervals in ascending order
- insert the second array into the first 
- ensure intervals1 is still sorted and no overlapping intervals
- return intervals1 after insertion

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

*/
var insert = function(intervals, newInterval) {
    // new array to hold finalized intervals
    let results = []; 

    // Loop through each interval of original 
    for (let interval of intervals) {

        // Case 1: if interval ends before new one starts
        if (interval[1] < newInterval[0]) {
            // add interval to results 
            results.push(interval);
        }

        // Case 2: if interval starts after newInterval ends - add newIntervals first 
        else if (interval[0] > newInterval[1]) {
            results.push(newInterval)
            newInterval = interval;
        }

        // Case 3: there is an overlap and we merge intervals by updating newInterval bounds
        else {
            newInterval[0] = Math.min(interval[0], newInterval[0])
            newInterval[1] = Math.max(interval[1], newInterval[1])
        }
    }
    // Step 3: Add the last newInterval (merged or unchanged)
    results.push(newInterval);

    return results;
};


/*
Same problem with understandable variable names for a calendar assistant scheduling meetings


Pseudo Code 

looped through each interval and split logic into three clear cases:

1. No overlap (before new starts)

2. No overlap (after new ends)

3. Overlap — we merge by updating start and end bounds.

This lets me preserve sorting and eliminate overlap, all in one pass.

This solution runs in linear time O(n) and uses O(n) space, since we only scan through the interval list once and collect results in a new array without doing any nested operations or sorting.

*/

var insert = function(existingMeetings, newMeeting) {
    let scheduled = [];

    for (let currentMeeting of existingMeetings) {

        // 🟢 Case 1: Current meeting ends before new meeting starts
        if (currentMeeting[1] < newMeeting[0]) {
            scheduled.push(currentMeeting); // No conflict, just add it
        }

        // 🔴 Case 2: Current meeting starts after new meeting ends
        else if (currentMeeting[0] > newMeeting[1]) {
            scheduled.push(newMeeting);     // Add the new merged meeting first
            newMeeting = currentMeeting;    // Start comparing from here
        }

        // 🟡 Case 3: Overlapping meetings
        else {
            // Merge the times — take the earliest start and latest end
            newMeeting[0] = Math.min(currentMeeting[0], newMeeting[0]);
            newMeeting[1] = Math.max(currentMeeting[1], newMeeting[1]);
        }
    }

    // Push whatever's left
    scheduled.push(newMeeting);

    return scheduled;
};

