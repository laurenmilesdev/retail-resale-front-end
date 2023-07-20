import { Dispatch, SetStateAction } from 'react';
import WindowModel from '@/models/window';
import StartBar from '../windows/start-bar/StartBar';

type Props = {
  windows: WindowModel[];
  focusedWindow: WindowModel;
  setFocusedWindow: Dispatch<SetStateAction<WindowModel>>;
  menuItems: WindowModel[];
};

export default function Footer({
  windows,
  focusedWindow,
  setFocusedWindow,
  menuItems,
}: Props): JSX.Element {
  return (
    <StartBar
      windows={windows}
      focusedWindow={focusedWindow}
      setFocusedWindow={setFocusedWindow}
      menuItems={menuItems}
    />
  );
}
