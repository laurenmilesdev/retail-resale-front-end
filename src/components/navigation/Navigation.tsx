import { Tab, Tabs } from '@mui/material';

import styles from './Navigation.module.css';

type Props = {
  labels: string[];
  pageValue: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
};

export default function Navigation({ labels, pageValue, handleChange }: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <Tabs value={pageValue} onChange={handleChange}>
        {labels.map((label: string, index: number) => (
          <Tab
            className={`${styles.tab} nav-tab`}
            label={label}
            key={index}
            {...a11yProps(index)}
            id={`tab-${index}`}
          />
        ))}
      </Tabs>
    </div>
  );
}

export function a11yProps(index: number): object {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}
