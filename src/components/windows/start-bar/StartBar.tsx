import { Dispatch, SetStateAction, useEffect } from 'react';
import StartButton from '../start-button/StartButton';
import StartBarButton from '../start-bar-button/StartBarButton';
import StartMenu from '../start-menu/StartMenu';
import WindowModel from '../../../models/window';

import * as WindowUtils from '../../../utils/window';

import styles from './StartBar.module.css';

type Props = {
  windows: WindowModel[];
  focusedWindow: WindowModel;
  setFocusedWindow: Dispatch<SetStateAction<WindowModel>>;
  menuItems: WindowModel[];
};

export default function StartBar({ windows, focusedWindow, setFocusedWindow, menuItems }: Props) {
  useEffect(() => {
    const blankPage = new WindowModel('', <></>, '', '');

    if (focusedWindow === blankPage) WindowUtils.openCloseMenu();

    WindowUtils.openCloseWindow(focusedWindow, false);
  }, [focusedWindow]);

  return (
    <div className={styles['start-bar']}>
      <StartButton />

      <div className={styles.items}>
        {windows.map((window: WindowModel, index: number) => (
          <StartBarButton window={window} index={index} />
        ))}
      </div>

      <StartMenu setFocusedWindow={setFocusedWindow} menuItems={menuItems} />
    </div>
  );
}
