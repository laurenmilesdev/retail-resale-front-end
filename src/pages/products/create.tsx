/* eslint-disable @typescript-eslint/no-floating-promises */
import { InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';
import { Dayjs } from 'dayjs';
import { Card, CardContent } from '@mui/material';
import ProductForm from '../../components/products/product-form/ProductForm';
import DropdownModel from '../../models/dropdown';
import { sizeTypes } from '../../constants/size-type';
import CategoryService from '../../services/category-service';
import ConditionService from '../../services/condition-service';

const baseApiUrl: string = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';
const categoryService = new CategoryService(baseApiUrl);
const conditionService = new ConditionService(baseApiUrl);

export default function Create({
  categoriesString,
  conditionsString,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const categories = JSON.parse(categoriesString);
  const conditions = JSON.parse(conditionsString);
  const [sizeTypeId, setSizeTypeId] = useState<number | undefined>();
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [subCategoryId, setSubCategoryId] = useState<number | undefined>();
  const [subCategories, setSubCategories] = useState<DropdownModel[]>();
  const [conditionId, setConditionId] = useState<number | undefined>();
  const [purchaseDate, setPurchaseDate] = useState<Dayjs | null | undefined>();

  async function getSubCategories() {
    if (categoryId) {
      const response = await categoryService.getSubCategoriesByCategoryId(categoryId);

      setSubCategories(response);
    }
  }

  useEffect(() => {
    setCategoryId(categoryId);
    getSubCategories();
  }, [categoryId]);

  return (
    <Card>
      <CardContent>
        <ProductForm
          sizeTypeId={sizeTypeId}
          setSizeTypeId={setSizeTypeId}
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

export async function getServerSideProps() {
  const categories = await categoryService.getCategories();
  const categoriesDropdown = categories.map(
    (category) => new DropdownModel(category.id, category.value)
  );
  const conditionsDropdown = (await conditionService.getConditions()).map(
    (condition) => new DropdownModel(condition.id, condition.value)
  );

  return {
    props: {
      categoriesString: JSON.stringify(categoriesDropdown),
      conditionsString: JSON.stringify(conditionsDropdown),
    },
  };
}
