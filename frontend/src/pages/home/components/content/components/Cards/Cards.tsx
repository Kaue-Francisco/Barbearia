import React from 'react';
import './Cards.css';
import GradualSpacing from '../../../animation/gradualSpacing';

interface CardProps {
  initialImagePosition?: 'left' | 'right';
  textAlignment?: 'left' | 'right'; // Adicionado nova propriedade para alinhamento do texto
  imageSrc: string;
  title: string;
  description: string;
}

export default function Card({ initialImagePosition = "left", textAlignment = "left", imageSrc, title, description }: CardProps) {
  const imageOrder = initialImagePosition === "left" ? 'order-1' : 'order-2';
  const textOrder = initialImagePosition === "left" ? 'order-2' : 'order-1';
  const textAlignClass = textAlignment === "left" ? 'text-left' : 'text-right'; // Define a classe de alinhamento do texto
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-10">
      <div className={`md:${imageOrder} order-2`}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto rounded-lg overflow-hidden brightness-50-contrast-150 md:max-w-md mx-auto"
        />
      </div>
      <div className={`md:${textOrder} order-1 space-y-4 p-4 ${textAlignClass}`}> {/* Aplica a classe de alinhamento do texto */}
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-xl">
          <GradualSpacing text={description} />
        </p>
      </div>
    </div>
  );
}