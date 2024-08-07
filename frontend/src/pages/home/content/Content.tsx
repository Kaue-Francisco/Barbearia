import backgroundImage from '../../../images/background.png';
import corteCabelo from '../../../images/corte_cabelo.jpg';
import barbeariaImage from '../../../images/barbearia.jpg';
import Card from './components/Cards/Cards';
import Price from './components/Price/Price';
import Location from './components/Location/Location';

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
            <section className='mt-10 mb-10'>
                <Card
                    initialImagePosition="left"
                    textAlignment='left'
                    imageSrc={corteCabelo}
                    title="Cortes"
                    description="A Companhia do Bigode é o lugar certo para cortes de cabelo e barba! Atendemos apenas com agendamento, e você pode relaxar tomando uma cervejinha enquanto espera o seu horário!"
                />

                <Card
                    initialImagePosition="right"
                    textAlignment='right'
                    imageSrc={barbeariaImage}
                    title="Ambiente"
                    description="A Companhia do conta com um ambiente limpo e agradável, com profissionais qualificados e prontos para te atender! Venha conhecer a nossa barbearia!"
                />

                <div className="mt-10">
                    <Price />
                </div>

                <div className="mt-10">
                    <Location />
                </div>
            </section>
        </div>
    );
}
