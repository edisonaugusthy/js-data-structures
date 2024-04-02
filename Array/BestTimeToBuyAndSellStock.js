/**
 * @param {number[]} prices
 * @return {number}
 */
const getMaxProfit = (prices) => {
  let minPrize = prices[0];
  let maxPrize = 0;
  for (const price of prices) {
    maxPrize = Math.max(maxPrize, price - minPrize);
    minPrize = Math.min(minPrize, price);
  }
  return maxPrize;
};

console.log(getMaxProfit([9, 2, 4, 3, 8, 5]));
//https://skilled.dev/course/best-time-to-buy-and-sell-stock
