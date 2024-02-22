import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemList, setItemList] = useState([...items]);
  const [inputValue, setInputValue] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //added for lab
  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]);
  }

  //added for lab
  function handleSearchChange(event) {
    setInputValue(event.target.value);
  }

  // updated items.filter to itemList.filter
  // updated return value from "true" to item.name.toLowerCase().includes(inputValue.toLowerCase())
  // added "&& item.name.toLowerCase().includes(inputValue.toLowerCase())" after else"
  const itemsToDisplay = itemList.filter((item) => {
    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    } else {
      return item.category === selectedCategory &&
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    }
  });

  // added onItemFormSubmit handler to <ItemForm />
  // added onSearchChange to <Filter />
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;