import TabPanel from '../components/tab-panel/TabPanel';
import WindowModel from '../models/window';

type Props = {
  windowValue: number;
  windows: WindowModel[];
};

export default function Home({ windowValue, windows }: Props) {
  return (
    <>
      {windows.map(({ component }, index: number) => (
        <TabPanel value={windowValue} index={index} key={index}>
          {component}
        </TabPanel>
      ))}
    </>
  );
}
