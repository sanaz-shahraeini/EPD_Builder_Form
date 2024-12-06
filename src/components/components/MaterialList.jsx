import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

function MaterialList({ componentIndex, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `components.${componentIndex}.materials`
  });

  const handleAddMaterial = () => {
    append({
      id: Date.now().toString(),
      name: '',
      quantity: 0,
      unit: 'kg',
      source: '',
      processing: '',
      environmentalImpact: ''
    });
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-900">Materials</h3>
        <button
          type="button"
          onClick={handleAddMaterial}
          className="inline-flex items-center rounded-md bg-green-50 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm hover:bg-green-100"
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          Add Material
        </button>
      </div>

      <div className="space-y-3">
        {fields.map((material, materialIndex) => (
          <div key={material.id} className="grid grid-cols-12 gap-3 items-start">
            <div className="col-span-4">
              <input
                type="text"
                {...control.register(`components.${componentIndex}.materials.${materialIndex}.name`)}
                placeholder="Material name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-2">
              <input
                type="number"
                {...control.register(`components.${componentIndex}.materials.${materialIndex}.quantity`)}
                placeholder="Quantity"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-2">
              <select
                {...control.register(`components.${componentIndex}.materials.${materialIndex}.unit`)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="l">L</option>
                <option value="ml">mL</option>
                <option value="m">m</option>
                <option value="m2">m²</option>
                <option value="m3">m³</option>
                <option value="pcs">pcs</option>
              </select>
            </div>

            <div className="col-span-3">
              <input
                type="text"
                {...control.register(`components.${componentIndex}.materials.${materialIndex}.source`)}
                placeholder="Source"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div className="col-span-1">
              <button
                type="button"
                onClick={() => remove(materialIndex)}
                className="inline-flex items-center rounded-md border border-transparent bg-red-50 p-2 text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialList;