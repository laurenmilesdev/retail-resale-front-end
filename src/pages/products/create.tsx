/* eslint-disable @typescript-eslint/no-floating-promises */
import { Card, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import ProductForm from '../../components/products/product-form/ProductForm';
import DropdownModel from '../../models/dropdown';
import { sizeTypes } from '../../constants/size-type';
import CategoryService from '../../services/category-service';
import ConditionService from '../../services/condition-service';

const baseApiUrl: string = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';
const categoryService = new CategoryService(baseApiUrl);
const conditionService = new ConditionService(baseApiUrl);

export default function Create() {
  const [sizeTypeId, setSizeTypeId] = useState<number | undefined>();
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [categories, setCategories] = useState<DropdownModel[]>();
  const [subCategoryId, setSubCategoryId] = useState<number | undefined>();
  const [subCategories, setSubCategories] = useState<DropdownModel[]>();
  const [conditionId, setConditionId] = useState<number | undefined>();
  const [conditions, setConditions] = useState<DropdownModel[]>();
  const [purchaseDate, setPurchaseDate] = useState<Dayjs | null | undefined>();

  async function getCategories() {
    try {
      const response = await categoryService.getCategories();
      const categoriesDropdown = response.map(
        (category) => new DropdownModel(category.id, category.value)
      );

      setCategories(categoriesDropdown);
    } catch (error) {
      // Handle error
    }
  }

  async function getConditions() {
    try {
      const response = await conditionService.getConditions();
      const conditionsDropdown = response.map(
        (condition) => new DropdownModel(condition.id, condition.value)
      );

      setConditions(conditionsDropdown);
    } catch (error) {
      // Handle error
    }
  }

  async function getCategory() {
    try {
      if (categoryId) {
        const response = await categoryService.getCategoryById(categoryId);
        const subCategoriesDropdown = response.subCategories
          ? response.subCategories.map(
              (subCategory) => new DropdownModel(subCategory.id, subCategory.value)
            )
          : [];

        setCategoryId(categoryId);
        setSubCategories(subCategoriesDropdown);
      }
    } catch (error) {
      // Handle error
    }
  }

  useEffect(() => {
    getCategories();
    getConditions();
  }, []);

  useEffect(() => {
    getCategory();
  }, [categoryId]);

  return (
    <Card>
      <CardContent>
        <ProductForm
          sizeTypeId={sizeTypeId}
          setSizeTypeId={setSizeTypeId}
          sizeTypes={sizeTypes}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          categories={categories ?? []}
          subCategoryId={subCategoryId}
          setSubCategoryId={setSubCategoryId}
          subCategories={subCategories ?? []}
          conditionId={conditionId}
          setConditionId={setConditionId}
          conditions={conditions ?? []}
          purchaseDate={purchaseDate ?? undefined}
          setPurchaseDate={setPurchaseDate}
        />
      </CardContent>
    </Card>
  );
}
