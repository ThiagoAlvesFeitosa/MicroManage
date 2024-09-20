// src/Data/Data.js
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare,
} from "@iconscout/react-unicons";

// Dados Menu
export const DadosMenu = [
    {
        icon: UilEstate,
        heading: "Dashboard",
        path: '/dashboard',  // Adicionando o caminho
    },
    {
        icon: UilClipboardAlt,
        heading: "Pedidos",
        path: '/pedidos',  // Adicionando o caminho
    },
    {
        icon: UilUsersAlt,
        heading: "Clientes",
        path: '/clientes',  // Adicionando o caminho
    },
    {
        icon: UilPackage,
        heading: "Estoque",
        path: '/estoque',  // Adicionando o caminho
    },
    {
        icon: UilChart,
        heading: "Relatorios",
        path: '/relatorios',  // Adicionando o caminho
    },
]

// Dados Card
export const DadosCard = [
    {
        title: "Vendas",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "$$,$$$",
        png: UilUsdSquare,
        series: [
            {
                name: "Vendas",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Receita",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "$$,$$$",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Receita",
                data: [10, 80, 30, 90, 100, 109, 80],
            },
        ],
    },
    {
        title: "Gastos",
        color: {
            backGround:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "$$,$$$",
        png: UilClipboardAlt,
        series: [
            {
                name: "Gastos",
                data: [10, 45, 30, 70, 50, 109, 60],
            },
        ],
    },
]
