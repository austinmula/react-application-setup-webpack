import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./style.scss";

// const el = document.getElementById("app");

// ReactDOM.render(<App />, el);


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);