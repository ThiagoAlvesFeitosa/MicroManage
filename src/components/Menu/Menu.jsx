// src/components/Menu/Menu.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Menu.css';
import Logo from '../../imgs/logo.png';
import { DadosMenu } from '../../Data/Data';
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Menu = () => {
    const [selected, setSelected] = useState(0);
    const [animating, setAnimating] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Atualiza o item selecionado com base na rota atual
    useEffect(() => {
        const currentPath = location.pathname;
        const selectedIndex = DadosMenu.findIndex(item => item.path === currentPath);
        if (selectedIndex !== -1) {
            setSelected(selectedIndex);
        }
    }, [location.pathname]);

    const handleNavigation = (path, index) => {
        setAnimating(true);  // Inicia a animação
        setSelected(index);

        // Remove a classe de animação após um tempo
        setTimeout(() => {
            navigate(path);
            setAnimating(false);
        }, 300);  // Tempo deve corresponder ao tempo da animação
    };

    const handleLogout = () => {
        // Remove o token de autenticação
        localStorage.removeItem('authToken');
        // Redireciona para a página de login
        navigate('/');
    };

    return (
        <div className={`Menu ${animating ? 'animating' : ''}`}>
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            {/* menu */}
            <div className='menu'>
                {DadosMenu.map((item, index) => {
                    return (
                        <div 
                            className={selected === index ? 'menuItem active' : 'menuItem'}
                            key={index}
                            onClick={() => handleNavigation(item.path, index)}
                        >
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
                {/* Botão de logout */}
                <div className="menuItem" onClick={handleLogout}>
                    <UilSignOutAlt />
                    <span>Sair</span>
                </div>
            </div>
        </div>
    );
}

export default Menu;
