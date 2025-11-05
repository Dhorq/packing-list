import styles from "./App.module.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Bar from "./components/Bar/Bar";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import { itemData } from "./data/itemData";

function App() {
  const [items, setItems] = useState(itemData);
  const [sort, setSort] = useState("input");

  function handleAddItem(newItem) {
    let updated = [...items, newItem];

    if (sort === "description") {
      updated.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "packed") {
      updated.sort((a, b) => b.isPacked - a.isPacked);
    }

    setItems(updated);
  }

  function handleTogglePacked(id) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, isPacked: !i.isPacked } : i))
    );
  }

  function handleDeleteItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <div className={styles.container}>
      <Header />
      <Bar onAddItem={handleAddItem} items={items} />
      <List
        items={items}
        onTogglePacked={handleTogglePacked}
        onDeleteItem={handleDeleteItem}
        onSort={(sorted) => setItems(sorted)}
        sort={sort}
        setSort={setSort}
      />
      <Footer />
    </div>
  );
}

export default App;
