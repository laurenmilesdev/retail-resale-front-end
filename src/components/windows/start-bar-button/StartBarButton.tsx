import Image from 'next/image';
import WindowModel from '@/models/window';

import img from '../../../../public/images/ie.png';
import styles from './StartBarButton.module.css';

type Props = {
  window: WindowModel;
  index: number;
};

export default function StartBarButton({ window, index }: Props) {
  return (
    <div className={`${styles.btn} windows-box-shadow`} id={window.buttonId} key={index}>
      <div className={styles['btn-label']}>
        <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
        <div className={styles.text}>{window.title}</div>
      </div>
    </div>
  );
}
