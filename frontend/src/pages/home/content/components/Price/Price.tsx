import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import novaImagem from '../../../../../images/servicos.png';
import novaImagemMobile from '../../../../../images/servicosMobile.png';

export default function Price () {
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(min-width:601px) and (max-width:1224px)');

    // Lógica para selecionar a imagem baseada no tamanho da tela
    let imageSource = novaImagem; // Imagem padrão para desktop
    if (isMobile || isTablet) {
        imageSource = novaImagemMobile; // Se for mobile ou tablet, usa a imagem para dispositivos móveis
    }

    return (
        <div className="text-3xl font-bold flex flex-col items-center mt-8">
            <img 
            src={imageSource} 
            alt="Descrição da nova imagem"
            style={{ width: isMobile ? '90%' : '100%', maxWidth: '80rem' }} // Ajusta a largura e define maxWidth para telas maiores
            className='mx-auto rounded-lg'/>
        </div>
    )
}