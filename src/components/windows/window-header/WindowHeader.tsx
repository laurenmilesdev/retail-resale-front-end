import styles from './WindowHeader.module.css';

type Props = {
  title: string;
};

export default function WindowHeader({ title }: Props) {
  return (
    <div className={styles.header}>
      <label>{title}</label>
      <div className={styles['header-buttons']}>
        <label className={`${styles.minimize} windows-box-shadow`}></label>
        <label className={`windows-box-shadow`}>X</label>
      </div>
    </div>
  );
}
