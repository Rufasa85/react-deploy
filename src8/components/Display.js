import React from 'react';
import Card from './Card';
const pets = [
  {
    name: 'Spot',
    description: 'The best boy',
    id: 1,
  },
  {
    name: 'Bahamut',
    description: 'I like to jump',
    id: 2,
  },
  {
    name: 'Shiva',
    description: 'I am weird',
    id: 3,
  }

]



export default function Display() {
  return (
    <div>
        {pets.map(pet=> <Card key={pet.id} canine={pet}/>)}
    </div>
  );
}
