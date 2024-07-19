import React from 'react';

interface CardProps {
  title: string;
  value: string;
  color: string;
}

const Card: React.FC<CardProps> = ({ title, value, color }) => (
  <div className={`bg-${color}-100 p-4 rounded-lg shadow-md`}>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default Card;
