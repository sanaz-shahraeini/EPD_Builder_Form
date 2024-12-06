import React from 'react';
import { useFormContext } from 'react-hook-form';

function ProductLifeCycle() {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Life Cycle Information</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="lifeCycle" className="block text-sm font-medium text-gray-700">
            Product Life Cycle (years)
          </label>
          <input
            type="number"
            id="lifeCycle"
            {...register('lifeCycle')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="endOfLife" className="block text-sm font-medium text-gray-700">
            End-of-Life Management
          </label>
          <select
            id="endOfLife"
            {...register('endOfLife')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">Select management type</option>
            <option value="recycling">Recycling</option>
            <option value="landfill">Landfill</option>
            <option value="incineration">Incineration</option>
            <option value="reuse">Reuse</option>
          </select>
        </div>

        <div>
          <label htmlFor="energyConsumption" className="block text-sm font-medium text-gray-700">
            Energy Consumption (kWh/year)
          </label>
          <input
            type="number"
            id="energyConsumption"
            {...register('energyConsumption')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="waterConsumption" className="block text-sm font-medium text-gray-700">
            Water Consumption (L/year)
          </label>
          <input
            type="number"
            id="waterConsumption"
            {...register('waterConsumption')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductLifeCycle;