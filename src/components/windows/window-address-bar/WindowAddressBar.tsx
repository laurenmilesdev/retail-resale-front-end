import styles from './WindowAddressBar.module.css';

export const label = 'Address';
export const inputValue = 'https://resale-retail.com/';

export default function WindowAddressBar() {
  return (
    <div className={`${styles.options} ${styles.padding}`}>
      <div className={styles.item} id="window-address-bar-label">
        {label}
      </div>
      <input
        type="text"
        className={styles['inverse-windows-box-shadow']}
        value={inputValue}
        id="window-address-bar-input"
        readOnly
      />
    </div>
  );
}
