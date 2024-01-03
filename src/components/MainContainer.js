import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({brokerStocks, userStocks, setUserStocks, searchParams, setSearchParams}) {
  
  return (
    <div>
      <SearchBar searchParams={searchParams} setSearchParams={setSearchParams}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
          brokerStocks={brokerStocks} 
          userStocks={userStocks} 
          setUserStocks={setUserStocks}
          searchParams={searchParams}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          userStocks={userStocks} 
          setUserStocks={setUserStocks}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
