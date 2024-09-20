import React, { useEffect, useState } from "react";
import { useProductDataMutate } from "../../hooks/UseProductDataMutate";
import './Modal.css'

const Input = ({ label, value, updateValue }) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    );
};

export function CreateModal({ closeModal }) {
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState();
    const [linkImagem, setLinkImagem] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState();
    const { mutate, isSuccess, isLoading } = useProductDataMutate();

    const submit = () => {
        const productData = {
            nome,
            descricao,
            linkImagem,
            valor,
            quantidade,
        };
        mutate(productData);
    };

    useEffect(() => {
        if (!isSuccess) return;
        closeModal();
    }, [isSuccess]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastro de um novo produto.</h2>
                <form action="input-container">
                    <Input label="Nome" value={nome} updateValue={setNome} />
                    <Input label="Valor" value={valor} updateValue={setValor} />
                    <Input label="Link da Imagem" value={linkImagem} updateValue={setLinkImagem} />
                    <Input label="Descrição" value={descricao} updateValue={setDescricao} />
                    <Input label="Quantidade" value={quantidade} updateValue={setQuantidade} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'Postando...' : 'Postar'}
                </button>
            </div>
        </div>
    );
}
