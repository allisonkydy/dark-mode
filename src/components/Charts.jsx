import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, darkMode }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <div className="coin-info">
            <p>current price: <span>${coin.current_price}</span></p>
            <p>
              24 hours:{" "}
              <span
                style={
                  coin.price_change_24h > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                ${coin.price_change_24h}
              </span>
              {", "}
              <span
                style={
                  coin.price_change_percentage_24h > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                {coin.price_change_percentage_24h}%
              </span>
            </p>
          </div>
          <Chart
            sparklineData={coin.sparkline_in_7d.price}
            darkMode={darkMode}
          />
        </div>
      ))}
    </div>
  );
};
export default Charts;
