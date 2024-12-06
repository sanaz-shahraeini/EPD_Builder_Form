import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

function MaterialList({ mainComponentIndex, componentIndex }) {
  const { register, control, watch, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `mainComponents.${mainComponentIndex}.components.${componentIndex}.materials`,
  });

  const materialTypes = [
    'Raw Material',
    'Processed Material',
    'Component',
    'Packaging Material',
    'Other'
  ];

  const materialGroups = [
    'Raw Materials',
    'Processed Materials',
    'Auxiliary Materials',
    'Packaging Materials',
    'Chemical Substances',
    'Metals',
    'Plastics',
    'Glass',
    'Paper and Cardboard',
    'Wood',
    'Textiles',
    'Electronics',
    'Composites',
    'Other'
  ];

  const packagingTypes = [
    'Primary Packaging',
    'Secondary Packaging',
    'Tertiary Packaging',
    'Transport Packaging',
    'Not Applicable'
  ];

  const transportMethods = [
    'Road Transport',
    'Rail Transport',
    'Sea Freight',
    'Air Freight',
    'Other'
  ];

  const roadTransportOptions = [
    'Car',
    'Truck',
    'Truck 16-32t',
    'Truck above 32t'
  ];

  const handleAddMaterial = () => {
    append({
      name: '',
      materialGroup: '',
      packagingType: '',
      packagingWeight: '',
      packagingUnit: 'kg',
      quantity: '',
      unit: 'kg',
      type: '',
      transportMethod: '',
      transportType: '',
      transportDistance: '',
      supplierCountry: '',
      userDestination: ''
    });
  };

  // Watch transport method values for all fields
  const transportMethodValues = fields.map((field, index) => 
    watch(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.transportMethod`)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Materials List</h2>
        <button
          type="button"
          onClick={handleAddMaterial}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-terra-dark hover:bg-opacity-90 focus:outline-none"
        >
          <PlusIcon className="h-4 w-4 mr-1" />
          Add Material
        </button>
      </div>

      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            {/* Basic Information Section */}
            <div className="grid grid-cols-1 gap-6 mb-6">
              <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Material Name
                  </label>
                  <input
                    type="text"
                    {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.name`, {
                      required: 'Material name is required'
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Enter material name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Material Group
                  </label>
                  <select
                    {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.materialGroup`, {
                      required: 'Material group is required'
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select material group</option>
                    {materialGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.quantity`, {
                        required: 'Quantity is required',
                        min: { value: 0, message: 'Quantity must be positive' }
                      })}
                      className="block w-full rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter quantity"
                    />
                    <input
                      type="text"
                      {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.unit`)}
                      className="block w-20 rounded-r-md border-l-0 border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Unit"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Packaging Section */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <h4 className="text-md font-medium text-gray-900 mb-4">Packaging Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Packaging Type
                  </label>
                  <select
                    {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.packagingType`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select packaging type</option>
                    {packagingTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {watch(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.packagingType`) !== '' && 
                 watch(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.packagingType`) !== 'Not Applicable' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Packaging Weight
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.packagingWeight`, {
                          required: 'Packaging weight is required when packaging type is selected',
                          min: { value: 0, message: 'Weight must be positive' }
                        })}
                        className="block w-full rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        placeholder="Enter packaging weight"
                      />
                      <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                        kg
                      </span>
                    </div>
                    {errors?.mainComponents?.[mainComponentIndex]?.components?.[componentIndex]?.materials?.[index]?.packagingWeight && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.mainComponents[mainComponentIndex].components[componentIndex].materials[index].packagingWeight.message}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Transport Section */}
            <div className="border-t border-gray-200 pt-6 mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Transport Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Transport Method</label>
                  <select
                    {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.transportMethod`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select method</option>
                    {transportMethods.map(method => (
                      <option key={method} value={method}>{method}</option>
                    ))}
                  </select>
                </div>

                {transportMethodValues[index] === 'Road Transport' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
                    <select
                      {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.transportType`)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                      <option value="">Select vehicle</option>
                      {roadTransportOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Distance (km)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.transportDistance`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Enter distance"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Origin</label>
                  <input
                    type="text"
                    {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.supplierCountry`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Enter origin location"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Destination</label>
                  <input
                    type="text"
                    {...register(`mainComponents.${mainComponentIndex}.components.${componentIndex}.materials.${index}.userDestination`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Enter destination"
                  />
                </div>
              </div>
            </div>

            {/* Remove Button */}
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => remove(index)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-600 hover:text-red-700 focus:outline-none"
              >
                <TrashIcon className="h-4 w-4 mr-1" />
                Remove Material
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialList;