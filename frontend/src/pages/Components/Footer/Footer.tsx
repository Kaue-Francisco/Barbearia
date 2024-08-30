import { FacebookIcon, InstagramIcon, TwitterIcon, GoogleIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer className="bg-secondary text-white py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-bold mb-4">Horário de Funcionamento</h4>
                    <p className="text-sm -400 mb-2">Terça - Sexta: 09:00h - 19:00h</p>
                    <p className="text-sm -400 mb-2">Sabádo: 08:00h - 17:00h</p>
                    <p className="text-sm -400 mb-2">Segunda - Domingo: Fechado</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold mb-4">Companhia do Bigode</h3>
                    <p className="text-sm -400 mb-2">R. Anápolis, 914 - Parque Industrial, São José dos Campos</p>
                    <p className="text-sm -400 mb-2">(12) 99718-4796</p>
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="text-lg font-bold mb-4">Segue a gente</h4>
                    <a href="#" className="-400 hover:text-white">
                        <InstagramIcon className="h-6 w-6" />
                    </a>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-8 text-center">
                <p className="text-sm -400">&copy; 2024 Companhia do Bigode. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}