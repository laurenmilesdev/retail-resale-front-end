import { useEffect } from 'react';
import StartMenuItem from '../start-menu-item/StartMenuItem';
import WindowModel from '@/models/window';

import styles from './StartMenu.module.css';

type Props = {
  menuItems: WindowModel[];
};

export default function StartMenu({ menuItems }: Props) {
  useEffect(() => {
    document.addEventListener('mouseup', (e) => {
      const element = document.getElementById('start-menu');

      if (element && !element?.contains(e.target as Node)) {
        element.style.display = 'none';
      }
    });
  });

  return (
    <div className={`${styles['start-menu']} windows-box-shadow`} id="start-menu">
      <div className={styles['start-menu-blue']}>
        Windows<span>98</span>
      </div>

      <ul>
        {menuItems.map((menuItem: WindowModel, index: number) => (
          <StartMenuItem menuItem={menuItem} menuItems={menuItems} key={index} />
        ))}

        <StartMenuItem menuItems={menuItems} shutDownButton={true} />
      </ul>
    </div>
  );
}
