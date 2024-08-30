interface RegisterInputProps {
    type: string;
    id: string;
    placeholder: string;
}

export default function RegisterInput({id, type, placeholder}: RegisterInputProps) {
    return (
        <input id={id} type={type} placeholder={placeholder} 
        className=" h-10 mb-4 rounded-md text-[18px] pl-2 bg-gray-200"/>
    );
}