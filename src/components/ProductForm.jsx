import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import ProductBasicInfo from '../product/ProductBasicInfo';
import ProductLifeCycle from '../product/ProductLifeCycle';
import EnvironmentalImpact from '../environmental/EnvironmentalImpact';
import MainComponentList from './MainComponentList';

function ProductForm() {
  const [submittedData, setSubmittedData] = useState(null);
  const methods = useForm({
    defaultValues: {
      name: '',
      category: '',
      description: '',
      image: null,
      lifeCycle: '',
      endOfLife: '',
      energyConsumption: '',
      waterConsumption: '',
      emissions: '',
      wasteGeneration: '',
      packaging: '',
      transportation: '',
      mainComponents: []
    }
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setSubmittedData(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6 space-y-8">
            <ProductBasicInfo />
            <ProductLifeCycle />
            <EnvironmentalImpact />
            <MainComponentList />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save Product
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="mt-8 bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Submitted Product Data</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-700">Basic Information</h4>
                <div className="mt-2 text-sm text-gray-600">
                  <p><span className="font-medium">Name:</span> {submittedData.name}</p>
                  <p><span className="font-medium">Category:</span> {submittedData.category}</p>
                  <p><span className="font-medium">Description:</span> {submittedData.description}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700">Life Cycle Information</h4>
                <div className="mt-2 text-sm text-gray-600">
                  <p><span className="font-medium">Life Cycle Stage:</span> {submittedData.lifeCycle}</p>
                  <p><span className="font-medium">End of Life:</span> {submittedData.endOfLife}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700">Environmental Impact</h4>
                <div className="mt-2 text-sm text-gray-600">
                  <p><span className="font-medium">Energy Consumption:</span> {submittedData.energyConsumption} kWh</p>
                  <p><span className="font-medium">Water Consumption:</span> {submittedData.waterConsumption} L</p>
                  <p><span className="font-medium">CO2 Emissions:</span> {submittedData.emissions} kg</p>
                  <p><span className="font-medium">Waste Generation:</span> {submittedData.wasteGeneration} kg</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-700">Product Structure</h4>
                <div className="mt-4 space-y-6">
                  {submittedData.mainComponents.map((mainComponent, mainIndex) => (
                    <div key={mainIndex} className="border-2 border-indigo-200 rounded-lg p-4">
                      <h5 className="text-lg font-medium text-indigo-900 mb-3">
                        Main Component: {mainComponent.name}
                      </h5>
                      <div className="pl-4 space-y-4">
                        {mainComponent.components.map((component, componentIndex) => (
                          <div key={componentIndex} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                            <h6 className="font-medium text-gray-900 mb-2">
                              Component: {component.name}
                            </h6>
                            <div className="pl-4">
                              <p className="text-sm font-medium text-gray-700 mb-2">Materials:</p>
                              <div className="space-y-2">
                                {component.materials.map((material, materialIndex) => (
                                  <div key={materialIndex} className="flex items-center text-sm text-gray-600">
                                    <span className="w-1/3">{material.name}</span>
                                    <span className="w-1/3">{material.quantity} {material.unit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </FormProvider>
  );
}

export default ProductForm;