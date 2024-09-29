import React from 'react';
import { createPortal } from 'react-dom';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react'; // Import the X icon

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    username: string;
    onLogout: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, username, onLogout }) => {
    if (!isOpen) return null;

    return createPortal(
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
            <div className="fixed top-18 right-0 bg-white p-6 rounded-b-lg shadow-lg z-50 w-1/5" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">{username}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <Button className="mt-4 w-full" onClick={onLogout}>Sair</Button>
            </div>
        </>,
        document.body
    );
};

export default Modal;