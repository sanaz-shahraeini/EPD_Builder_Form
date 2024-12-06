import React from 'react';
import { useFormContext } from 'react-hook-form';

function EnvironmentalImpact() {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Environmental Impact</h3>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Energy Consumption */}
        <div>
          <label htmlFor="energyConsumption" className="block text-sm font-medium text-gray-700">
            Energy Consumption
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="number"
              id="energyConsumption"
              {...register('energyConsumption')}
              className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter amount"
              step="0.01"
            />
            <select
              {...register('energyUnit')}
              className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <option value="kWh">kWh</option>
              <option value="MJ">MJ</option>
              <option value="BTU">BTU</option>
            </select>
          </div>
        </div>

        {/* Water Consumption */}
        <div>
          <label htmlFor="waterConsumption" className="block text-sm font-medium text-gray-700">
            Water Consumption
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="number"
              id="waterConsumption"
              {...register('waterConsumption')}
              className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter amount"
              step="0.01"
            />
            <select
              {...register('waterUnit')}
              className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <option value="liters">Liters</option>
              <option value="gallons">Gallons</option>
              <option value="m3">m³</option>
            </select>
          </div>
        </div>

        {/* GHG Emissions */}
        <div>
          <label htmlFor="ghgEmissions" className="block text-sm font-medium text-gray-700">
            Greenhouse Gas Emissions
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="number"
              id="ghgEmissions"
              {...register('ghgEmissions')}
              className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter amount"
              step="0.01"
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              kg CO₂e
            </span>
          </div>
        </div>

        {/* Waste Generation */}
        <div>
          <label htmlFor="wasteGeneration" className="block text-sm font-medium text-gray-700">
            Waste Generation
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="number"
              id="wasteGeneration"
              {...register('wasteGeneration')}
              className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter amount"
              step="0.01"
            />
            <select
              {...register('wasteUnit')}
              className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <option value="kg">kg</option>
              <option value="tons">tons</option>
              <option value="m3">m³</option>
            </select>
          </div>
        </div>

        {/* Air Pollutants */}
        <div className="col-span-2">
          <label htmlFor="airPollutants" className="block text-sm font-medium text-gray-700">
            Air Pollutants
          </label>
          <div className="mt-1 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nox" className="block text-xs text-gray-500">NOx Emissions</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="number"
                  id="nox"
                  {...register('noxEmissions')}
                  className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter amount"
                  step="0.001"
                />
              </div>
            </div>
            <div>
              <label htmlFor="sox" className="block text-xs text-gray-500">SOx Emissions</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="number"
                  id="sox"
                  {...register('soxEmissions')}
                  className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter amount"
                  step="0.001"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resource Depletion */}
        <div className="col-span-2">
          <label htmlFor="resourceDepletion" className="block text-sm font-medium text-gray-700">
            Resource Depletion
          </label>
          <textarea
            id="resourceDepletion"
            {...register('resourceDepletion')}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Describe the impact on natural resources"
          />
        </div>

        {/* Environmental Certifications */}
        <div className="col-span-2">
          <label htmlFor="certifications" className="block text-sm font-medium text-gray-700">
            Environmental Certifications
          </label>
          <textarea
            id="certifications"
            {...register('certifications')}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="List any environmental certifications or standards met"
          />
        </div>
      </div>
    </div>
  );
}

export default EnvironmentalImpact;
