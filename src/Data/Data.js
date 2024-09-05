// Menu imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare,
} from "@iconscout/react-unicons"


// Dados Menu
export const DadosMenu = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Pedidos",
    },
    {
        icon: UilUsersAlt,
        heading: "Clientes",
    },
    {
        icon: UilPackage,
        heading: "Estoque",
    },
    {
        icon: UilChart,
        heading: "Relatorios",
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


