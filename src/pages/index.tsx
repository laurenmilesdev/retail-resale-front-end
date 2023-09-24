import HomeCard from '../components/home-card/HomeCard';

export default function Home() {
  return (
    <div className="col-md-12 d-flex flex-wrap">
      <HomeCard title="Card 1" content="Card 1 content" />
      <HomeCard title="Card 2" content="Card 2 content" />
      <HomeCard title="Card 3" content="Card 3 content" />
      <HomeCard title="Card 4" content="Card 4 content" />
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'Retail Resale',
    },
  };
}
