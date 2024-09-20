


// src/components/Login/Login.jsx
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css'; 

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8085/api/v1/usuario/login", {
                email: email,
                senha: senha,
            }).then((res) => {
                console.log(res.data);
                if (res.data.message === "Email nao encontrado") {
                    alert("Email nao encontrado");
                } else if (res.data.message === "Login Success") {
                    // Salva o token no localStorage
                    localStorage.setItem('authToken', res.data.token);
                    navigate('/dashboard'); // Navega para o dashboard após o login
                } else {
                    alert("Email ou senha incorretos");
                }
            }, fail => {
                console.error(fail);
            });
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="background-container">
            <div className="container">
                <form onSubmit={login}>
                    <h1>Acesse o sistema</h1>
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
                    
                    <button type="submit">Login</button>
                    <div className="signup-link">
                        <p>
                            Não tem uma conta? <a href="/register">Registrar-se</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

