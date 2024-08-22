interface RegisterInputProps {
    type: string;
    id: string;
}

export default function RegisterInput({id, type}: RegisterInputProps) {
    return (
        <input id={id} type={type} className="w-full h-10 mb-3 rounded-md text-[20px] pl-2"/>
    );
}