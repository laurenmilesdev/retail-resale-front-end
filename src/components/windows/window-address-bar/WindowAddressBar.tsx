import styles from './WindowAddressBar.module.css';

export default function WindowAddressBar() {
  return (
    <div className={`${styles.options} ${styles.padding}`}>
      <div className={styles.item}>Address</div>
      <input type="text" className={styles['inverse-windows-box-shadow']} value="" readOnly />
    </div>
  );
}
