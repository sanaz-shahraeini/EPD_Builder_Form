import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { TrashIcon } from '@heroicons/react/24/outline';
import ComponentList from './ComponentList';

function MainComponentList() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'mainComponents',
  });

  const handleAddMainComponent = () => {
    append({
      name: '',
      quantity: '',
      weight: '',
      unit: 'kg',
      image: '',
      supplierCountry: '',
      lifeCycle: '',
      components: [],
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Main Components</h3>
        <button
          type="button"
          onClick={handleAddMainComponent}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Main Component
        </button>
      </div>

      <div className="space-y-8">
        {fields.map((field, index) => (
          <div key={field.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">Main Component {index + 1}</h3>
              <button
                type="button"
                onClick={() => remove(index)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-600 hover:text-red-700 focus:outline-none"
              >
                <TrashIcon className="h-4 w-4 mr-1" />
                Remove Main Component
              </button>
            </div>

            <div className="space-y-6">
              {/* Main Component Name */}
              <div className="col-span-2 sm:col-span-1">
                <label htmlFor={`mainComponents.${index}.name`} className="block text-sm font-medium text-gray-700">
                 Main Component Name
                </label>
                <input
                  type="text"
                  {...register(`mainComponents.${index}.name`)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter component name"
                />
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor={`mainComponents.${index}.quantity`} className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  {...register(`mainComponents.${index}.quantity`)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter quantity"
                  min="0"
                  step="1"
                />
              </div>

              {/* Weight */}
              <div>
                <label htmlFor={`mainComponents.${index}.weight`} className="block text-sm font-medium text-gray-700">
                  Weight
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="number"
                    {...register(`mainComponents.${index}.weight`)}
                    className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Enter weight"
                    min="0"
                    step="0.01"
                  />
                  <select
                    {...register(`mainComponents.${index}.unit`)}
                    className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
                  >
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="lb">lb</option>
                    <option value="oz">oz</option>
                    <option value="L">L</option>
                    <option value="mL">mL</option>
                  </select>
                </div>
              </div>

              {/* Supplier Country */}
              <div>
                <label htmlFor={`mainComponents.${index}.supplierCountry`} className="block text-sm font-medium text-gray-700">
                  Supplier Country
                </label>
                <input
                  type="text"
                  {...register(`mainComponents.${index}.supplierCountry`)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter supplier country"
                />
              </div>

              {/* Life Cycle */}
              <div>
                <label htmlFor={`mainComponents.${index}.lifeCycle`} className="block text-sm font-medium text-gray-700">
                  Life Cycle
                </label>
                <select
                  {...register(`mainComponents.${index}.lifeCycle`)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                >
                  <option value="">Select life cycle stage</option>
                  <option value="raw-material">Raw Material Extraction</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="distribution">Distribution</option>
                  <option value="use">Use Phase</option>
                  <option value="end-of-life">End of Life</option>
                </select>
              </div>

              {/* Image Upload */}
              <div className="col-span-2">
                <label htmlFor={`mainComponents.${index}.image`} className="block text-sm font-medium text-gray-700">
                  Component Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor={`mainComponents.${index}.image`}
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id={`mainComponents.${index}.image`}
                          {...register(`mainComponents.${index}.image`)}
                          type="file"
                          className="sr-only"
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              {/* Nested Components */}
              <div className="col-span-2 mt-4">
                <ComponentList mainComponentIndex={index} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainComponentList;
