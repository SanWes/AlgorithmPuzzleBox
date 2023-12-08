/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

var maxProfit = function (prices) {
// selling can only happen 1 day after buy 
    let max_profit = 0;
    if (prices[1] - prices[0] > max_profit) { max_profit = prices[1] - prices[0] };
    console.log(max_profit)

        for (let buy = 0; buy < prices.length; buy++) {
            for (let sell = buy + 1; sell < prices.length; sell++) {
                if (prices[sell] - prices[buy] > max_profit ){
                max_profit = prices[sell] - prices[buy];
                }   
            }
        }
    return max_profit;
};



var maxProfit2 = function(prices) {
    if(prices == null || prices.length <= 1) return 0;
    let minBuy = prices[0];
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        minBuy = Math.min(minBuy, prices[i]);
        profit = Math.max(profit, prices[i] - minBuy);
    }
    return profit;
};