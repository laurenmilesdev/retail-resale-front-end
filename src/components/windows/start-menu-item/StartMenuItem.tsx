import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import WindowModel from '@/models/window';

import * as WindowUtils from '../../../utils/window';

import img from '../../../../public/images/ie.png';
import styles from './StartMenuItem.module.css';

type Props = {
  setFocusedWindow: Dispatch<SetStateAction<WindowModel>>;
  menuItems: WindowModel[];
  menuItem?: WindowModel;
  shutDownButton?: boolean;
};

export default function StartMenuItem({
  setFocusedWindow,
  menuItems,
  menuItem,
  shutDownButton = false,
}: Props) {
  const menuListItem = (item: WindowModel) => {
    const className = item === menuItems[menuItems.length - 1] ? styles.line : '';

    return (
      <li key={item.title} className={className}>
        <label onClick={() => setFocusedWindow(item)} className={styles['menu-item']}>
          <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
          {item.title}
        </label>
      </li>
    );
  };
  const shutdownMenuItem = () => (
    <li>
      <label
        onClick={() => {
          WindowUtils.openCloseMenu();
        }}
        className={styles['menu-item-shutdown']}
      >
        <Image
          width={30}
          height={30}
          className={styles['shutdown-icon']}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEUAAACGhobAwMB3d3eysrLMzMz4+PjX19eZmZnq6urn59ZNTU2WlpZCQkIzAGYAAIAAAAAzAMwAAP8A/////wBVVVX///99stlUAAAAAXRSTlMAQObYZgAAAAFiS0dEFnzRqBkAAAAHdElNRQfiBhoANBn4/QlFAAAAzUlEQVQ4y83S0Q6DIAwFUGmhYudEdP7/r+6CZEEnvm438emetBDpun+KQW5rQpibtXWOHJHlPedeRHqHQHhm+zXKyKCqMmRhfV53IEb0YUh1EBCIMRH7PIAphEREipgJX71iijER16tAGJ79EShAJrZ3gu4KLMuaCDtqgHVZkwnXAGdYVskzqD3hhRE3IKYV7QkhxHyKBvCDUiKxnsAV2NhrIR9Q9cgGgv8QkAKOfU0KOPeFpGe1g8uHVUgb7MTjAk2QyTjO7T6T2/oHeQPSrw8Qg6bkoQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo1MjoyNS0wNDowMOXPqxAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NTI6MjUtMDQ6MDCUkhOsAAAAAElFTkSuQmCC"
          alt=""
        />
        Shutdown
      </label>
    </li>
  );

  return shutDownButton ? shutdownMenuItem() : menuItem ? menuListItem(menuItem) : <></>;
}
