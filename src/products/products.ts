import { images } from "./images"

interface Type {
    content: string
}

export interface ProductType {
    id: number
    image: string
    type: Type[]
    title: string
    description: string
    price: number
    amount: number
}

export const products: ProductType[] = [
    {
        id: 1,
        image: images.expressoTradicional,
        type: [
            {
                content: "Tradicional"
            },
        ],
        title: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 9.90,
        amount: 0,
    },
    {
        id: 2,
        image: images.expressoAmericano,
        type: [
            {
                content: "Tradicional"
            },
        ],
        title: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9.90,
        amount: 0,
    },
    {
        id: 3,
        image: images.expressoCremoso,
        type: [
            {
                content: "Tradicional"
            },
        ],
        title: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 9.90,
        amount: 0,
    },
    {
        id: 4,
        image: images.cafeGelado,
        type: [
            {
                content: "Tradicional"
            },
            {
                content: "Gelado"
            },
        ],
        title: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 9.90,
        amount: 0,
    },
    {
        id: 5,
        image: images.cafeComLeite,
        type: [
            {
                content: "Tradicional"
            },
            {
                content: "Com leite"
            },
        ],
        title: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        price: 9.90,
        amount: 0,
    },
    {
        id: 6,
        image: images.latte,
        type: [
            {
                content: "Tradicional"
            },
            {
                content: "Com leite"
            },
        ],
        title: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        price: 9.90,
        amount: 0,
    },
    {
        id: 7,
        image: images.capuccino,
        type: [
            {
                content: "Tradicional"
            },
            {
                content: "Com leite"
            },
        ],
        title: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        price: 9.90,
        amount: 0,
    },
    {
        id: 8,
        image: images.macchiato,
        type: [
            {
                content: "Tradicional"
            },
            {
                content: "Com leite"
            },
        ],
        title: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        price: 9.90,
        amount: 0,
    },
    {
        id: 9,
        image: images.mochaccino,
        type: [
            {
                content: "Tradicional"
            },
            {
                content: "Com leite"
            },
        ],
        title: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        price: 9.90,
        amount: 0,
    },
    {
        id: 10,
        image: images.chocolateQuente,
        type: [
            {
                content: "Especial"
            },
            {
                content: "Com leite"
            },
        ],
        title: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        price: 9.90,
        amount: 0,
    },
    {
        id: 11,
        image: images.cubano,
        type: [
            {
                content: "Especial"
            },
            {
                content: "Gelado"
            },
            {
                content: "Alcoólico"
            },
        ],
        title: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        price: 9.90,
        amount: 0,
    },
    {
        id: 12,
        image: images.havaiano,
        type: [
            {
                content: "Especial"
            },
        ],
        title: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        price: 9.90,
        amount: 0,
    },
    {
        id: 13,
        image: images.arabe,
        type: [
            {
                content: "Especial"
            },
        ],
        title: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        price: 9.90,
        amount: 0,
    },
    {
        id: 14,
        image: images.irlandes,
        type: [
            {
                content: "Especial"
            },
            {
                content: "Alcoólico"
            },
        ],
        title: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        price: 9.90,
        amount: 0,
    },
]