import { Card, CardContent } from '@mui/material';
import ApiErrorAccordion from './api-error-accordion/ApiErrorAccordion';
import ErrorModel from '../../models/error';

import styles from './ErrorCard.module.css';

type Props = {
  error: ErrorModel;
};

export default function ErrorCard({ error }: Props) {
  return (
    <Card>
      <CardContent>
        <div className={styles.title}>
          <h5>{error.title}</h5>
        </div>
        <hr></hr>
        <div>{error.description}</div>

        {error.apiError && <ApiErrorAccordion error={error.apiError} />}
      </CardContent>
    </Card>
  );
}
