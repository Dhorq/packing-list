import styles from "./Sort.module.css";

const Sort = ({ items, setItems, onSort, sort, setSort }) => {
  function handleChange(e) {
    const value = e.target.value;
    setSort(value);

    let sortedItems = [...items];

    if (value === "description") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "packed") {
      sortedItems.sort((a, b) => b.isPacked - a.isPacked);
    } else if (value === "input") {
      sortedItems.sort((a, b) => a.createdAt - b.createdAt);
    }

    onSort(sortedItems);
  }

  function handleClear() {
    setItems([]);
  }

  return (
    <div className={styles.sortContainer}>
      <label>
        <select name="sort" id="sort" value={sort} onChange={handleChange}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
      </label>
      <button className={`clear ${styles.clearButton}`} onClick={handleClear}>
        CLEAR
      </button>
    </div>
  );
};

export default Sort;
