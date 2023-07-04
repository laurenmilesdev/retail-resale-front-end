import Image from 'next/image';
import { Container } from '@mui/material';

import styles from './Layout.module.css';

export default function Layout({ children, title }: any) {
  return (
    <Container>
      <div className={styles.window}>
        <div className={styles['title-container']}>
          <Image
            src="http://i63.tinypic.com/117hi0p.png"
            alt="windows"
            width="18"
            height="18"
            className={styles.logo}
          />
          <p className={styles.title}>{title}</p>
          <button className={styles.btn}>X</button>
          <button className={styles.btn}>?</button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </Container>
  );
}
