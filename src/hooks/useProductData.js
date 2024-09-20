import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Defina a URL da API
const API_URL = 'http://localhost:8085';

// Defina a estrutura esperada para os dados dos produtos
const defaultProductData = {
    valor: 0,            // Valor do produto
    nome: "",            // Nome do produto
    marca: "",           // Nome da marca
    codigoBarras: "",    // Código de barras
    linkImagem: "",      // Link da imagem do produto
    descricao: "",       // Descrição do produto
    quantidade: 0        // Quantidade em estoque
};

// Função para buscar os dados dos produtos
const fetchData = async () => {
    const response = await axios.get(`${API_URL}/api/v1/produtos`);

    return response.data;
};

// Função para garantir que os dados correspondam à estrutura esperada
const validateProductData = (data) => {
    return data.map(product => ({
        valor: product.valor !== null ? product.valor : defaultProductData.valor,
        nome: product.nome !== null ? product.nome : defaultProductData.nome,
        marca: product.marca !== null ? product.marca : defaultProductData.marca,
        codigoBarras: product.codigoBarras !== null ? product.codigoBarras : defaultProductData.codigoBarras,
        linkImagem: product.linkImagem !== null ? product.linkImagem : defaultProductData.linkImagem,
        descricao: product.descricao !== null ? product.descricao : defaultProductData.descricao,
        quantidade: product.quantidade !== null ? product.quantidade : defaultProductData.quantidade
    }));
};

// Hook personalizado para buscar os dados dos produtos
export function useProductData() {
    const query = useQuery({
        queryFn: async () => {
            const data = await fetchData();
            return validateProductData(data); // Valida e formata os dados
        },
        queryKey: ['product-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data // Acessa os dados da API
    };
}
