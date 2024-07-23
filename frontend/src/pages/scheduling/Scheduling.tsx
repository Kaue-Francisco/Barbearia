import React from 'react';
import backgroundImage from '../../images/background.png';
import BookingForm from './components/BookingForm';
import UserInfoForm from './components/UserInfoForm';
import ServiceSelection from './components/ServiceSelection';

export default function Scheduling() {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                paddingTop: '4rem', // Ajuste conforme a altura da sua navbar
                paddingBottom: '4rem', // Ajuste conforme a altura do footer
                position: 'relative',
            }}
        >
            <div    
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            ></div>
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '5px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    zIndex: 2,
                    maxWidth: '90%',
                    width: '600px',
                    margin: '50px auto',
                }}
            >
                <main className="flex flex-col items-center pt-16 py-8 px-6 md:px-10 lg:px-16">
                    <ServiceSelection />
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
                        <BookingForm />
                        <UserInfoForm />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button 
                            className="h-12 rounded-md bg-orange-500 px-6 text-lg font-medium text-gray-50 transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                        >
                            Agendar horário
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
