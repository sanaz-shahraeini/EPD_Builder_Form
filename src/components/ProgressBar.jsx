import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="w-full">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-200 -translate-y-1/2">
          <div
            className="absolute left-0 top-0 h-full bg-terra-blue transition-all duration-500 ease-in-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index + 1 < currentStep;
            const isCurrent = index + 1 === currentStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                {/* Step Circle */}
                <div className="relative">
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      transition-all duration-300 ease-in-out
                      ${isCompleted 
                        ? 'bg-terra-blue text-white' 
                        : isCurrent
                          ? 'bg-white border-2 border-terra-blue text-terra-blue'
                          : 'bg-white border-2 border-gray-200 text-gray-400'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <CheckIcon className="w-6 h-6" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  
                  {/* Pulse Animation for Current Step */}
                  {isCurrent && (
                    <div className="absolute -inset-1.5 rounded-full animate-pulse-ring" />
                  )}
                </div>

                {/* Step Label */}
                <div className="mt-3 flex flex-col items-center">
                  <span
                    className={`
                      text-sm font-medium mb-1
                      ${isCompleted || isCurrent ? 'text-terra-dark' : 'text-gray-500'}
                    `}
                  >
                    {step.name}
                  </span>
                  
                  {/* Status Indicator */}
                  <span
                    className={`
                      text-xs px-2 py-0.5 rounded-full
                      ${isCompleted 
                        ? 'bg-green-100 text-green-800'
                        : isCurrent
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-600'
                      }
                    `}
                  >
                    {isCompleted ? 'Completed' : isCurrent ? 'In Progress' : 'Pending'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
