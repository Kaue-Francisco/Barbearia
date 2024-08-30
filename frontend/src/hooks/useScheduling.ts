// fetch data using react query
import { SchedulingResponse } from '@/interfaces/scheduling'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'

const fetchSchedules = async (): AxiosPromise<SchedulingResponse> => {
    const data = await axios.get<SchedulingResponse>('/api/schedules')
    return data
}

export default function useScheduling() {
    const query = useQuery({ queryKey: ['schedules'], queryFn: fetchSchedules })

    return {
        ...query,
        data: query.data?.data
    }
}
