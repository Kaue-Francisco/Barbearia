import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import novaImagem from '../../../../../../images/servicos.png'; // Substitua pelo caminho correto da nova imagem
import novaImagemMobile from '../../../../../../images/servicosMobile.png'; // Substitua pelo caminho correto da versão móvel da nova imagem

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
            width={isMobile ? '90%' : '100%'} // Ajusta a largura baseada no tipo de dispositivo
            className='mx-auto rounded-lg'/>
        </div>
    )
}