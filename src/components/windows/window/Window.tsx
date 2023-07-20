import { Dispatch, SetStateAction } from 'react';
import WindowHeader from '../window-header/WindowHeader';
import WindowOptions from '../window-options/WindowOptions';
import WindowAddressBar from '../window-address-bar/WindowAddressBar';
import WindowModel from '@/models/window';

import styles from './Window.module.css';

type Props = {
  window: WindowModel;
  content: JSX.Element;
  setFocusedWindow: Dispatch<SetStateAction<WindowModel>>;
};

export default function Window({ window, content, setFocusedWindow }: Props) {
  const options = ['File', 'Edit', 'Views', 'Favorites', 'Tools', 'Help'];

  return (
    <div className={`${styles.window} windows-box-shadow`} id={window.windowId}>
      <WindowHeader window={window} setFocusedWindow={setFocusedWindow} />

      <WindowOptions options={options} />

      <WindowAddressBar />

      <div className={styles.content}>{content}</div>
    </div>
  );
}
