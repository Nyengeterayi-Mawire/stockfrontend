import React from 'react' 
import { useState,useEffect } from 'react';


// const data = [
//   { x: new Date(2024, 2, 1), open: 150, high: 155, low: 148, close: 153 },
//   { x: new Date(2024, 2, 2), open: 153, high: 158, low: 151, close: 156 },
//   { x: new Date(2024, 2, 3), open: 156, high: 160, low: 154, close: 157 },
// ]
const Canvaschart = () => {

  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (window.CanvasJSStockChart) {
      const data = [
        { x: new Date(2024, 2, 1), open: 150, high: 155, low: 148, close: 153 },
        { x: new Date(2024, 2, 2), open: 153, high: 158, low: 151, close: 156 },
        { x: new Date(2024, 2, 3), open: 156, high: 160, low: 154, close: 157 },
      ];

      const options = {
        theme: "dark2",
        title: { text: "Stock Market Candlestick Chart" },
        charts: [
          {
            axisX: { crosshair: { enabled: true } },
            axisY: { prefix: "$", crosshair: { enabled: true } },
            data: [{ type: "candlestick", dataPoints: data }],
          },
        ],
        navigator: {
          slider: {
            minimum: new Date(data[0].x),
            maximum: new Date(data[data.length - 1].x),
          },
        },
        rangeSelector: { enabled: true },
      };

      const newChart = new window.CanvasJSStockChart("chartContainer", options);
      newChart.render();
      setChart(newChart);
    }
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#121212", color: "#fff" }}>
      <div id="chartContainer" style={{ width: "100%", height: "400px" }}></div>
    </div>
  )
}

export default Canvaschart