import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
