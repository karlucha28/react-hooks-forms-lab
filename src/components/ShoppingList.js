import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const[search,setSearch] = useState("")

  function onSearchChange(e){
    setSearch(e.target.value);
  }
// console.log(items)

  // const itemsToDisplayOnSearch = items.filter((item) => {
  //   if (onSearch === "All") return true;

  //   return item.category === onSearch;
  // });
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory)
  }

  const itemsToDisplay = items
  // category
  .filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )
  // search term
  .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));



  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
