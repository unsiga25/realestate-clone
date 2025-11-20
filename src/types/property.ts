export interface Agent {
  name: string;
  agency: string;
  avatar: string;
}

export interface Property {
  id: number;
  price: string;
  address: string;
  suburb: string;
  beds: number;
  baths: number;
  parking: number;
  propertyType: string;
  image: string;
  agent: Agent;
}
