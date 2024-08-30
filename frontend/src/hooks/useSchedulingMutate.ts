import { Scheduling, SchedulingResponse } from "@/interfaces/scheduling";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API = 'http://127.0.0.1:5000'

const submit = async (data: Scheduling) => {
    return await axios.post<SchedulingResponse>(API + '/send_schedule', data)
}

export function useSchedulingMutate() {
    const queryClient = useQueryClient()
    const mutate = useMutation(
        {
            mutationFn: submit,
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ['schedules']})
            },
            onError: (error: any) => {
                console.error(error)
            },
        }
    )
    return mutate
}
