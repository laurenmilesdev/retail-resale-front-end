export default function Home() {
  return <div id="home">Home page</div>;
}

export function getStaticProps() {
  return {
    props: {
      title: "Home",
    },
  };
}
