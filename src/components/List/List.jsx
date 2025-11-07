import Item from "../Item/Item";
import Sort from "../Sort/Sort";
import styles from "./List.module.css";

const List = ({
  items,
  setItems,
  onTogglePacked,
  onDeleteItem,
  onSort,
  sort,
  setSort,
}) => {
  return (
    <div className={styles.listContainer}>
      <Item
        items={items}
        onTogglePacked={onTogglePacked}
        onDeleteItem={onDeleteItem}
      />
      <Sort
        items={items}
        setItems={setItems}
        onSort={onSort}
        sort={sort}
        setSort={setSort}
      />
    </div>
  );
};

export default List;
