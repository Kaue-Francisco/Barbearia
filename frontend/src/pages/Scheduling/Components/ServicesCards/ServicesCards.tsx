import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface ServicesCardsProps {
    services: {
        service_id: number;
        service_name: string;
        description: string;
        price: number;
    }[];
    selectedServices: number[];
    setSelectedServices: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ServicesCards({ services, selectedServices, setSelectedServices }: ServicesCardsProps) {
    const handleSelectService = useCallback((serviceId: number) => {
        setSelectedServices(prev =>
            prev.includes(serviceId)
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
    }, [setSelectedServices]);

    const formatReais = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Card key={service.service_id}>
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id={`service-${service.service_id}`}
                                    checked={selectedServices.includes(service.service_id)}
                                    onCheckedChange={() => handleSelectService(service.service_id)}
                                />
                                <label htmlFor={`service-${service.service_id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    <CardTitle>{service.service_name}</CardTitle>
                                </label>
                            </div>
                            <CardDescription>{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">{formatReais.format(service.price)}</p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                className="w-full"
                                variant={selectedServices.includes(service.service_id) ? "default" : "outline"}
                                onClick={() => handleSelectService(service.service_id)}
                            >
                                {selectedServices.includes(service.service_id) ? 'Selecionado' : 'Selecione'}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}