import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useProductData } from "./useProductData";

const API_URL = 'http://localhost:8085';

const updateData = async ({ id, data }) => {
    console.log("Atualizando produto:", id, data); // Log para depuração
    const response = await axios.put(`${API_URL}/api/v1/produtos/${id}`, data);
    return response.data;
};



export function useProductUpdate() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateData,
        onSuccess: () => {
            queryClient.invalidateQueries(['product-data']);
        },
        onError: (error) => {
            console.error("Erro ao atualizar o produto:", error);
        },
    });
}
