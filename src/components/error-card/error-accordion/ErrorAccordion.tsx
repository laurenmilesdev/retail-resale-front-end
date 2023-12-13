import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ErrorModel from '../../../models/error';

import styles from './ErrorAccordion.module.css';

type Props = {
  error: ErrorModel;
};

export default function ErrorAccordion({ error }: Props) {
  return (
    <Accordion className={styles.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        More information
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <strong>{error.name}</strong>
        </div>
        <div>Code: {error.code}</div>
        <div>StatusText: {error.statusText}</div>
        <div>Message: {error.message}</div>
      </AccordionDetails>
    </Accordion>
  );
}
