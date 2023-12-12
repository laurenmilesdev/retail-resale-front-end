import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';

type Props = {
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
};

export default function PageNavigationButtons({ edit, setEdit }: Props) {
  return (
    <>
      <Button href="/products" className="btn-primary" type="button">
        Back
      </Button>
      {edit ? (
        <Button onClick={() => setEdit(!edit)} className="btn-primary" type="button">
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
