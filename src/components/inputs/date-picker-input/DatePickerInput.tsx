import { DatePicker } from '@mui/x-date-pickers';

import styles from './DatePickerInput.module.css';

type Props = {
  value?: any | null;
  setValue: (newValue: any) => void;
};

export default function DatePickerInput({ value, setValue }: Props) {
  return value ? (
    <DatePicker
      value={value}
      onChange={(newValue) => setValue(newValue)}
      className={styles['date-picker']}
    />
  ) : (
    <>Error loading DatePicker.</>
  );
}
