/* eslint-disable no-plusplus */
import { render } from '@testing-library/react';
import ProductDetailsForm, {
  productFormDetails,
} from '../../../../src/components/products/product-details-form/ProductDetailsForm';
import { product, categories, subCategories, conditions } from '../../../mocks/data-mock';
import CreateUpdateProductModel from '../../../../src/models/products/create-update-product';

describe('ProductDetailsForm component', () => {
  describe('edit is false', () => {
    beforeEach(() => {
      const updateModel = CreateUpdateProductModel.mapFromProduct(product);

      render(
        <ProductDetailsForm
          edit={false}
          product={product}
          createUpdateProduct={updateModel}
          setCreateUpdateProduct={() => undefined}
          categories={categories}
          subCategories={subCategories}
          conditions={conditions}
        />
      );
    });

    const {
      productName,
      size,
      sizeType,
      category,
      subCategory,
      condition,
      brand,
      purchaseDate,
      purchasePrice,
      description,
    } = productFormDetails;

    it('renders Name detail', () => {
      const elementLabel = document.getElementById(productName.labelId);
      const elementValue = document.getElementById(productName.valueId);

      expect(elementLabel).toHaveTextContent(productName.label);
      expect(elementValue).toHaveTextContent(product.name);
    });

    it('renders Size details', () => {
      const elementLabel = document.getElementById(size.labelId);
      const elementValue = document.getElementById(size.valueId);

      expect(elementLabel).toHaveTextContent(size.label);
      expect(elementValue).toHaveTextContent(product.size);
    });

    it('renders Size Type details', () => {
      const elementLabel = document.getElementById(sizeType.labelId);
      const elementValue = document.getElementById(sizeType.valueId);

      expect(elementLabel).toHaveTextContent(sizeType.label);
      expect(elementValue).toHaveTextContent(product.sizeTypeValue);
    });

    it('renders Category details', () => {
      const elementLabel = document.getElementById(category.labelId);
      const elementValue = document.getElementById(category.valueId);

      expect(elementLabel).toHaveTextContent(category.label);
      expect(elementValue).toHaveTextContent(product.subCategory.category.value);
    });

    it('renders SubCategory details', () => {
      const elementLabel = document.getElementById(subCategory.labelId);
      const elementValue = document.getElementById(subCategory.valueId);

      expect(elementLabel).toHaveTextContent(subCategory.label);
      expect(elementValue).toHaveTextContent(product.subCategory.value);
    });

    it('renders Condition details', () => {
      const elementLabel = document.getElementById(condition.labelId);
      const elementValue = document.getElementById(condition.valueId);

      expect(elementLabel).toHaveTextContent(condition.label);
      expect(elementValue).toHaveTextContent(product.condition.value);
    });

    it('renders Brand details', () => {
      const elementLabel = document.getElementById(brand.labelId);
      const elementValue = document.getElementById(brand.valueId);

      expect(elementLabel).toHaveTextContent(brand.label);
      expect(elementValue).toHaveTextContent(product.brand ?? '');
    });

    it('renders Purchase Date details', () => {
      const elementLabel = document.getElementById(purchaseDate.labelId);
      const elementValue = document.getElementById(purchaseDate.valueId);

      expect(elementLabel).toHaveTextContent(purchaseDate.label);
      expect(elementValue).toHaveTextContent(product.purchaseDate ?? '');
    });

    it('renders Purchase Price details', () => {
      const elementLabel = document.getElementById(purchasePrice.labelId);
      const elementValue = document.getElementById(purchasePrice.valueId);

      expect(elementLabel).toHaveTextContent(purchasePrice.label);
      expect(elementValue).toHaveTextContent(product.purchasePrice?.toString() ?? '');
    });

    it('renders Description details', () => {
      const elementLabel = document.getElementById(description.labelId);
      const elementValue = document.getElementById(description.valueId);

      expect(elementLabel).toHaveTextContent(description.label);
      expect(elementValue).toHaveTextContent(product.description);
    });
  });
});
