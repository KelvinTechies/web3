import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TrasactionProvider } from "./Context/Trasactioncontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TrasactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </TrasactionProvider>
);
