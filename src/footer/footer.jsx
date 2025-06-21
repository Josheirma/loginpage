import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.footerContainer}>
      <footer>
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
