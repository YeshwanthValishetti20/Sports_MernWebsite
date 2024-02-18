import React from 'react';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import App from './App';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <HomePage/> */}
    <App />
  </React.StrictMode>
);

