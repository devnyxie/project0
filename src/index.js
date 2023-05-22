import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import "./Stylesheets/Planets.css";
import "./Stylesheets/Stars.css";
import "./Stylesheets/Line.css";
import "./Stylesheets/Widgets.css";
import "./Stylesheets/App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
