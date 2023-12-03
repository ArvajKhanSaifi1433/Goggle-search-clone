import React, { useState } from "react";
import Home from "./Components/Home";
import SearchResult from "./Components/SearchResult";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoggleContextProvider } from "./utils/ContextApi";

function App() {
  const [imageSearch, setImageSearch] = useState(false);
  return (
    <GoggleContextProvider value={{ imageSearch, setImageSearch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </GoggleContextProvider>
  );
}

export default App;
