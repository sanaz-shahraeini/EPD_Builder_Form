import React, { useState } from 'react';
import { DocumentIcon, XMarkIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const FileUpload = ({ onFileSelect, acceptedFileTypes = '*' }) => {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (newFiles) => {
    setFiles(prev => [...prev, ...newFiles]);
    if (onFileSelect) {
      onFileSelect(newFiles);
    }
  };

  const removeFile = (fileToRemove) => {
    setFiles(files.filter(file => file !== fileToRemove));
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 ${
          dragActive ? 'border-terra-blue bg-terra-blue/5' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center">
          <ArrowUpTrayIcon className="w-8 h-8 text-gray-400 mb-4" />
          <p className="text-sm text-gray-600 text-center mb-2">
            Drag & drop your files here, or{' '}
            <label className="text-terra-blue cursor-pointer hover:text-terra-blue/80">
              browse
              <input
                type="file"
                className="hidden"
                multiple
                accept={acceptedFileTypes}
                onChange={handleChange}
              />
            </label>
          </p>
          <p className="text-xs text-gray-500">
            Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <DocumentIcon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-700">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFile(file)}
                className="text-gray-400 hover:text-red-500"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
