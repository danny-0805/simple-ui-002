import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search query={query} onChange={setQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
