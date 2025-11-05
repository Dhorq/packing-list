import { useState } from "react";
import styles from "./Bar.module.css";

const Bar = ({ onAddItem, items }) => {
  const [count, setCount] = useState(1);
  const [itemName, setItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;

    const newItem = {
      id: items.length + 1,
      count: count,
      name: itemName,
      isPacked: false,
    };
    onAddItem(newItem);
    setItemName("");
  }

  return (
    <div className={styles.barContainer}>
      <p>What are you going to pack?</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <select
          name="todo"
          id="todo"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="item"
          id="item"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Add item..."
          className={styles.input}
        />
        <button className={styles.button}>ADD</button>
      </form>
    </div>
  );
};

export default Bar;
