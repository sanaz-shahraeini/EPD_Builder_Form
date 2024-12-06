export const colors = {
  primary: {
    darkest: '#1B3B48',  // Dark teal
    dark: '#45B7CE',     // Turquoise
    DEFAULT: '#2A7B9B',  // Medium blue
    light: '#A8E0EC',    // Light blue
    lightest: '#E6F7FB'  // Very light blue
  },
  secondary: {
    dark: '#4B9460',     // Dark green
    DEFAULT: '#76B947',  // Medium green
    light: '#A4D65E'     // Light green
  },
  terra: {
    green: '#A4D65E',    // Terra green
    blue: '#45B7CE',     // N blue
    dark: '#1B3B48'      // E/T dark blue
  }
};

export const buttonVariants = {
  primary: 'bg-primary hover:bg-primary-dark text-white',
  secondary: 'bg-primary-light hover:bg-primary text-white',
  success: 'bg-accent hover:bg-accent/90 text-white',
  danger: 'bg-red-100 hover:bg-red-200 text-red-700',
  ghost: 'bg-primary-lightest hover:bg-primary-lighter text-primary-dark'
};
