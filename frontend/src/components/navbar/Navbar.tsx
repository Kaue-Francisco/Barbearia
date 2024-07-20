import { useState } from 'react';
import logo from '../../images/logo.png';
import hamburgue_icon from '../../images/hamburgue_icon.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavbarMobile = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-amber-900/95 flex items-center justify-between w-screen max-w-full px-6 py-4 fixed z-50">
            <div className="flex items-center">
                <a href="/">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="h-10 w-22 mr-2 transition-transform transform hover:scale-110" 
                    />
                </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <a href="/" className="text-white hover:text-gray-300 transition-colors duration-300">Inicio</a>
                <a href="/contact" className="text-white hover:text-gray-300 transition-colors duration-300">Contato</a>
                <a href="/schedule" className="text-white hover:text-gray-300 transition-colors duration-300">Agendamento</a>
                <a href="/login" className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300">Login</a>
            </div>

            <button className='md:hidden' onClick={handleNavbarMobile}>
                <img 
                    className='h-6 transition-transform transform hover:scale-110' 
                    src={hamburgue_icon} 
                    alt="Menu"
                />
            </button>

            {isOpen && (
                <div className="flex flex-col items-start md:hidden absolute top-full right-0 w-full bg-amber-900/90 z-50">
                    <a href="/" className="text-white hover:text-gray-300 transition-colors duration-300 py-2 px-6">Inicio</a>
                    <a href="/contact" className="text-white hover:text-gray-300 transition-colors duration-300 py-2 px-6">Contato</a>
                    <a href="/schedule" className="text-white hover:text-gray-300 transition-colors duration-300 py-2 px-6">Agendamento</a>
                    <a href="/login" className="inline-block bg-orange-500 mx-6 text-white px-8 py-2 rounded hover:bg-orange-600 transition-colors duration-300 mt-2 mb-4">Login</a>
                </div>
            )}
        </nav>
    );
}
