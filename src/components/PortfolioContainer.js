import React from "react";
import Stock from "./Stock";
import { v4 as uuidv4 } from 'uuid';

function PortfolioContainer({userStocks, setUserStocks}) {


  function isInPortfolio(stockName) {
    return userStocks.some(stock => stock.name === stockName)
  }

  function handleSellStock(stockName) {
    if(isInPortfolio(stockName)){
      console.log("selling stock: ", stockName);
      const updatedPortfolio = userStocks.filter((stock) => stock.name !== stockName);
      setUserStocks(updatedPortfolio);
    } 
    else {
      console.log(stockName, "is not your portfolio");
    }
  }

  return (
    <div>
      
      <h2>My Portfolio</h2>
      
      {
        //render your portfolio stocks here
        userStocks.map(stock => <Stock key={uuidv4()} 
                                       stockName={stock.name} 
                                       stockPrice={stock.price} 
                                       handleSellStock={handleSellStock}
                                       isInPortfolio={isInPortfolio}
                                       />)
      }
    </div>
  );
}

export default PortfolioContainer;
