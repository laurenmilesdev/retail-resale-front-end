import { Card, CardContent } from '@mui/material';

import styles from './HomeCard.module.css';

type Props = {
  title: string;
  content: string;
};

export default function HomeCard({ title, content }: Props) {
  return (
    <div className={`${styles['home-card']} col-md-6`}>
      <Card>
        <CardContent>
          <div className={`${styles['home-card-title']} col-md-12`}>{title}</div>
          <hr></hr>
          <div className="col-md-12">{content}</div>
        </CardContent>
      </Card>
    </div>
  );
}
