import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Detail } from "./pages/Detail";
import { Pokemon } from "./pages/Pokemon";

import "./styles/Layout.styles.css";
import { Textarea } from "./pages/Textarea";

const root = document.querySelector("#root");
const app = createRoot(root);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/:name" element={<Detail />} />
        <Route path="textarea" element={<Textarea />} />
      </Routes>
    </BrowserRouter>
  );
};

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
