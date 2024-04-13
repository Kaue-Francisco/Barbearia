import backgroundImage from '../../../../images/background.png';
import Cards from './components/Cards';
import Price from './components/Price';

export default function Content() {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }}>
        
        <Cards />

        <Price />

        </div>
    );
}
