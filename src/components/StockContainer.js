import React from "react";
import Stock from "./Stock";
import { v4 as uuidv4 } from 'uuid';

function StockContainer({ brokerStocks, userStocks, setUserStocks, searchParams}) {
  
  function isInPortfolio(stockName) {
    return userStocks.some(stock => stock.name === stockName)
  }

  function handleBuyStock(stockName) {

    console.log("Portfolio Check: ", isInPortfolio(stockName))
    if(isInPortfolio(stockName)){
      console.log("Already have this stock")
    } 
    else {
      const newStock = brokerStocks.find(stock => stock.name === stockName)
      console.log("buying stock: ", stockName);
      setUserStocks((prevStocks) => [...prevStocks, newStock])
    }
  }


  const filteredAndSortedStocks = () => {
    let filteredAndSorted = brokerStocks;

    if (searchParams.filter !== "All") {
      // Filter stocks based on the selected type
      filteredAndSorted = filteredAndSorted.filter(stock => stock.type === searchParams.filter);
    }

    if (searchParams.sort === "Alphabetically") {
      // Sort alphabetically by stock name
      filteredAndSorted.sort((stockA, stockB) => stockA.name.localeCompare(stockB.name));
    } else if (searchParams.sort === "Price") {
      // Sort by stock price
      filteredAndSorted.sort((stockA, stockB) => stockB.price - stockA.price);
    }

    return filteredAndSorted;
  };


  return (
    <div>
      <h2>Stocks</h2>
      {
        /* render stock list here*/
        filteredAndSortedStocks().map((stock) => (
          <Stock
            key={uuidv4()}
            stockName={stock.name}
            stockPrice={stock.price}
            handleBuyStock={handleBuyStock}
            isInPortfolio={isInPortfolio}
          />
        ))
       
      }
    </div>
  );
}

export default StockContainer;
