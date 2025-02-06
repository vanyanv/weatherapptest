interface WeatherData {
  id: number;
  city: string;
  temperature: number;
  description: string;
}

const weatherData: WeatherData[] = [
  {
    id: 1,
    city: 'New York',
    temperature: 72,
    description: 'Partly cloudy',
  },
  {
    id: 2,
    city: 'London',
    temperature: 65,
    description: 'Rainy',
  },
  {
    id: 3,
    city: 'Tokyo',
    temperature: 80,
    description: 'Sunny',
  },
  {
    id: 4,
    city: 'Paris',
    temperature: 70,
    description: 'Cloudy',
  },
  {
    id: 5,
    city: 'Sydney',
    temperature: 85,
    description: 'Clear skies',
  },
];

export { weatherData };
