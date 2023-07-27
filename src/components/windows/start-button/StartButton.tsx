import { Button } from '@mui/material';

import * as WindowUtils from '../../../utils/window';

import styles from './StartButton.module.css';

export default function StartButton() {
  return (
    <Button
      className={`${styles['start-btn']} windows-box-shadow`}
      onClick={() => WindowUtils.openCloseMenu()}
      id="windows-start-btn"
    ></Button>
  );
}
