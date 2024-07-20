import React from 'react';
import './Cards.css';
import GradualSpacing from '../../../../../components/animation/gradualSpacing';

interface CardProps {
  initialImagePosition?: 'left' | 'right';
  textAlignment?: 'left' | 'right';
  imageSrc: string;
  title: string;
  description: string;
}

export default function Card({ initialImagePosition = "left", textAlignment = "left", imageSrc, title, description }: CardProps) {
  const imageOrder = initialImagePosition === "left" ? 'md:order-1' : 'md:order-2';
  const textOrder = initialImagePosition === "left" ? 'md:order-2' : 'md:order-1';
  const textAlignClass = textAlignment === "left" ? 'text-left' : 'text-right'; // Define a classe de alinhamento do texto
  const imageAlignClass = textAlignment === "left" ? '' : 'md:ml-auto md:mr-0'; // Adiciona classe para alinhar a imagem à direita se necessário

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto mb-10">
      <div className={`${imageOrder} ${imageAlignClass}`}> {/* Aplica a classe de alinhamento da imagem corretamente */}
        <img
          src={imageSrc}
          alt={title}
          className="max-w-80 max-h-80 rounded-lg overflow-hidden brightness-50-contrast-150 md:max-w-none mx-auto"
        />
      </div>
      <div className={`${textOrder} space-y-4 p-4 ${textAlignClass} max-w-80 md:max-w-none mx-auto`}> {/* Aplica a classe de alinhamento do texto corretamente e limita a largura máxima do texto */}
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground text-xl">
          <GradualSpacing text={description} />
        </p>
      </div>
    </div>
  );
}