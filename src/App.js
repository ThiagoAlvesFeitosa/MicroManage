// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute"; // Importe a ProtectedRoute
import EstoqueLayout from './Pages/Etoque/EstoqueLayout'
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        {/* Rota de Login e Registro */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rota protegida para o dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/estoque"
          element={
            <ProtectedRoute>
              <EstoqueLayout />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
