import Image from 'next/image';
import { Tab, Tabs } from '@mui/material';

import img from '../../../public/images/logo-horizontal.png';
import styles from './Navigation.module.css';

type Props = {
  labels: string[];
  pageValue: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export default function Navigation({ labels, pageValue, handleChange }: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <div className="col-md-8">
        <Image src={img} alt="logo" />
      </div>

      <div className={`${styles['tab-container']} col-md-4`}>
        <Tabs value={pageValue} onChange={handleChange}>
          {labels.map((label: string, index: number) => (
            <Tab
              className={styles.tab}
              label={label}
              key={index}
              {...a11yProps(index)}
              id={`tab-${index}`}
            />
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export function a11yProps(index: number): object {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}
