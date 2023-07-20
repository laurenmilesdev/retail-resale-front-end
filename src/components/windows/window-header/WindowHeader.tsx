import { Dispatch, SetStateAction } from 'react';
import WindowModel from '@/models/window';

import * as WindowUtils from '../../../utils/window';

import styles from './WindowHeader.module.css';

type Props = {
  window: WindowModel;
  setFocusedWindow: Dispatch<SetStateAction<WindowModel>>;
};

export default function WindowHeader({ window, setFocusedWindow }: Props) {
  return (
    <div className={styles.header}>
      <label>{window.title}</label>
      <div className={styles['header-buttons']}>
        <label
          className={`${styles.minimize} windows-box-shadow`}
          onClick={() => WindowUtils.minimizeWindow(window)}
        ></label>
        <label className={`windows-box-shadow`}>X</label>
      </div>
    </div>
  );
}
