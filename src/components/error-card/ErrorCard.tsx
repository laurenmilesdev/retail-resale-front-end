import { Card, CardContent } from '@mui/material';
import ErrorAccordion from './error-accordion/ErrorAccordion';
import ErrorModel from '../../models/error';

import styles from './ErrorCard.module.css';

type Props = {
  title: string;
  description: string;
  error: ErrorModel;
};

export default function ErrorCard({ title, description, error }: Props) {
  return (
    <Card>
      <CardContent>
        <div className={styles.title}>
          <h5>{title}</h5>
        </div>
        <hr></hr>
        <div>{description}</div>

        {error && <ErrorAccordion error={error} />}
      </CardContent>
    </Card>
  );
}
