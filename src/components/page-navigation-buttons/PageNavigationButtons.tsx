import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';

type Props = {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  sizeTypeId: number;
  setSizeTypeId: Dispatch<SetStateAction<number | undefined>>;
  categoryId: number;
  setCategoryId: Dispatch<SetStateAction<number | undefined>>;
  subCategoryId: number;
  setSubCategoryId: Dispatch<SetStateAction<number | undefined>>;
  conditionId: number;
  setConditionId: Dispatch<SetStateAction<number | undefined>>;
};

export default function PageNavigationButtons({
  edit,
  setEdit,
  sizeTypeId,
  setSizeTypeId,
  categoryId,
  setCategoryId,
  subCategoryId,
  setSubCategoryId,
  conditionId,
  setConditionId,
}: Props) {
  return (
    <>
      <Button href="/products" className="btn-primary" type="button">
        Back
      </Button>
      {edit ? (
        <Button
          onClick={() => {
            setEdit(!edit);

            setSizeTypeId(sizeTypeId);
            setCategoryId(categoryId);
            setSubCategoryId(subCategoryId);
            setConditionId(conditionId);
          }}
          className="btn-primary"
          type="button"
        >
          Cancel
        </Button>
      ) : (
        <Button type="button" onClick={() => setEdit(!edit)} className="btn-primary">
          Edit
        </Button>
      )}
    </>
  );
}
