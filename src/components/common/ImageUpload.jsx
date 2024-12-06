import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

function ImageUpload() {
  const [preview, setPreview] = useState(null);
  const { setValue } = useFormContext();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setValue('image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Product Image</label>
      <div className="flex items-center space-x-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {preview && (
          <img src={preview} alt="Preview" className="h-20 w-20 object-cover rounded-md" />
        )}
      </div>
    </div>
  );
}

export default ImageUpload;