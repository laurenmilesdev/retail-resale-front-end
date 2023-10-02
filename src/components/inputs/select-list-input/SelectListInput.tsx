import { Dispatch, SetStateAction } from 'react';
import { MenuItem, Select } from '@mui/material';
import SelectListModel from '../../../models/select-list';
import DropdownModel from '../../../models/dropdown';

import styles from './SelectListInput.module.css';

type Props = {
  selectList: SelectListModel;
  setValue: Dispatch<SetStateAction<any | undefined>>;
};

export default function SelectListInput({ selectList, setValue }: Props) {
  const { name } = selectList;

  return (
    <Select
      value={selectList.value}
      name={name}
      id={`${name}-select`}
      labelId={`${name}-select-label`}
      variant="standard"
      onChange={(newValue) => setValue(newValue.target.value)}
      className={styles['select-field']}
    >
      {selectList.selectListItems.map((item: DropdownModel) => (
        <MenuItem value={item.id} key={item.value}>
          {item.value}
        </MenuItem>
      ))}
    </Select>
  );
}
