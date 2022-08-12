import React, {useState} from "react";
import { v4 as uuid } from "uuid";




export default function ItemForm({items, setItems}) {
  
  const [addNameOfItem,setaddNameOfItem] = useState("");
  const [chooseCategory,setchooseCategory] = useState("Produce");

  function addItem(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: addNameOfItem,
      category: chooseCategory,
    };

    const updatedItems = [...items, newItem]
    setItems(updatedItems);
    }
  
   
  
  // function handleAddNameOfItem(e){
  //   setaddNameOfItem(e.target.value)
  //   console.log(addNameOfItem)
  // onChange={handleAddNameOfItem} value={addNameOfItem}
  // };
  
  // function handleChooseCategory(e){
  //   setchooseCategory(e.target.value)
  //   console.log(chooseCategory)
  // onChange={handleChooseCategory} value={chooseCategory}
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log("wow")
  // }
  





  return (
    <form onSubmit={addItem} className="NewItem">
      <label>
        Name:
        <input  
        type="text" 
        name="name" 
        value={addNameOfItem}
        onChange={(e) =>setaddNameOfItem(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select  
        name="category"
        onChange={(e) =>setchooseCategory(e.target.value)} 
        value={chooseCategory}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

