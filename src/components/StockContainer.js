import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, onAddStock }) {
  const stocksItem = stockList.map((stock) => (
    <Stock key={stock.id} stock={stock} onStockClick={onAddStock} />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {stocksItem}
    </div>
  );
}

export default StockContainer;