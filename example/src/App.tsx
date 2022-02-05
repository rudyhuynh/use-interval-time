import React from "react";
import "./App.css";
import { useIntervalTime } from "use-interval-time";

function App() {
  return <div className="App">Time: {useIntervalTime().toISOString()}</div>;
}

export default App;
