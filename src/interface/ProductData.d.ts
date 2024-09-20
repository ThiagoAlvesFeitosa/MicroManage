export interface ProductData {
    id?: number;            // ID do produto
    nome: string | null;   // Nome do produto
    descricao: string | null; // Descrição do produto
    linkImagem: string | null; // Link da imagem do produto
    valor: number | null;  // Valor do produto
    quantidade: number | null; // Quantidade em estoque
}
