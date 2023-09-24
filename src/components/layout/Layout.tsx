import { Container } from '@mui/material';
import Navigation from '../navigation/Navigation';

import styles from './Layout.module.css';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navigation />
      <Container maxWidth="xl" className={styles.container}>
        {children}
      </Container>
    </>
  );
}
