import React from "react";

function Stock({stockName, stockPrice, handleBuyStock, handleSellStock, isInPortfolio}) {

  const handleClick = () => {
  
    if(isInPortfolio(stockName)){
      handleSellStock(stockName)
    } else { 
      handleBuyStock(stockName)
    }
    // handleBuyStock(stockName)
  // console.log(stockName, stockPrice
  };

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">{stockName}</h5>
          <p className="card-text">{stockPrice}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
