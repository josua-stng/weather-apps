'use client';
import { useState } from 'react';

export default function SearchCity() {
  const [city, setCity] = useState('');

  return (
    <div>
      <input 

      type="text" placeholder="search city" />
    </div>
  );
}
