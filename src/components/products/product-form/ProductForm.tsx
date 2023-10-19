import { Dispatch, SetStateAction, useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import ProductModel from '../../../models/products/product';
import CreateUpdateProductModel from '../../../models/products/create-update-product';
import DropdownModel from '../../../models/dropdown';
import ProductService from '../../../services/product-service';

import styles from './ProductForm.module.css';

const baseApiUrl: string = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';
const productService = new ProductService(baseApiUrl);

type Props = {
  setFormSubmit: Dispatch<SetStateAction<boolean>>;
  sizeTypeId?: number;
  setSizeTypeId: Dispatch<SetStateAction<number | undefined>>;
  sizeTypes: DropdownModel[];
  categoryId?: number;
  setCategoryId: Dispatch<SetStateAction<number | undefined>>;
  categories: DropdownModel[];
  subCategoryId?: number;
  setSubCategoryId: Dispatch<SetStateAction<number | undefined>>;
  subCategories: DropdownModel[];
  conditionId?: number;
  setConditionId: Dispatch<SetStateAction<number | undefined>>;
  conditions: DropdownModel[];
  purchaseDate?: dayjs.Dayjs;
  setPurchaseDate: Dispatch<SetStateAction<dayjs.Dayjs | null | undefined>>;
  product?: ProductModel;
};

export default function ProductForm({
  setFormSubmit,
  sizeTypeId,
  setSizeTypeId,
  sizeTypes,
  categoryId,
  setCategoryId,
  categories,
  subCategoryId,
  setSubCategoryId,
  subCategories,
  conditionId,
  setConditionId,
  conditions,
  purchaseDate,
  setPurchaseDate,
  product,
}: Props) {
  const [newProduct, setProduct] = useState<CreateUpdateProductModel>(
    product ?? new CreateUpdateProductModel()
  );

  function handleChange(event: any) {
    const { name } = event.target;
    const { value } = event.target;

    if (name && value) setProduct({ ...newProduct, [name]: value });
  }

  async function onSubmit(event: any) {
    event.preventDefault();

    if (newProduct) {
      if (sizeTypeId) newProduct.sizeType = sizeTypeId;
      if (subCategoryId) newProduct.subCategoryId = subCategoryId;
      if (conditionId) newProduct.conditionId = conditionId;
      if (purchaseDate) newProduct.purchaseDate = purchaseDate.toString();
      newProduct.listingSiteProducts = product?.listingSiteProducts ?? [];

      try {
        const response = await productService.createUpdateProduct(newProduct, product?.id);

        if (response) {
          setFormSubmit(true);
        } else {
          // Alert error
        }
      } catch (error) {
        // Handle error
      }
    }
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={onSubmit}>
      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Name</h5>
        </div>
        <div className="col-md-12">
          <TextField
            name="name"
            defaultValue={product?.name}
            onChange={handleChange}
            className={styles['text-field']}
            variant="standard"
            required
          />
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Description</h5>
        </div>
        <div className="col-md-12">
          <TextField
            name="description"
            defaultValue={product?.description}
            onChange={handleChange}
            className={styles['text-field']}
            variant="standard"
            multiline={true}
            required
          />
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Size</h5>
        </div>
        <div className="col-md-12">
          <TextField
            name="size"
            defaultValue={product?.size}
            onChange={handleChange}
            className={styles['text-field']}
            variant="standard"
            required
          />
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Size Type</h5>
        </div>
        <div className="col-md-12">
          <Select
            value={sizeTypeId ?? ''}
            name="sizeTypeId"
            labelId={`size-type-select-label`}
            variant="standard"
            onChange={(newValue) => setSizeTypeId(newValue.target.value as unknown as number)}
            className={styles['select-field']}
            required
          >
            {sizeTypes.map((sizeType: DropdownModel) => (
              <MenuItem value={sizeType.id} key={sizeType.value}>
                {sizeType.value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Category</h5>
        </div>
        <div className="col-md-12">
          <Select
            value={categoryId ?? ''}
            name="category"
            id={`category-select`}
            labelId={`category-select-label`}
            variant="standard"
            onChange={(newValue) => setCategoryId(newValue.target.value as unknown as number)}
            className={styles['select-field']}
            required
          >
            {categories.map((category: DropdownModel) => (
              <MenuItem value={category.id} key={category.value}>
                {category.value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>SubCategory</h5>
        </div>
        <div className="col-md-12">
          <Select
            value={subCategoryId ?? ''}
            name="subCategory"
            id={`subCategory-select`}
            labelId={`subCategory-select-label`}
            variant="standard"
            onChange={(newValue) => setSubCategoryId(newValue.target.value as unknown as number)}
            className={styles['select-field']}
            required
          >
            {subCategories.map((subCategory: DropdownModel) => (
              <MenuItem value={subCategory.id} key={subCategory.value}>
                {subCategory.value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Condition</h5>
        </div>
        <div className="col-md-12">
          <Select
            value={conditionId ?? ''}
            name="condition"
            id={`condition-select`}
            labelId={`condition-select-label`}
            variant="standard"
            onChange={(newValue) => setConditionId(newValue.target.value as unknown as number)}
            className={styles['select-field']}
            required
          >
            {conditions.map((condition: DropdownModel) => (
              <MenuItem value={condition.id} key={condition.value}>
                {condition.value}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Brand</h5>
        </div>
        <div className="col-md-12">
          <TextField
            name="brand"
            defaultValue={product?.brand}
            onChange={handleChange}
            className={styles['text-field']}
            variant="standard"
          />
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Purchase Price</h5>
        </div>
        <div className="col-md-12">
          <TextField
            name="purchasePrice"
            defaultValue={product?.purchasePrice}
            onChange={handleChange}
            className={styles['text-field']}
            variant="standard"
          />
        </div>
      </div>

      <div className={`${styles.detail} col-md-12`}>
        <div className={`col-md-12`}>
          <h5>Purchase Date</h5>
        </div>
        <div className="col-md-12">
          <DatePicker
            value={purchaseDate}
            onChange={(newValue) => setPurchaseDate(newValue)}
            className={styles['date-picker']}
          />
        </div>
      </div>

      <Button type="submit" className="btn-primary">
        Save
      </Button>
    </form>
  );
}
