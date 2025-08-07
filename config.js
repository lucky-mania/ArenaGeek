// ===================================
// CONFIGURAÇÕES DA LOJA - ARENA GEEK
// ===================================

// Configuração do nome da loja (fácil de alterar)
const STORE_CONFIG = {
    name: "Arena Geek",
    whatsappNumber: "5511999999999", // Substitua pelo número real (código do país + DDD + número)
    whatsappMessage: "Olá! Gostaria de finalizar meu pedido da Arena Geek:",
    currency: "R$",
    email: "contato@arenageek.com",
    socialMedia: {
        instagram: "https://instagram.com/arenageek",
        facebook: "https://facebook.com/arenageek",
        twitter: "https://twitter.com/arenageek"
    }
};

// Base de dados dos produtos (fácil de gerenciar)
const PRODUCTS_DATABASE = [
    // CANECAS
    // Para alterar imagens: substitua as URLs abaixo pelas imagens desejadas
    {
        id: 1,
        name: "Caneca do luffy",
        category: "canecas",
        price: 29.90,
        description: "Caneca do Monkey D. Luffy com seu chapéu de palha icônico.",
        icon: "🍜",
        imageUrl: "images/canecaluffy.png", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 2,
        name: "Caneca dandadan",
        category: "canecas",
        price: 32.90,
        description: "Caneca temática de dandadan. Perfeita para fãs!",
        icon: "🐉",
        imageUrl: "images/canecadandadan.png", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 3,
        name: "Caneca de gravity falls",
        category: "canecas",
        price: 28.90,
        description: "Caneca de gravity falls.",
        icon: "👒",
        imageUrl: "images/canecagravity.png", // SUBSTITUA pela URL da imagem
        featured: true
    },

    // ACTION FIGURES
    {
        id: 4,
        name: "Luffy Gear 5",
        category: "action-figures",
        price: 89.90,
        description: " Luffy Gear 5 Ação Sol Deus Nika PVC Estatueta Estátua Modelo Colecionável-17 cm",
        icon: "👨‍🦲",
        imageUrl: "images/luffy.png", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 5,
        name: "Zoro",
        category: "action-figures",
        price: 95.90,
        description: "Figure do zoro de One Piece.",
        icon: "🧘‍♂️",
        imageUrl: "images/zoro.png", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 6,
        name: "Naruto Criança",
        category: "action-figures",
        price: 110.90,
        description: "Figure do Ichigo em modo Bankai com espada Tensa Zangetsu.",
        icon: "⚡",
        imageUrl: "images/narutokid.png", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 7,
        name: "Momo",
        category: "action-figures",
        price: 87.90,
        description: "Figure de Dandadan.",
        icon: "💪",
        imageUrl: "images/momo.png", // SUBSTITUA pela URL da imagem
        featured: true
    },
     {
        id: 8,
        name: "okarun",
        category: "action-figures",
        price: 87.90,
        description: "Figure de Dandadan.",
        icon: "💪",
        imageUrl: "images/okarun.png", // SUBSTITUA pela URL da imagem
        featured: true
    },
     {
        id: 9,
        name: "goku",
        category: "action-figures",
        price: 87.90,
        description: "Figure do Dragon Ball.",
        icon: "💪",
        imageUrl: "images/gokukid.png", // SUBSTITUA pela URL da imagem
        featured: true
    },

    // Exclusivos
    {
        id: 10,
        name: "quadro Gravity Falls",
        category: "roupas",
        price: 49.90,
        description: "Camiseta preta com o símbolo da organização Akatsuki de Naruto.",
        icon: "👕",
        imageUrl: "images/quadrogra.png", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 11,
        name: "Diario 3(Gravity Falls)",
        category: "roupas",
        price: 89.90,
        description: "diario da serie.",
        icon: "🧥",
        imageUrl: "images/diario3.png", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 12,
        name: "diario exclusivo de Bill(Gravity Falls)",
        category: "roupas",
        price: 45.90,
        description: "Camiseta com estampa das esferas do dragão brilhantes.",
        icon: "✨",
        imageUrl: "images/diario1.png", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 13,
        name: "Jaqueta Survey Corps",
        category: "roupas",
        price: 129.90,
        description: "Jaqueta verde militar inspirada no uniforme das Tropas de Exploração.",
        icon: "🧥",
        imageUrl: "https://via.placeholder.com/300x300/E74C3C/FFFFFF?text=Jaqueta+Survey", // SUBSTITUA pela URL da imagem
        featured: false
    },

    // ACESSÓRIOS
    {
        id: 14,
        name: "pulseira Pokemon",
        category: "acessorios",
        price: 15.90,
        description: "Chaveiro da Pokébola que abre e fecha, com LED interno.",
        icon: "🔴",
        imageUrl: "images/pulpoke.png", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 15,
        name: "Pôster Attack on Titan",
        category: "acessorios",
        price: 25.90,
        description: "Pôster de alta qualidade 60x90cm do anime Attack on Titan.",
        icon: "🖼️",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Poster+AOT", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 16,
        name: "Anel Akatsuki",
        category: "acessorios",
        price: 35.90,
        description: "Anel oficial da organização Akatsuki em metal envelhecido.",
        icon: "💍",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Anel+Akatsuki", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 17,
        name: "Mochila Pikachu",
        category: "acessorios",
        price: 79.90,
        description: "Mochila amarela do Pikachu com orelhas 3D e bolsos internos.",
        icon: "🎒",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Mochila+Pikachu", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 18,
        name: "Mousepad Anime",
        category: "acessorios",
        price: 22.90,
        description: "Mousepad gamer com estampa de vários animes populares.",
        icon: "🖱️",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Mousepad+Anime", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 19,
        name: "Adesivos Anime Pack",
        category: "acessorios",
        price: 12.90,
        description: "Pack com 50 adesivos de diversos animes para notebook/celular.",
        icon: "📱",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Adesivos+Pack", // SUBSTITUA pela URL da imagem
        featured: true
    }
];

// Configuração de categorias
const CATEGORIES_CONFIG = [
    {
        id: "canecas",
        name: "Canecas",
        icon: "fas fa-coffee",
        description: "Canecas temáticas dos seus animes favoritos"
    },
    {
        id: "action-figures",
        name: "Action Figures",
        icon: "fas fa-robot",
        description: "Figuras colecionáveis de alta qualidade"
    },
    {
        id: "roupas",
        name: "Roupas",
        icon: "fas fa-tshirt",
        description: "Camisetas e acessórios exclusivos"
    },
    {
        id: "acessorios",
        name: "Acessórios",
        icon: "fas fa-gem",
        description: "Chaveiros, pôsteres e muito mais"
    }
];

// Mensagens do sistema
const MESSAGES = {
    addedToCart: "Produto adicionado ao carrinho!",
    removedFromCart: "Produto removido do carrinho!",
    emptyCart: "Seu carrinho está vazio",
    cartEmpty: "Adicione alguns produtos ao carrinho para continuar",
    loadingProducts: "Carregando produtos...",
    noProductsFound: "Nenhum produto encontrado",
    whatsappError: "Erro ao abrir WhatsApp. Verifique se o aplicativo está instalado.",
    quantityError: "Quantidade deve ser maior que 0"
};

// Exportar configurações para uso global
window.STORE_CONFIG = STORE_CONFIG;
window.PRODUCTS_DATABASE = PRODUCTS_DATABASE;
window.CATEGORIES_CONFIG = CATEGORIES_CONFIG;
window.MESSAGES = MESSAGES;
