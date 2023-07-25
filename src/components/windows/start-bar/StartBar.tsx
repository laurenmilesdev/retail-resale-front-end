import { Tab, Tabs } from '@mui/material';
import StartButton from '../start-button/StartButton';
import StartBarButton from '../start-bar-button/StartBarButton';
import StartMenu from '../start-menu/StartMenu';
import WindowModel from '../../../models/window';

import styles from './StartBar.module.css';

type Props = {
  windowValue: number;
  windows: WindowModel[];
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  menuItems: WindowModel[];
};

const a11yProps = (index: number): object => ({
  id: `tab-${index}`,
  'aria-controls': `tabpanel-${index}`,
});

export default function StartBar({ windowValue, windows, handleChange, menuItems }: Props) {
  return (
    <div className={styles['start-bar']}>
      <StartButton />

      <StartMenu menuItems={menuItems} />

      <Tabs value={windowValue} onChange={handleChange} className={styles.tabs}>
        {windows.map((window: WindowModel, index: number) => (
          <Tab
            className={styles.tab}
            label={<StartBarButton window={window} index={index} />}
            key={index}
            {...a11yProps(index)}
            id={`tab-${index}`}
          />
        ))}
      </Tabs>
    </div>
  );
}
