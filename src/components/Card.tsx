// components/Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[300px] max-w-sm  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={imageUrl} alt={title} className="w-full h-55 object-cover" />
      <div className="p-4">
        <h2 className="text-blue-900 font-semibold mb-2">{title}</h2>
        <p className="text-gray-900 font-semibold">{description}</p>
      </div>
    </div>
  );
}
