import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'http://localhost:8085';

const postData = async (data) => {
    const response = await axios.post(API_URL + '/api/v1/produtos', data);
    return response;
};

export function useProductDataMutate() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['product-data']);
        },
    });
}
