import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import MaterialList from './MaterialList';
import { PlusIcon } from '@heroicons/react/24/outline';

function ComponentList() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "components"
  });

  const handleAddComponent = () => {
    append({
      id: Date.now().toString(),
      name: '',
      quantity: 1,
      weight: 0,
      unit: 'pcs',
      materials: [],
      subComponents: []
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Components</h2>
        <button
          type="button"
          onClick={handleAddComponent}
          className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          Add Component
        </button>
      </div>

      <div className="space-y-4">
        {fields.map((component, index) => (
          <div key={component.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Component Name
                </label>
                <input
                  type="text"
                  {...control.register(`components.${index}.name`)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter component name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="number"
                    {...control.register(`components.${index}.quantity`)}
                    className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    min="1"
                  />
                  <select
                    {...control.register(`components.${index}.unit`)}
                    className="rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="pcs">pcs</option>
                    <option value="kg">kg</option>
                    <option value="m">m</option>
                    <option value="m2">m²</option>
                    <option value="m3">m³</option>
                  </select>
                </div>
              </div>
            </div>

            <MaterialList 
              componentIndex={index}
              control={control}
            />

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => remove(index)}
                className="inline-flex items-center rounded-md border border-transparent bg-red-100 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Remove Component
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComponentList;