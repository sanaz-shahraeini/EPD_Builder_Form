import { useState, useEffect } from 'react';

const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY';
const SCRIPT_ID = 'google-maps-script';

const useGoogleMaps = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If the script is already loaded, don't load it again
    if (window.google?.maps) {
      setIsLoaded(true);
      return;
    }

    // If the script is already in the process of loading, wait for it
    let script = document.getElementById(SCRIPT_ID);
    if (script) {
      script.addEventListener('load', () => setIsLoaded(true));
      script.addEventListener('error', (e) => setError(e));
      return;
    }

    // Create and load the script
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;

    const handleLoad = () => setIsLoaded(true);
    const handleError = (error) => setError(error);

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (script) {
        script.removeEventListener('load', handleLoad);
        script.removeEventListener('error', handleError);
      }
    };
  }, []);

  return { isLoaded, error };
};

export default useGoogleMaps;
