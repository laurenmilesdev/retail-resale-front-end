import { Container } from '@mui/material';
import Navigation from '../navigation/Navigation';
import NavLinkModel from '../../models/nav-link';

import styles from './Layout.module.css';

type Props = {
  pages: NavLinkModel[];
  children: React.ReactNode;
};

export default function Layout({ pages, children }: Props) {
  return (
    <>
      <Navigation pages={pages} />
      <Container maxWidth="xl" className={styles.container}>
        {children}
      </Container>
    </>
  );
}
