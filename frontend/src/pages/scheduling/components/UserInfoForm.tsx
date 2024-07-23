import React from 'react';

export default function UserInfoForm() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Suas Informações</h2>
            <form className="grid gap-4">
                <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                        Nome
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Digite seu nome"
                        className="w-full rounded-lg border border-gray-300 p-2"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="teste@email.com"
                        className="w-full rounded-lg border border-gray-300 p-2"
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                        Telefone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="12 34567-8901"
                        className="w-full rounded-lg border border-gray-300 p-2"
                    />
                </div>
                <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg">
                    Book Appointment
                </button>
            </form>
        </div>
    );
}
