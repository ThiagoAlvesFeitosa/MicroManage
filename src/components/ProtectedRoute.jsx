// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

// Componente de Rota Protegida
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('authToken'); // Verifica se há um token armazenado

    if (!isAuthenticated) {
        // Se o usuário não está autenticado, redireciona para o login
        return <Navigate to="/" />;
    }

    // Se estiver autenticado, renderiza o componente filho
    return children;
};

export default ProtectedRoute;
