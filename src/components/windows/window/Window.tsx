import WindowHeader from '../window-header/WindowHeader';
import WindowOptions from '../window-options/WindowOptions';
import WindowAddressBar from '../window-address-bar/WindowAddressBar';

import styles from './Window.module.css';

type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function Window({ title, children }: Props) {
  const options = ['File', 'Edit', 'Views', 'Favorites', 'Tools', 'Help'];

  return (
    <div className={`${styles.window} windows-box-shadow`}>
      <WindowHeader title={title} />

      <WindowOptions options={options} />

      <WindowAddressBar />

      <div className={styles.content}>{children}</div>
    </div>
  );
}
