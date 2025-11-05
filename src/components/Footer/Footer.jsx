import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      &copy; {new Date().getFullYear()} Ridho Rifqy Muhammad
    </div>
  );
};

export default Footer;
