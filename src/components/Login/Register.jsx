import { useState } from "react";
import axios from "axios";
import './Login.css'; // Reaproveitando o mesmo CSS para manter a estilização similar

function Register() {
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8085/api/v1/usuario/save", {
                nomeUsuario: nomeUsuario,
                email: email,
                senha: senha,
            });
            alert("Usuário cadastrado com sucesso");
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="background-container">
            <div className="container">
                <form onSubmit={save}>
                    <h1>Registrar-se</h1>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Nome de usuário"
                            required
                            value={nomeUsuario}
                            onChange={(event) => setNomeUsuario(event.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="email"
                            placeholder="E-mail"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Senha"
                            required
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                        />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
