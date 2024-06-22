import backgroundImage from '../../../../images/background.png';
import corteCabelo from '../../../../images/corte_cabelo.jpg';
import barbeariaImage from '../../../../images/barbearia.jpg';
import Card from './components/Cards'; // Verifique se o nome do arquivo é `Card.js` ou `Card.tsx`
import Price from './components/Price';

export default function Content() {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
            className='py-16 px-4'
        >
            <Card
                initialImagePosition="left"
                textAlignment = 'left'
                imageSrc={corteCabelo}
                title="Cortes"
                description="A Companhia do Bigode é o lugar certo para cortes de cabelo e barba! Atendemos apenas com agendamento, e você pode relaxar tomando uma cervejinha enquanto espera o seu horário!"
            />

            <Card
                initialImagePosition="right"
                textAlignment = 'right'
                imageSrc={corteCabelo}
                title="Cortes"
                description="A Companhia do Bigode é o lugar certo para cortes de cabelo e barba! Atendemos apenas com agendamento, e você pode relaxar tomando uma cervejinha enquanto espera o seu horário!"
            />

            <Price />
        </div>
    );
}
