import React from 'react';

import { WeatherData } from '@/types';
import { weatherData } from '@/lib/weatherData';

export default function WeatherDashBoard() {
  return (
    <div>
      <div className='flex gap-2 mb-4'>
        <input
          type='text'
          className='px-4 py-2 border rounded'
          placeholder='Search...'
        />
        <button className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>
          Clear
        </button>
      </div>
      <table className='min-w-full'>
        <thead>
          <tr>
            <th className='px-4 py-2'>Name</th>
            <th className='px-4 py-2'>Temperature</th>
            <th className='px-4 py-2'>Description</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((data: WeatherData) => (
            <tr key={data.city}>
              <td className='border px-4 py-2'>{data.city}</td>
              <td className='border px-4 py-2'>{data.temperature}°C</td>
              <td className='border px-4 py-2'>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
