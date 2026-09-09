function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
  // TODO: Implement the function
  let remainingMoneyAfterBuyingCake = totalMoney - cakeCost;
  if(remainingMoneyAfterBuyingCake <= 0) return remainingMoneyAfterBuyingCake;

  return (remainingMoneyAfterBuyingCake % donutCost);
}

