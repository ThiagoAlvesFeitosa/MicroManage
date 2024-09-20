import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'http://localhost:8085';

const deleteProductByName = async (nome) => {
    const response = await axios.delete(`${API_URL}/api/v1/produtos/nome/${nome}`);
    return response;
};

export function useProductRemoveByName() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteProductByName,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['product-data']);
        },
    });
}
