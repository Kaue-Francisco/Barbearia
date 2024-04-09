import logo from '../../../../images/logo.png';

export default function Navbar() {
    return (
        <nav className="bg-amber-900 py-7">
            <div className="px-10 flex justify-between items-center">
                
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-8 w-8 mr-2"/>
                </div>
                
                <div className="flex items-center space-x-4 hidden md:block">
                    <a href="/" className="text-white hover:text-gray-300">Inicio</a>
                    <a href="/schedule" className="text-white hover:text-gray-300">Agendamento</a>
                    <a href="/contact" className="text-white hover:text-gray-300">Contato</a>
                    <a href="/register" className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Login</a>
                </div>

                <a href="/register" className="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 block md:hidden">Login</a>
            </div>
                <div className="flex flex-col items-center space-x-4 block md:hidden">
                    <a href="/" className="text-white hover:text-gray-300">Inicio</a>
                    <a href="/schedule" className="text-white hover:text-gray-300">Agendamento</a>
                    <a href="/contact" className="text-white hover:text-gray-300">Contato</a>
                </div>
        </nav>
    )
}