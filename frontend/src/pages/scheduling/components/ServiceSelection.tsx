import React, { useState } from 'react';

export default function ServiceSelection() {
    const [services, setServices] = useState({
        cabelo: false,
        barba: false,
        sombrancelha: false,
    });

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setServices((prevServices) => ({
            ...prevServices,
            [name]: checked,
        }));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">Selecione os Serviços</h2>
            <div className="grid gap-4">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name="cabelo"
                        checked={services.cabelo}
                        onChange={handleCheckboxChange}
                        className="form-checkbox h-5 w-5 text-primary mr-2"
                    />
                    <span className="text-lg">Cabelo</span>
                </label>
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name="barba"
                        checked={services.barba}
                        onChange={handleCheckboxChange}
                        className="form-checkbox h-5 w-5 text-primary mr-2"
                    />
                    <span className="text-lg">Barba</span>
                </label>
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name="sombrancelha"
                        checked={services.sombrancelha}
                        onChange={handleCheckboxChange}
                        className="form-checkbox h-5 w-5 text-primary mr-2"
                    />
                    <span className="text-lg">Sombrancelha</span>
                </label>
            </div>
        </div>
    );
}
