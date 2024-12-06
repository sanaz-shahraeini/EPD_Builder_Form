import React from 'react';
import { useFormContext } from 'react-hook-form';

function EnvironmentalImpact() {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Environmental Impact</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="emissions" className="block text-sm font-medium text-gray-700">
            Emissions (CO2e/year)
          </label>
          <input
            type="number"
            id="emissions"
            {...register('emissions')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="wasteGeneration" className="block text-sm font-medium text-gray-700">
            Waste Generation (kg/year)
          </label>
          <input
            type="number"
            id="wasteGeneration"
            {...register('wasteGeneration')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="packaging" className="block text-sm font-medium text-gray-700">
            Packaging Material
          </label>
          <input
            type="text"
            id="packaging"
            {...register('packaging')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="transportation" className="block text-sm font-medium text-gray-700">
            Transportation Mode
          </label>
          <select
            id="transportation"
            {...register('transportation')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">Select mode</option>
            <option value="road">Road</option>
            <option value="rail">Rail</option>
            <option value="sea">Sea</option>
            <option value="air">Air</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default EnvironmentalImpact;