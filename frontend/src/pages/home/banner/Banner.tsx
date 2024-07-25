import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../../../images/fundo_banner.png";

export default function Banner() {
    const navigate = useNavigate();

    return (
        <div className="relative w-full h-screen" style={{"userSelect": "none"}}>
            <img alt="Image" className="object-cover w-full h-full" src={backgroundImage} />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/40 backdrop-filter">
                <div className="space-y-2">
                    <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl/none text-gray-100">
                        COMPANHIA DO BIGODE
                    </h2>
                    <p className="text-gray-300 md:text-3xl lg:text-2xl xl:text-lg">
                        Barbearia
                    </p>
                </div>

                <div className="mt-10">
                    <button 
                        onClick={() => navigate('/schedule')}
                        className="inline-flex h-12 items-center rounded-md bg-orange-500 px-4 text-lg font-medium text-gray-50 transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                        Agende seu horário!
                    </button>
                </div>
            </div>
        </div>
    );
}