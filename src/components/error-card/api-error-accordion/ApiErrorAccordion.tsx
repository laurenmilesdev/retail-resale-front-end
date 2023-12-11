import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ApiErrorModel from '../../../models/api-error';

import styles from './ApiErrorAccordion.module.css';

type Props = {
  error: ApiErrorModel;
};

export default function ApiErrorAccordion({ error }: Props) {
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
        <div>Type: {error.name}</div>
        <div>Code: {error.code}</div>
        <div>Message: {error.message}</div>
      </AccordionDetails>
    </Accordion>
  );
}
