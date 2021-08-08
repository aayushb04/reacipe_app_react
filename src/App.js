import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "1ed1d23d";
  const APP_KEY = "f7540ecc89977ecb75de09a53067e7df";

  const url1 = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    var res = await Axios.get(url1);
    setRecipes(res.data.hits);
    console.log(res.data.hits);
  };

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
