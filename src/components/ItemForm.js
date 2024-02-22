import React, { useState } from "react"; // added { useState }
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("") //added for lab
  const [itemCategory, setItemCategory] = useState("Produce") //added for lab

  // added for lab
  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };

    onItemFormSubmit(newItem);
    setItemName("");
    setItemCategory("");
    console.log("submitted from ItemForm.js")
  }

  // added onSubmit handler for lab to <form>
  // added value and onChange event handlers to input(name) and select(category)
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={(event) => setItemName(event.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={(event) => setItemCategory(event.target.value)} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;