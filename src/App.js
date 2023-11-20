import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {

  // ----------- Input Filtering -----------

  //When search query is put, it sets the query from empty string to user input
  const [query, setQuery] = useState("");

  //sets the query to user input
  //Here event is the keypress and target search bar whose value is stored
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filter function checks if lowercase title matches any lowercase title 
  //in products array and updates the products array on match
  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );




  // ----------- Radio Filtering -----------

  //Sets category of button selected in sidebar ie color, Price ,Category or button. Initial state is NULL
  const [selectedCategory, setSelectedCategory] = useState(null);

  //buttons on sidebar
  //event is click, target is which button and value is stored
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  //buttons on navbar
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };



//----------applying filtered data------------------

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items based on search query
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter based on button click
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;