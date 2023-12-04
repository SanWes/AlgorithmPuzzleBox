// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    // implement Switch Statements to execute logic after comparing single var with multiple variants 
    switch(name){
      case "Pure Strawberry Joy":
        return 0.5;
        break;
      case "Energizer": 
      case "Green Garden":
        return 1.5;
        break;
      case "Tropical Island":
        return 3;
        break;
      case "All or Nothing":
        return 5;
        break;
      default:
        return 2.5;
    }
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    //
    let totalWedges = 0;
    let wedges = 0;
    let limesCut = 0;  //utilized as an Index as they would have the same value in this case
    
    while ((wedges <= wedgesNeeded) && (limesCut < limes.length)) {
        switch(limes[limesCut]){
          case "small":
            wedges +=6;
            console.log("Small lime cut")
            break;
          case "medium":
            wedges +=8;
            console.log("Medium lime cut")
            break;
          case "large":
            wedges +=10;
            console.log("Large lime cut")
            break;
    }
      totalWedges += wedges;
      // In order to increment limesCut by one each time while loop cycles 
  
      if(wedgesNeeded > 0){ // determine if cut wedges are needed 
        limesCut++;
      }
    }
    return limesCut 
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
    //ultilize a do-while loop as the first order will always be completed by current employee regardless of time left
  
  export function remainingOrders(timeLeft, orders) {
    //utilize previous funtion to get total time of qued orders, then with this info you can subtract total - time left  --> timeToMixJuice(orders[index])
    while (timeLeft > 0) {
      timeLeft = timeLeft - timeToMixJuice(orders[0]);
      orders.shift(); //remove first element from list
    
    }
    return orders;
  }
  