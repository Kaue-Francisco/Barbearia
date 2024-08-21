export default function LocationSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Localização</h2>
                </div>
                <div className="mt-8 container" style={{height: '70vh'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14664.969300173181!2d-45.9039423!3d-23.2342674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a9fd55ba425%3A0x92afe780afb12be9!2sBarbearia%20cia%20do%20Bigode!5e0!3m2!1spt-BR!2sbr!4v1719187471765!5m2!1spt-BR!2sbr" className="w-full h-full" style={{ border: "0" }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}