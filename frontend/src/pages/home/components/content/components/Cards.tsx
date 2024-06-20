import corteCabelo from '../../../../../images/corte_cabelo.jpg';
import barbeariaImage from '../../../../../images/barbearia.jpg';
import GradualSpacing from '../../../components/animation/gradualSpacing';

export default function Cards() {
    return (
        <div>
            <div className="container flex flex-col items-center gap-4 px-4 py-6 md:gap-8 md:px-6">
                <div className="grid grid-cols-1 items-center gap-0 md:grid-cols-2 md:gap-4">
                    <div className="flex items-center justify-center order-1 md:order-0">
                        <img
                        alt="Photo"
                        className="rounded-lg object-cover shadow-xl"
                        height="300"
                        src={corteCabelo}
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                            filter: "brightness(60%)"
                        }}
                        width="480"
                        />
                    </div>
                    <div className="flex flex-col items-end justify-self-end space-y-4 md:w-3/4" style={{ textAlign: 'right' }}>
                        <GradualSpacing
                        text="Cortes"
                        duration={0.7}
                        delayMultiple={0.04}
                        framerProps={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="text-3xl font-bold tracking-tighter sm:text-4xl"
                        />
                        <GradualSpacing
                        text="A Companhia do Bigode é o lugar certo para cortes de cabelo e barba! Atendemos apenas com agendamento, e você pode relaxar tomando uma cervejinha enquanto espera o seu horário!"
                        duration={0.7}
                        delayMultiple={0.04}
                        framerProps={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="text-lg text-gray-900 md:text-xl/relaxed"
                        />
                    </div>
                    </div>
                </div>

                <div className="container flex flex-col items-center gap-4 px-4 py-6 md:gap-8 md:px-6">
                    <div className="grid grid-cols-1 items-center gap-0 md:grid-cols-2 md:gap-4">
                        <div className="flex flex-col items-start justify-self-start space-y-4 md:w-3/4 md:order-2" style={{ textAlign: 'left' }}>
                        <GradualSpacing
                        text="Cortes"
                        duration={0.7}
                        delayMultiple={0.04}
                        framerProps={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="text-3xl font-bold tracking-tighter sm:text-4xl"
                        />
                        <GradualSpacing
                        text="A Companhia do Bigode é o lugar certo para cortes de cabelo e barba! Atendemos apenas com agendamento, e você pode relaxar tomando uma cervejinha enquanto espera o seu horário!"
                        duration={0.7}
                        delayMultiple={0.04}
                        framerProps={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="text-lg text-gray-900 md:text-xl/relaxed"
                        />
                        </div>
                        <div className="flex items-center justify-center order-1 md:order-0">
                            <img
                                alt="Photo"
                                className="rounded-lg object-cover shadow-xl"
                                height="400"
                                src={barbeariaImage}
                                style={{
                                    aspectRatio: "400/300",
                                    objectFit: "cover",
                                    filter: "brightness(60%)"
                                }}
                                width="480"
                            />
                        </div>
                    </div>
                </div>
       </div>
    )
}