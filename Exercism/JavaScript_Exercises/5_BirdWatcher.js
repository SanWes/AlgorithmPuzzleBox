// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  var count = 0;
  for(let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i];
  }
  return count;
  console.log(count);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  var birdsCount = 0; 
    if (week <= 1 ){
      for(let i= 0; i < week * 7; i++) {
        birdsCount += birdsPerDay[i];
        console.log(birdsCount);
      }
        } else {
          for(let i= (week-1) *7; i < week * 7; i++) {
          birdsCount += birdsPerDay[i];
          console.log(birdsCount, "more than one");
        }
      } 
    return birdsCount
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {

      for(let i = 0; i < birdsPerDay.length; i+=2) {
        birdsPerDay[i] += 1 ;
      }
  console.log(birdsPerDay);
  return birdsPerDay;

  
}