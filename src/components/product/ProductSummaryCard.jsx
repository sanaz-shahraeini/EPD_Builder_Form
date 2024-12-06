import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

const ProductSummaryCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex items-start space-x-6">
        {/* Product Image */}
        <div className="flex-shrink-0 w-48 h-48 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.imageUrl || '/placeholder-product.jpg'}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-semibold text-gray-900">{product.name}</h2>
              <InformationCircleIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <p className="mt-2 text-gray-600 text-sm">
            {product.description}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-start space-x-2">
              <span className="text-sm font-medium text-gray-500">Industry Solutions :</span>
              <span className="text-sm text-gray-900">{product.industrySolution}</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-sm font-medium text-gray-500">Country :</span>
              <span className="text-sm text-gray-900">{product.country}</span>
            </div>
            {product.additionalInfo && Object.entries(product.additionalInfo).map(([key, value]) => (
              <div key={key} className="flex items-start space-x-2">
                <span className="text-sm font-medium text-gray-500">{key} :</span>
                <span className="text-sm text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummaryCard;
