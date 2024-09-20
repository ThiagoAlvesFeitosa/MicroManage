import React, { useState } from "react";
import { FaEdit } from "react-icons/fa"; // Ícone de lápis
import { useProductUpdate } from "../../hooks/useProductUpdate"; // Hook para atualização
import "./CardEstoque.css";

const Card = ({
    id, // Adicionando a prop id
    valor,
    nome,
    descricao,
    linkImagem,
    quantidade
}) => {
    const [isEditing, setIsEditing] = useState(false); // Controle do modo de edição
    const [editedNome, setEditedNome] = useState(nome);
    const [editedDescricao, setEditedDescricao] = useState(descricao);
    const [editedQuantidade, setEditedQuantidade] = useState(quantidade);
    const [editedValor, setEditedValor] = useState(valor);
    const { mutate: updateProduct } = useProductUpdate(); // Hook de atualização

    // Função para lidar com o modo de edição
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        console.log("ID no handleSave:", id); // Log para verificar o id
        const updatedProduct = {
            nome: editedNome,
            descricao: editedDescricao,
            quantidade: editedQuantidade,
            valor: editedValor,
        };
        updateProduct({ id, data: updatedProduct }); // Passando o id e os dados atualizados
        toggleEdit();
    };
    

    return (
        <div className={`card ${isEditing ? 'expanded' : ''}`}>
            <img src={linkImagem} alt={nome} />
            
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedNome}
                        onChange={(e) => setEditedNome(e.target.value)}
                    />
                    <input
                        type="number"
                        value={editedValor}
                        onChange={(e) => setEditedValor(e.target.value)}
                    />
                    <input
                        value={editedDescricao}
                        onChange={(e) => setEditedDescricao(e.target.value)}
                    />
                    <input
                        type="number"
                        value={editedQuantidade}
                        onChange={(e) => setEditedQuantidade(e.target.value)}
                    />
                    <button onClick={handleSave}>Salvar</button>
                </>
            ) : (
                <>
                    <h2>{nome}</h2>
                    <p><b>Valor:</b> R${valor}</p>
                    <p><b>Descrição:</b> {descricao}</p>
                    <p><b>Quantidade em Estoque:</b> {quantidade || 0}</p>
                </>
            )}

            {/* Ícone de edição */}
            <FaEdit className="edit-icon" onClick={toggleEdit} />
        </div>
    );
};

export default Card;
