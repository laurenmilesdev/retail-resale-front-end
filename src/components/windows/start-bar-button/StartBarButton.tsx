import Image from 'next/image';
import { Button } from '@mui/material';
import WindowModel from '@/models/window';

import * as WindowUtils from '../../../utils/window';

import img from '../../../../public/images/ie.png';
import styles from './StartBarButton.module.css';

type Props = {
  window: WindowModel;
  index: number;
};

export default function StartBarButton({ window, index }: Props) {
  return (
    <Button
      className={`${styles.btn} windows-box-shadow`}
      id={window.buttonId}
      onClick={() => WindowUtils.openCloseWindow(window, false)}
      key={index}
    >
      <div className={styles['btn-label']}>
        <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
        {window.title}
      </div>
    </Button>
  );
}
