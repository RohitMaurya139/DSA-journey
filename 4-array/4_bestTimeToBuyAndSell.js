// LeetCode 121: Best Time to Buy and Sell Stock
// Problem: Given an array prices where prices[i] is the price of a stock on day i,
// find the maximum profit from buying on one day and selling on a LATER day.
// If no profit is possible, return 0.

// Approach: Single Pass (track minimum so far)
// - 'minCost' keeps track of the lowest price seen so far (best day to buy).
// - For each new price, either:
//     1. It's lower than minCost  -> found a better buy day, update minCost.
//     2. It's higher              -> check if selling today beats our best profit.
// Time Complexity:  O(n)  -> single pass through the prices
// Space Complexity: O(1)  -> only two variables used

 function maxProfit(prices) {
   // Best profit found so far (starts at 0 = don't trade at all)
   let profit = 0;
   // Lowest price seen so far -> assume we buy on day 0
   let minCost = prices[0];

   // Start from day 1 since day 0 can't be a sell day after buying at day 0
   for (let i = 1; i < prices.length; i++) {
     if (prices[i] < minCost) {
       // Today's price is a new all-time low -> best buy candidate
       minCost = prices[i];
     } else if (prices[i] - minCost > profit) {
       // Selling today (after buying at minCost) gives a new best profit
       profit = prices[i] - minCost;
     }
   }

   // Maximum profit achievable with one buy + one sell
   return profit;
 };


let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
