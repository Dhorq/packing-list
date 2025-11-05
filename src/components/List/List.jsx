import Item from "../Item/Item";
import Sort from "../Sort/Sort";
import styles from "./List.module.css";

const List = ({
  items,
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
      <Sort items={items} onSort={onSort} sort={sort} setSort={setSort} />
    </div>
  );
};

export default List;
