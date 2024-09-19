import * as React from "react"
import Footer from '@/pages/Components/Footer/Footer'
import Navbar from "@/pages/Components/Navbar/Navbar"
import { format } from "date-fns"
import { Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import ServicesCards from "./Components/ServicesCards/ServicesCards"
import barberShopImage from "@/assets/background.png";
import { useSchedulingMutate } from "@/hooks/useSchedulingMutate"
import { useToast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"

const services = [
    { service_id: 0, service_name: 'Corte de Cabelo', description: 'de 30 a 60 minutos.', price: 30 },
    { service_id: 1, service_name: 'Sobrancelha', description: 'De 10 a 20 minutos.', price: 5 },
    { service_id: 2, service_name: 'Barba e Bigode', description: 'de 30 a 60 minutos.', price: 30 },
];

export default function Scheduling() {
    const today = new Date()
    const thirtyDaysLater = new Date(today)
    thirtyDaysLater.setDate(today.getDate() + 14)

    const { toast } = useToast()

    const [date, setDate] = React.useState<Date | undefined>(today)
    const [selectedTime, setSelectedTime] = React.useState<number>()
    const [selectedServices, setSelectedServices] = React.useState<number[]>([])
    const [id, setId] = React.useState<number>(0)

    const { mutate, isSuccess } = useSchedulingMutate()

    const timeSlots = [
        "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00",
        "17:00", "18:00", "19:00", "20:00"
    ]

    const disableDate = (date: Date) => {
        const isMonday = date.getDay() === 1
        const isSunday = date.getDay() === 0
        const isOutsideRange = date < today || date > thirtyDaysLater
        return isMonday || isOutsideRange || isSunday
    }

    const submit = () => {
        const schedulling_data = {
            user_id: id,
            date: format(date as Date, "yyyy-MM-dd"),
            start_time: `${format(date as Date, "yyyy-MM-dd")}T${selectedTime}:00`,
            services: selectedServices.map(() => { // Remove the unused variable
                const service = services.find(s => s.service_id);
                return {
                    service_id: service?.service_id || 0,
                    service_name: service?.service_name || ""
                };
            })
        };

        mutate(schedulling_data);
    };

    React.useEffect(() => {
        if (isSuccess) {
            toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
            })
        }
    }, [isSuccess])

    return (
        <main className="flex flex-col">
            <Navbar />
            <section className="w-full py-12 md:py-24" style={{ backgroundImage: `url(${barberShopImage})` }}>
                <div className="container max-w-4xl mx-auto p-6 space-y-6 bg-background rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Faça seu agendamento</h2>
                    
                    <div className="py-4">
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Selecione os serviços</h3>
                        <ServicesCards services={services} selectedServices={selectedServices} setSelectedServices={setSelectedServices} />
                    </div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Selecione a data</h3>
                    <div className="flex gap-4">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                            fromDate={today}
                            toDate={thirtyDaysLater}
                            disabled={disableDate}
                            initialFocus
                        />
                        <div className="grid grid-cols-4 gap-2 flex-1">
                            {timeSlots.map((time) => (
                                <Card
                                    key={time}
                                    className={`cursor-pointer hover:bg-accent ${selectedTime === parseInt(time) ? 'border-primary' : ''}`}
                                    onClick={() => setSelectedTime(parseInt(time))}
                                >
                                    <CardContent className="flex flex-col items-center justify-center h-full">
                                        <Clock className="mb-1 h-4 w-4" />
                                        <span className="text-sm font-medium">{time}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <Button className="m-auto w-full " disabled={!date || !selectedTime || selectedServices.length === 0} onClick={submit}>
                        Agendar
                    </Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}