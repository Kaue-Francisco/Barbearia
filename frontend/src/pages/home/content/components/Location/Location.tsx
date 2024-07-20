export default function Location() {
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Localização</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14664.969300173181!2d-45.9039423!3d-23.2342674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a9fd55ba425%3A0x92afe780afb12be9!2sBarbearia%20cia%20do%20Bigode!5e0!3m2!1spt-BR!2sbr!4v1719187471765!5m2!1spt-BR!2sbr" 
            style={{ border: "0", width: "100%", maxWidth: "900px", height: "450px" }} 
            allowFullScreen={true} 
            loading="lazy" 
            className="rounded-lg shadow-lg sm:max-w-80" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}