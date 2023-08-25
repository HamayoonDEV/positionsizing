import "./App.css";
import React, { useState } from "react";

function App() {
  const [currency, setCurrency] = useState("USD");
  const [portfolioAmount, setPortfolioAmount] = useState("");
  const [btcLivePrice, setBtcLivePrice] = useState(29911.9); // Example price
  const [riskPercentage, setRiskPercentage] = useState("");
  const [stopLossPercentage, setStopLossPercentage] = useState("");

  // Calculated values
  const positionSizeUSD = (
    (portfolioAmount * (riskPercentage / 100)) /
    (stopLossPercentage / 100)
  ).toFixed(2);
  const positionSizeBTC = (positionSizeUSD / btcLivePrice).toFixed(8);
  const amountRiskedUSD = (portfolioAmount * (riskPercentage / 100)).toFixed(2);
  const amountRiskedBTC = (amountRiskedUSD / btcLivePrice).toFixed(8);
  const totalPortfolioBTC = (portfolioAmount / btcLivePrice).toFixed(8);

  return (
    <div className="container">
      <h2>POSITION SIZING CALCULATOR</h2>

      <div>
        <label>Select your FIAT currency:</label>
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          {/* Add other currency options as needed */}
        </select>
      </div>
      <div>
        <label>Insert your Total Portfolio Amount in BTC or USD:</label>
        <input
          type="number"
          value={portfolioAmount}
          onChange={(e) => setPortfolioAmount(e.target.value)}
        />
        <span>{currency}</span>
      </div>
      <div>
        <label>BTC Live Price:</label>
        <input
          type="number"
          value={btcLivePrice}
          onChange={(e) => setBtcLivePrice(e.target.value)}
        />
      </div>
      <div>
        <label>Insert your RISK PERCENTAGE (without % symbol):</label>
        <input
          type="number"
          value={riskPercentage}
          onChange={(e) => setRiskPercentage(e.target.value)}
        />
      </div>
      <div>
        <label>Insert your STOP LOSS PERCENTAGE (without % symbol):</label>
        <input
          type="number"
          value={stopLossPercentage}
          onChange={(e) => setStopLossPercentage(e.target.value)}
        />
      </div>
      <h3>RESULTS:</h3>
      <div>
        <label>TOTAL PORTFOLIO AMOUNT:</label>
        <span>{totalPortfolioBTC} BTC</span>
        <span>
          {portfolioAmount} {currency}
        </span>
      </div>
      <div>
        <label>AMOUNT INVESTED IN TRADE (Position Size):</label>
        <span>{positionSizeBTC} BTC</span>
        <span>
          {positionSizeUSD} {currency}
        </span>
      </div>
      <div>
        <label>AMOUNT RISKED IF STOP LOSS GETS HIT:</label>
        <span>{amountRiskedBTC} BTC</span>
        <span>
          {amountRiskedUSD} {currency}
        </span>
      </div>
    </div>
  );
}

export default App;
