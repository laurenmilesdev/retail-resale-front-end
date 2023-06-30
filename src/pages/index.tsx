import TabPanel from '../components/tab-panel/TabPanel';
import Tab from '../models/Tab';

type Props = {
  pageValue: number;
  pages: Tab[];
};

export default function Home({ pageValue, pages }: Props): JSX.Element {
  return (
    <>
      {pages.map(({ component }, index: number) => (
        <TabPanel value={pageValue} index={index} key={index}>
          {component}
        </TabPanel>
      ))}
    </>
  );
}

export function getStaticProps() {
  return { props: { title: 'Lauren Miles' } };
}
