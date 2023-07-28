import Window from '../windows/window/Window';

import styles from './Layout.module.css';

type Props = {
  title: string;
  content: JSX.Element;
};

export default function Layout({ title, content }: Props) {
  return (
    <Window title={title}>
      <div className={`${styles.container}`}>
        <div className="col-md-12">
          <h1>{title}</h1>
        </div>

        <div className="col-md-12">{content}</div>
      </div>
    </Window>
  );
}
