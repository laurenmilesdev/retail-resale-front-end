import { TextField } from '@mui/material';
import TextFieldModel from '@/models/text-field';

import styles from './TextFieldInput.module.css';

type Props = {
  textField: TextFieldModel;
};

export default function TextFieldInput({ textField }: Props) {
  return (
    <TextField
      name={textField.name}
      defaultValue={textField.value}
      className={styles['text-field']}
      multiline={textField.multiline}
      variant="standard"
    />
  );
}
