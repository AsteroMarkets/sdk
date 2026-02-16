function getOrderBook() {
  return {
    bids: [
      { price: 100, amount: 5 },
      { price: 99, amount: 8 }
    ],
    asks: [
      { price: 101, amount: 4 },
      { price: 102, amount: 6 }
    ]
  };
}

module.exports = { getOrderBook };
