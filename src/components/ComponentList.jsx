import React, { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import MaterialList from './MaterialList';

function ComponentList({ mainComponentIndex }) {
  const { register, control, watch, setValue, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `mainComponents.${mainComponentIndex}.components`,
  });

  // Watch for changes in component fields
  const components = watch(`mainComponents.${mainComponentIndex}.components`);

  const componentTypes = [
    'Assembly',
    'Sub-assembly',
    'Individual Part',
    'Module',
    'System',
    'Other'
  ];

  const transportOptions = [
    'Road Transport',
    'Rail Transport',
    'Sea Transport',
    'Air Transport',
    'River Transport',
    'Multimodal Transport',
    'Other'
  ];

  // Transport-specific calculations
  const transportConfig = {
    'Road Transport': {
      distanceFactor: 1.2,
      speeds: {
        'Car': 90, // km/h
        'Truck': 80,
        'Truck 16-32t': 75,
        'Truck above 32t': 70
      },
      co2PerKm: {
        'Car': 0.12, // kg CO2 per km
        'Truck': 0.2,
        'Truck 16-32t': 0.8,
        'Truck above 32t': 0.92
      }
    },
    'Rail Transport': {
      distanceFactor: 1.3,
      speed: 100, // km/h
      co2PerKm: 0.04 // kg CO2 per km
    },
    'Sea Transport': {
      distanceFactor: 1.5,
      speed: 40, // km/h
      co2PerKm: 0.06 // kg CO2 per km
    },
    'Air Transport': {
      distanceFactor: 1.0,
      speed: 800, // km/h
      co2PerKm: 0.9 // kg CO2 per km
    },
    'River Transport': {
      distanceFactor: 1.3,
      speed: 20, // km/h
      co2PerKm: 0.03 // kg CO2 per km
    },
    'Multimodal Transport': {
      distanceFactor: 1.4,
      speed: 60, // average speed
      co2PerKm: 0.15 // average emissions
    },
    'Other': {
      distanceFactor: 1.2,
      speed: 60,
      co2PerKm: 0.2
    }
  };

  const vehicleTypes = [
    'Car',
    'Truck',
    'Truck 16-32t',
    'Truck above 32t'
  ];

  // Expanded list of countries with capitals
  const countries = [
    // Europe
    { code: 'SE', name: 'Sweden', capital: { lat: 59.3293, lon: 18.0686 } },
    { code: 'NO', name: 'Norway', capital: { lat: 59.9139, lon: 10.7522 } },
    { code: 'DK', name: 'Denmark', capital: { lat: 55.6761, lon: 12.5683 } },
    { code: 'FI', name: 'Finland', capital: { lat: 60.1699, lon: 24.9384 } },
    { code: 'DE', name: 'Germany', capital: { lat: 52.5200, lon: 13.4050 } },
    { code: 'FR', name: 'France', capital: { lat: 48.8566, lon: 2.3522 } },
    { code: 'UK', name: 'United Kingdom', capital: { lat: 51.5074, lon: -0.1278 } },
    { code: 'IT', name: 'Italy', capital: { lat: 41.9028, lon: 12.4964 } },
    { code: 'ES', name: 'Spain', capital: { lat: 40.4168, lon: -3.7038 } },
    { code: 'NL', name: 'Netherlands', capital: { lat: 52.3676, lon: 4.9041 } },
    { code: 'BE', name: 'Belgium', capital: { lat: 50.8503, lon: 4.3517 } },
    { code: 'PL', name: 'Poland', capital: { lat: 52.2297, lon: 21.0122 } },
    { code: 'CZ', name: 'Czech Republic', capital: { lat: 50.0755, lon: 14.4378 } },
    { code: 'AT', name: 'Austria', capital: { lat: 48.2082, lon: 16.3738 } },
    { code: 'CH', name: 'Switzerland', capital: { lat: 46.9480, lon: 7.4474 } },
    { code: 'PT', name: 'Portugal', capital: { lat: 38.7223, lon: -9.1393 } },
    { code: 'IE', name: 'Ireland', capital: { lat: 53.3498, lon: -6.2603 } },
    { code: 'GR', name: 'Greece', capital: { lat: 37.9838, lon: 23.7275 } },
    // North America
    { code: 'US', name: 'United States', capital: { lat: 38.8977, lon: -77.0365 } },
    { code: 'CA', name: 'Canada', capital: { lat: 45.4215, lon: -75.6972 } },
    { code: 'MX', name: 'Mexico', capital: { lat: 19.4326, lon: -99.1332 } },
    // Asia
    { code: 'CN', name: 'China', capital: { lat: 39.9042, lon: 116.4074 } },
    { code: 'JP', name: 'Japan', capital: { lat: 35.6762, lon: 139.6503 } },
    { code: 'KR', name: 'South Korea', capital: { lat: 37.5665, lon: 126.9780 } },
    { code: 'IN', name: 'India', capital: { lat: 28.6139, lon: 77.2090 } },
    { code: 'SG', name: 'Singapore', capital: { lat: 1.3521, lon: 103.8198 } },
    // Australia & Oceania
    { code: 'AU', name: 'Australia', capital: { lat: -35.2809, lon: 149.1300 } },
    { code: 'NZ', name: 'New Zealand', capital: { lat: -41.2865, lon: 174.7762 } },
    // South America
    { code: 'BR', name: 'Brazil', capital: { lat: -15.7975, lon: -47.8919 } },
    { code: 'AR', name: 'Argentina', capital: { lat: -34.6037, lon: -58.3816 } },
    // Middle East
    { code: 'AE', name: 'UAE', capital: { lat: 24.4539, lon: 54.3773 } },
    { code: 'SA', name: 'Saudi Arabia', capital: { lat: 24.7136, lon: 46.6753 } }
  ].sort((a, b) => a.name.localeCompare(b.name)); // Sort countries alphabetically

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Calculate transport metrics when relevant fields change
  useEffect(() => {
    if (components) {
      components.forEach((component, index) => {
        if (component.origin && component.destination && component.transportMethod) {
          const originCountry = countries.find(c => c.code === component.origin);
          const destCountry = countries.find(c => c.code === component.destination);

          if (originCountry && destCountry) {
            // Calculate base distance
            const baseDistance = calculateDistance(
              originCountry.capital.lat,
              originCountry.capital.lon,
              destCountry.capital.lat,
              destCountry.capital.lon
            );

            const transport = transportConfig[component.transportMethod];
            const distanceFactor = transport.distanceFactor;
            const adjustedDistance = Math.round(baseDistance * distanceFactor);

            // Calculate transport time
            let speed;
            if (component.transportMethod === 'Road Transport' && component.vehicleType) {
              speed = transport.speeds[component.vehicleType];
            } else {
              speed = transport.speed;
            }
            const timeHours = adjustedDistance / speed;
            const timeDays = Math.ceil(timeHours / 24);
            const estimatedTime = timeDays === 1 ? '1 day' : `${timeDays} days`;

            // Calculate carbon footprint
            let co2PerKm;
            if (component.transportMethod === 'Road Transport' && component.vehicleType) {
              co2PerKm = transport.co2PerKm[component.vehicleType];
            } else {
              co2PerKm = transport.co2PerKm;
            }
            const carbonFootprint = Math.round(adjustedDistance * co2PerKm * 100) / 100;

            // Update form values
            setValue(`mainComponents.${mainComponentIndex}.components.${index}.distance`, adjustedDistance);
            setValue(`mainComponents.${mainComponentIndex}.components.${index}.estimatedTime`, estimatedTime);
            setValue(`mainComponents.${mainComponentIndex}.components.${index}.carbonFootprint`, carbonFootprint);
          }
        }
      });
    }
  }, [components?.map(c => c.origin + c.destination + c.transportMethod + c.vehicleType).join(',')]);

  const handleAddComponent = () => {
    append({
      name: '',
      type: '',
      description: '',
      quantity: '',
      unit: 'pcs',
      transportMethod: '',
      vehicleType: '',
      origin: '',
      destination: '',
      distance: '',
      estimatedTime: '',
      carbonFootprint: '',
      materials: []
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Components</h2>
        <button
          type="button"
          onClick={handleAddComponent}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-terra-dark hover:bg-opacity-90 focus:outline-none"
        >
          <PlusIcon className="h-4 w-4 mr-1" />
          Add Component
        </button>
      </div>

      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            {/* Basic Information Section */}
            <div className="space-y-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900">Basic Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Component Name
                  </label>
                  <input
                    type="text"
                    {...register(`mainComponents.${mainComponentIndex}.components.${index}.name`, {
                      required: 'Component name is required'
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Enter component name"
                  />
                  {errors.mainComponents?.[mainComponentIndex]?.components?.[index]?.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.mainComponents[mainComponentIndex].components[index].name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Component Type
                  </label>
                  <select
                    {...register(`mainComponents.${mainComponentIndex}.components.${index}.type`, {
                      required: 'Component type is required'
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select type</option>
                    {componentTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.mainComponents?.[mainComponentIndex]?.components?.[index]?.type && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.mainComponents[mainComponentIndex].components[index].type.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    {...register(`mainComponents.${mainComponentIndex}.components.${index}.description`)}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Enter component description"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      {...register(`mainComponents.${mainComponentIndex}.components.${index}.quantity`, {
                        required: 'Quantity is required',
                        min: { value: 0, message: 'Quantity must be positive' }
                      })}
                      className="block w-full rounded-l-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Enter quantity"
                    />
                    <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                      pcs
                    </span>
                  </div>
                  {errors.mainComponents?.[mainComponentIndex]?.components?.[index]?.quantity && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.mainComponents[mainComponentIndex].components[index].quantity.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Transport Section */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Transport Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Transport Method
                  </label>
                  <select
                    {...register(`mainComponents.${mainComponentIndex}.components.${index}.transportMethod`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select transport method</option>
                    {transportOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {watch(`mainComponents.${mainComponentIndex}.components`)?.[index]?.transportMethod === 'Road Transport' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Vehicle Type
                    </label>
                    <select
                      {...register(`mainComponents.${mainComponentIndex}.components.${index}.vehicleType`)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    >
                      <option value="">Select vehicle type</option>
                      {vehicleTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Origin Country
                  </label>
                  <select
                    {...register(`mainComponents.${mainComponentIndex}.components.${index}.origin`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select origin country</option>
                    {countries.map(country => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Destination Country
                  </label>
                  <select
                    {...register(`mainComponents.${mainComponentIndex}.components.${index}.destination`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">Select destination country</option>
                    {countries.map(country => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Distance (km)
                  </label>
                  <input
                    type="number"
                    readOnly
                    {...register(`mainComponents.${mainComponentIndex}.components.${index}.distance`)}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Distance will be calculated automatically"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Estimated Transport Time
                  </label>
                  <input
                    type="text"
                    readOnly
                    {...register(`mainComponents.${mainComponentIndex}.components.${index}.estimatedTime`)}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Estimated time will be calculated"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Carbon Footprint (kg CO2)
                  </label>
                  <input
                    type="text"
                    readOnly
                    {...register(`mainComponents.${mainComponentIndex}.components.${index}.carbonFootprint`)}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    placeholder="Carbon footprint will be calculated"
                  />
                </div>
              </div>
            </div>

            {/* Materials Section */}
            <div className="border-t border-gray-200 pt-6">
              <MaterialList
                mainComponentIndex={mainComponentIndex}
                componentIndex={index}
              />
            </div>

            {/* Remove Button */}
            <div className="flex justify-end pt-4 border-t border-gray-200 mt-6">
              <button
                type="button"
                onClick={() => remove(index)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-600 hover:text-red-700 focus:outline-none"
              >
                <TrashIcon className="h-4 w-4 mr-1" />
                Remove Component
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComponentList;