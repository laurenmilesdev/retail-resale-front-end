import ThemeSwitch from '../theme-switch/ThemeSwitch';

import styles from './Footer.module.css';

export default function Footer(): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <ThemeSwitch />
    </div>
  );
}
