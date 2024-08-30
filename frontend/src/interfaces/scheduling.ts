export interface Service {
    service_id: number;
    service_name: string;
}

export interface Scheduling {
    user_id: number;
    date: string;
    start_time: string;
    services: Service[];
}

export interface SchedulingResponse {
    data : Scheduling[];
}