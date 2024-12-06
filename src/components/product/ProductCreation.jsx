import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPinIcon } from '@heroicons/react/24/outline';

const ProductCreation = () => {
  const { register, handleSubmit } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) clearInterval(interval);
    }, 500);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-terra-dark text-white">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">User name</div>
              <div className="text-xs text-white/60">Company Name</div>
            </div>
          </div>

          <nav className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-md bg-white/10">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span>Product Portfolio</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-white/10">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Project Management</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-white/10">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Administrative</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-white/10">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>EPD preview</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-md hover:bg-white/10">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span>Requests</span>
              <span className="ml-auto bg-yellow-400 text-terra-dark text-xs font-medium px-2 py-0.5 rounded-full">2</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-6">
          <h1 className="text-xl font-medium text-terra-dark mb-6">Create Product</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Description Section */}
            <div className="bg-white/50 rounded-lg p-6">
              <h2 className="text-sm font-medium text-terra-dark mb-4">Description</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                    placeholder="Lorem ipsum dolor sit amet"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project name</label>
                  <select
                    {...register('projectName')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                  >
                    <option value="">Lorem ipsum dolor sit amet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  {...register('description')}
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                />
              </div>
            </div>

            {/* Production Planet Section */}
            <div className="bg-white/50 rounded-lg p-6">
              <h2 className="text-sm font-medium text-terra-dark mb-4">Production Planet</h2>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Supplier Country</label>
                  <select
                    {...register('supplierCountry')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                    defaultValue="spain"
                  >
                    <option value="spain">Spain</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <select
                    {...register('city')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                    defaultValue="madrid"
                  >
                    <option value="madrid">Madrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dimension</label>
                  <div className="flex">
                    <input
                      type="text"
                      {...register('dimension')}
                      className="w-full rounded-l-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                      placeholder="10"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      cm
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                  <div className="flex">
                    <input
                      type="text"
                      {...register('weight')}
                      className="w-full rounded-l-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                    />
                    <select
                      {...register('weightUnit')}
                      className="rounded-r-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                      defaultValue="kg"
                    >
                      <option value="kg">Kg</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Life time</label>
                  <div className="flex">
                    <input
                      type="text"
                      {...register('lifeTime')}
                      className="w-full rounded-l-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                      placeholder="0"
                    />
                    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      Year
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Use Country</label>
                  <input
                    type="text"
                    {...register('useCountry')}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-terra-blue focus:ring-terra-blue"
                  />
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6239.850994088669!2d-3.7037929665710437!3d40.41677007936275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2s!4v1637942137212!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Product Image Upload */}
      <div className="w-80 bg-white p-6 border-l border-gray-200">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">Product image</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50">
              <div className="w-16 h-16 mb-4">
                <svg className="w-full h-full text-terra-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Drag & Drop or{' '}
                  <label className="text-terra-blue cursor-pointer">
                    Browse
                    <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
                  </label>
                </p>
              </div>
            </div>
          </div>

          {/* Upload Product Information */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-4">Upload product information</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-600">Name.pdf</span>
                </div>
                <button type="button" className="text-terra-blue">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>

              {selectedFile && (
                <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                  <div
                    className="bg-terra-blue h-1 rounded-full transition-all duration-500"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              )}

              <div className="text-center border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-600">
                  Drag & Drop or{' '}
                  <span className="text-terra-blue cursor-pointer">Browse</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Product Button */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          type="submit"
          className="px-8 py-2 bg-terra-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
        >
          Create Product
        </button>
      </div>
    </div>
  );
};

export default ProductCreation;
