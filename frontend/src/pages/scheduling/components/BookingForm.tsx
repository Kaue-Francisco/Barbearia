import React from 'react';

export default function BookingForm() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Marque seu Horário</h2>
            <input
                type="date"
                className="w-full rounded-lg border border-gray-300 p-4"
            />
            <div className="mt-4 grid grid-cols-3 gap-2">
                {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'].map(
                    (time) => (
                        <button
                            key={time}
                            className="border border-gray-300 px-4 py-2 text-sm"
                        >
                            {time}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
