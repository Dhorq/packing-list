import styles from "./Item.module.css";

const Item = ({ items, onTogglePacked, onDeleteItem }) => {
  return (
    <ul className={styles.itemContainer}>
      {items.length > 0 ? (
        items.map((i) => (
          <li
            style={i.isPacked ? { textDecoration: "line-through" } : {}}
            className={styles.itemEach}
            key={i.id}
          >
            <input
              className={styles.packed}
              type="checkbox"
              name="packed"
              id="packed"
              checked={i.isPacked}
              onChange={() => onTogglePacked(i.id)}
            />
            {i.count} {i.name}
            <button
              onClick={() => onDeleteItem(i.id)}
              className={styles.button}
            >
              X
            </button>
          </li>
        ))
      ) : (
        <p className={styles.noItem}>📦 Please add something to your list 📦</p>
      )}
    </ul>
  );
};

export default Item;
