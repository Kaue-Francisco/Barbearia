import { useState } from 'react';
import logo from '../../images/logo.png';
import hamburgue_icon from '../../images/hamburgue_icon.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const handleNavbarMobile = () => {
        if(isOpen){
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }

    }

    return (
        <nav className="bg-amber-900 py-6 relative">
            <div className="px-10 flex justify-between items-center">
                
                <div className="flex items-center">
                    <a href="/"><img src={logo} alt="Logo" className="h-10 w-22 mr-2"/></a>
                </div>
                
                <div className="items-center space-x-4 hidden md:flex">
                    <a href="/" className="text-white hover:text-gray-300">Inicio</a>
                    <a href="/contact" className="text-white hover:text-gray-300">Contato</a>
                    <a href="/schedule" className="text-white hover:text-gray-300">Agendamento</a>
                    <a href="/login" className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Login</a>
                </div>
                <button className='md:hidden' onClick={handleNavbarMobile}><img className='h-6' src={hamburgue_icon}/></button>
            </div>

            { isOpen ? (
                <div className="flex flex-col items-end pr-10 space-x-4 md:hidden absolute w-full bg-amber-900 z-10">
                    <a href="/" className="text-white hover:text-gray-300">Inicio</a>
                    <a href="/contact" className="text-white hover:text-gray-300">Contato</a>
                    <a href="/schedule" className="text-white hover:text-gray-300">Agendamento</a>
                    <a href="/login" className="inline-block bg-orange-500 text-white px-8 py-1 rounded hover:bg-orange-600 md:hidden mb-4 mt-2">Login</a>
                </div>
            ) : null
            }
        </nav>
    )
}