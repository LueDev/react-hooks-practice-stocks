import React, {useState, useEffect} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [brokerStocks, setBrokerStocks] = useState([])
  const [userStocks, setUserStocks] = useState([])
  const [searchParams, setSearchParams] = useState({'sort': null, 'filter': "All"})

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => setBrokerStocks(data))
  }, [])

  return (
    <div>
      <Header />
      <MainContainer 
        brokerStocks={brokerStocks} 
        setBrokerStocks={setBrokerStocks} 
        userStocks={userStocks} 
        setUserStocks={setUserStocks} 
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
}

export default App;
