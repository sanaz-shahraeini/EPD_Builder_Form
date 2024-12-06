import React from 'react';
import { useFormContext } from 'react-hook-form';

function ProductLifeCycle() {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Life Cycle Information</h3>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="lifeCycle" className="block text-sm font-medium text-gray-700">
            Life Cycle Stage
          </label>
          <select
            id="lifeCycle"
            {...register('lifeCycle')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">Select a stage</option>
            <option value="raw-material">Raw Material Extraction</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="distribution">Distribution</option>
            <option value="use">Use Phase</option>
            <option value="end-of-life">End of Life</option>
          </select>
        </div>

        <div>
          <label htmlFor="lifespan" className="block text-sm font-medium text-gray-700">
            Expected Lifespan
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="number"
              id="lifespan"
              {...register('lifespan')}
              className="block w-full rounded-none rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter lifespan"
            />
            <select
              {...register('lifespanUnit')}
              className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
              <option value="cycles">Cycles</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="endOfLife" className="block text-sm font-medium text-gray-700">
            End of Life Scenario
          </label>
          <select
            id="endOfLife"
            {...register('endOfLife')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">Select a scenario</option>
            <option value="recycling">Recycling</option>
            <option value="landfill">Landfill</option>
            <option value="incineration">Incineration</option>
            <option value="reuse">Reuse</option>
            <option value="refurbishment">Refurbishment</option>
          </select>
        </div>

        <div>
          <label htmlFor="recyclability" className="block text-sm font-medium text-gray-700">
            Recyclability Rate
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="number"
              id="recyclability"
              {...register('recyclability')}
              className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter recyclability rate"
              min="0"
              max="100"
            />
            <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              %
            </span>
          </div>
        </div>

        <div className="col-span-2">
          <label htmlFor="packaging" className="block text-sm font-medium text-gray-700">
            Packaging Information
          </label>
          <textarea
            id="packaging"
            {...register('packaging')}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Describe the packaging materials and quantities"
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="transportation" className="block text-sm font-medium text-gray-700">
            Transportation Details
          </label>
          <textarea
            id="transportation"
            {...register('transportation')}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Describe transportation methods and distances"
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="maintenanceInstructions" className="block text-sm font-medium text-gray-700">
            Maintenance Instructions
          </label>
          <textarea
            id="maintenanceInstructions"
            {...register('maintenanceInstructions')}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Describe required maintenance during product use"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductLifeCycle;
