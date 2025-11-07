import styles from "./Footer.module.css";

const Footer = ({ items }) => {
  const packed = items.filter((i) => i.isPacked).length;
  const itemLength = items.length;

  return (
    <div className={styles.footerContainer}>
      🧳 You have {itemLength} on your list, and you already packed {packed} (
      {items.length > 0 ? Math.trunc((packed / itemLength) * 100) : "0"}%) of
      your items.
    </div>
  );
};

export default Footer;
