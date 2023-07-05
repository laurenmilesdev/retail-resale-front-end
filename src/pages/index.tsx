import { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import TabPanel from '../components/tab-panel/TabPanel';
import Tab from '../models/Tab';

type Props = {
  pageValue: number;
  pages: Tab[];
};

export default function Home({ pageValue, pages }: Props): JSX.Element {
  const [title, setTitle] = useState<string>('Retail Resale');

  useEffect(() => {
    const page = pages[pageValue];

    setTitle(page.title);
  }, [pageValue]);

  return (
    <Layout title={title}>
      {pages.map(({ component }, index: number) => (
        <TabPanel value={pageValue} index={index} key={index}>
          {component}
        </TabPanel>
      ))}
    </Layout>
  );
}

export function getStaticProps() {
  return { props: { title: 'Lauren Miles' } };
}
