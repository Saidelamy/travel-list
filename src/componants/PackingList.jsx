import { useState } from "react";
import Items from "./Item";

export default function PackingList({
  items,
  handleDeleteItem,
  handleToggleItem,
  handleClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  // if (sortBy === "description")
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  // if (sortBy === "packed")
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => Number(a.packed) - Number(b.packed));

  if ("packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Items
              handleDeleteItem={handleDeleteItem}
              handleToggleItem={handleToggleItem}
              item={item}
              key={item.id}
            />
          ))}
        </ul>

        {items.length !== 0 && (
          <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="input">sort by input</option>
              <option value="description">sort by description</option>
              <option value="packed">sort by packed</option>
            </select>

            <button onClick={handleClearList}>Clear List</button>
          </div>
        )}
      </div>
    </>
  );
}
