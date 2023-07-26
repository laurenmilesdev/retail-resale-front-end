import styles from './WindowHeader.module.css';

type Props = {
  title: string;
};

export default function WindowHeader({ title }: Props) {
  const lowercaseTitle = title.toLocaleLowerCase();

  return (
    <div className={styles.header}>
      <label id={`${lowercaseTitle}-window-header-label`}>{title}</label>
      <div className={styles['header-buttons']}>
        <label
          className={`${styles.minimize} windows-box-shadow`}
          id={`${lowercaseTitle}-window-header-minimize-btn`}
        ></label>
        <label className={`windows-box-shadow`} id={`${lowercaseTitle}-window-header-close-btn`}>
          X
        </label>
      </div>
    </div>
  );
}
