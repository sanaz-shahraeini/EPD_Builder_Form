import React from 'react';
import { useFormContext } from 'react-hook-form';
import FileUpload from '../common/FileUpload';

const ProductBasicInfo = () => {
  const { register, formState: { errors } } = useFormContext();

  const categories = {
    products: [
      "Building materials",
      "Construction products",
      "Electrical equipment",
      "Electronic equipment",
      "Furniture",
      "Machinery and equipment",
      "Metal products",
      "Plastic products",
      "Textile products"
    ]
  };

  const packagingTypes = [
    'Cardboard Box',
    'Plastic Container',
    'Wooden Crate',
    'Metal Container',
    'Flexible Packaging',
    'None'
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Basic Product Information</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Product Category
            </label>
            <select
              id="category"
              {...register('category', { required: 'Category is required' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Select a category</option>
              <optgroup label="Products">
                {categories.products.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </optgroup>
              <option value="Other">Other</option>
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
             Product Technical Information
            </label>
            <textarea
              id="description"
              {...register('description', { required: 'Description is required' })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="specialInfo" className="block text-sm font-medium text-gray-700">
              Special Product Information
            </label>
            <textarea
              id="specialInfo"
              {...register('specialInfo')}
              rows={3}
              placeholder="Enter any special information about the product..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="sm:col-span-2 border-t pt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Packaging Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Packaging Type
                </label>
                <select
                  {...register('packagingType')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select packaging type</option>
                  {packagingTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Packaging Weight (kg)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  {...register('packagingWeight', {
                    min: { value: 0, message: 'Packaging weight must be positive' }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter packaging weight"
                />
                {errors.packagingWeight && (
                  <p className="mt-1 text-sm text-red-600">{errors.packagingWeight.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Documentation
            </label>
            <FileUpload 
              acceptedFileTypes=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"
              onFileSelect={(files) => console.log('Files selected:', files)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBasicInfo;