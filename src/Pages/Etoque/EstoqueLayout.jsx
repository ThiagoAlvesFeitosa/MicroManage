import React, { useState } from "react";
import Card from "../../components/CardEstoque/CardEstoque";
import Menu from "../../components/Menu/Menu";
import { useProductData } from "../../hooks/useProductData";
import { useProductRemoveByName } from "../../hooks/useProductRemoveByName"; 
import './EstoqueLayout.css';
import { CreateModal } from "../../components/CreateModal/CreateModal";

const EstoqueLayout = () => {
    const { data, isLoading, isError } = useProductData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { mutate: removeProductByName } = useProductRemoveByName();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleRemoveProduct = () => {
        const nome = prompt("Digite o nome do produto que deseja remover:");
        if (nome) {
            removeProductByName(nome);
        }
    };

    return (
        <div className="App estoque-container">
            <div className="AppGlass">
                <Menu />
                <div className="estoque-content">
                    <div className="estoque-header">
                        <h1>Estoque</h1>
                        <div className="button-group">
                            {isModalOpen && <CreateModal closeModal={handleCloseModal} />}
                            <button className="btn" id="novo" onClick={handleOpenModal}>Novo</button>
                            <button className="btn" id="remover" onClick={handleRemoveProduct}>Remover Produto</button>
                        </div>
                    </div>
                    <br />
                    {isLoading && <div>Carregando...</div>}
                    {isError && <div>Erro ao carregar os dados.</div>}
                    {!isLoading && !isError && !data && <div>Nenhum produto encontrado.</div>}
                    {data && data.length > 0 && (
                        <div className="card-grid">
                            {data.map((productData) => (
                                <Card
                                    key={productData.id}
                                    id={productData.id} // Certifique-se de passar o id
                                    valor={productData.valor}
                                    nome={productData.nome}
                                    descricao={productData.descricao}
                                    linkImagem={productData.linkImagem}
                                    quantidade={productData.quantidade}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EstoqueLayout;
