export default function Home() {
  return <div>Home page</div>;
}

export function getStaticProps() {
  return {
    props: {
      title: 'Home',
    },
  };
}
