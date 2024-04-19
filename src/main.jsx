import React from "react";
import ReactDom  from "react-dom/client";
import App from "./App.jsx";


const el = document.getElementById("root"); //The root is in index.html
const root = ReactDom.createRoot(el);
root.render(<App />); //App becomes the root
