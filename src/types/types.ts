export interface Material {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  source: string;
  processing: string;
  environmentalImpact: string;
}

export interface SubComponent {
  id: string;
  name: string;
  quantity: number;
  weight: number;
  unit: string;
  materials: Material[];
}

export interface Component {
  id: string;
  name: string;
  quantity: number;
  weight: number;
  unit: string;
  subComponents: SubComponent[];
  materials: Material[];
}

export interface Product {
  name: string;
  description: string;
  category: string;
  image: string | null;
  lifeCycle: string;
  endOfLife: string;
  energyConsumption: string;
  waterConsumption: string;
  emissions: string;
  wasteGeneration: string;
  packaging: string;
  transportation: string;
  components: Component[];
}