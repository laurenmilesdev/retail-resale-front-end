import { Dispatch, SetStateAction } from 'react';
import Window from '../windows/window/Window';
import Footer from '../footer/Footer';
import WindowModel from '../../models/window';

type Props = {
  windows: WindowModel[];
  focusedWindow: WindowModel;
  setFocusedWindow: Dispatch<SetStateAction<WindowModel>>;
  menuItems: WindowModel[];
  children?: React.ReactNode;
};

export default function Layout({
  windows,
  focusedWindow,
  setFocusedWindow,
  menuItems,
  children,
}: Props) {
  return (
    <>
      {windows.map((window: WindowModel) => (
        <Window window={window} content={window.component} setFocusedWindow={setFocusedWindow} />
      ))}

      <div>{children}</div>

      <Footer
        windows={windows}
        focusedWindow={focusedWindow}
        setFocusedWindow={setFocusedWindow}
        menuItems={menuItems}
      />
    </>
  );
}
