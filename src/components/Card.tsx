// components/Card.tsx
import React from 'react';

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  category?: string; // opcional
};

export default function Card({ title, description, imageUrl, category }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[400px] h-[380px] max-w-sm transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        {category && (
          <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-bold mb-2">
            {category}
          </span>
        )}
        <h2 className="text-blue-900 font-semibold text-lg mb-2">{title}</h2>
        <p className="text-gray-800 text-sm">{description}</p>
      </div>
    </div>
  );
}
