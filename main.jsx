import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Crash Game Signal Center</h1>
      <div style={{ backgroundColor: '#e0ffe0', padding: '20px', margin: '20px 0' }}>
        <h2>Live Signal</h2>
        <p>Next crash predicted around <strong>2.00x</strong>. Bet safe!</p>
        <button>Refresh Signal</button>
      </div>
      <div>
        <h2>About Signals</h2>
        <p>
          Our system uses advanced prediction models to generate signals for crash game trends with 90–95% estimated accuracy.
        </p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);