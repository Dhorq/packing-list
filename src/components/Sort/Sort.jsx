const Sort = ({ items, onSort, sort, setSort }) => {
  function handleChange(e) {
    const value = e.target.value;
    setSort(value);

    let sortedItems = [...items];

    if (value === "description") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "packed") {
      sortedItems.sort((a, b) => b.isPacked - a.isPacked);
    }

    onSort(sortedItems);
  }

  return (
    <div>
      <label>
        <select name="sort" id="sort" value={sort} onChange={handleChange}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
      </label>
    </div>
  );
};

export default Sort;
