import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ProductBasicInfo from './components/product/ProductBasicInfo';
import ProductLifeCycle from './components/product/ProductLifeCycle';
import EnvironmentalImpact from './components/environmental/EnvironmentalImpact';
import MainComponentList from './components/MainComponentList';
import Sidebar from './components/Sidebar';
import ProgressBar from './components/ProgressBar';
import NestedSidebar from './components/NestedSidebar';
import ProductSummaryCard from './components/product/ProductSummaryCard';

const App = () => {
  const methods = useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  // Mock product data - replace with actual data from your state management
  const mockProduct = {
    name: 'Product name 01',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    imageUrl: '/ac-unit.jpg', // Replace with actual image path
    industrySolution: 'Lorem',
    country: 'Spain',
    additionalInfo: {
      // Add any additional information you want to display
    }
  };

  const steps = [
    { id: 1, name: 'Product Information', component: <ProductBasicInfo /> },
    { id: 2, name: 'Product Life Cycle', component: <ProductLifeCycle /> },
    { id: 3, name: 'Components', component: <MainComponentList /> },
    { id: 4, name: 'Environmental Impact', component: <EnvironmentalImpact /> },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  // Show different layout for create-product route
  if (location.pathname === '/create-product') {
    return <Outlet />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Nested Left Sidebar */}
      <NestedSidebar onCreateProduct={() => navigate('/create-product')} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-terra-dark mb-6">Create New EPD</h1>
            
            {/* Product Summary Card */}
            <ProductSummaryCard product={mockProduct} />
            
            <ProgressBar steps={steps} currentStep={currentStep} />
            
            <div className="mt-16">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
                  {steps.find(step => step.id === currentStep)?.component}

                  <div className="flex justify-between pt-5">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                      className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-terra-dark hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terra-dark ${
                        currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </button>
                    
                    {currentStep === steps.length ? (
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-terra-green hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terra-green"
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-terra-blue hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terra-blue"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <Sidebar side="right">
        <div className="space-y-6">
          {/* Ask Questions Section */}
          <div>
            <h3 className="text-lg font-medium text-terra-dark mb-3">Ask Questions</h3>
            <div className="bg-gray-50 rounded-md p-4">
              <p className="text-sm text-gray-600 mb-3">
                Need help? Our support team is here to assist you with any questions about the EPD creation process.
              </p>
              <button className="w-full bg-terra-blue text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                Ask Questions
              </button>
            </div>
          </div>

          {/* Upload Component Information */}
          <div>
            <h3 className="text-lg font-medium text-terra-dark mb-3">Upload Component Information</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-md p-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-3xl">📎</span>
                <p className="text-sm text-gray-600">
                  Drag & Drop files here or <span className="text-terra-blue">browse</span>
                </p>
                <p className="text-xs text-gray-400">Supported formats: PDF, XLS, DOC</p>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default App;