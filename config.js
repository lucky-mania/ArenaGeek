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
        name: "Caneca Naruto Hokage",
        category: "canecas",
        price: 29.90,
        description: "Caneca exclusiva do Naruto com design do símbolo Hokage. Material cerâmica de alta qualidade.",
        icon: "🍜",
        imageUrl: "images/arena-geek-logo.png", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 2,
        name: "Caneca Dragon Ball Z",
        category: "canecas",
        price: 32.90,
        description: "Caneca temática Dragon Ball Z com as esferas do dragão. Perfeita para fãs!",
        icon: "🐉",
        imageUrl: "https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Caneca+DBZ", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 3,
        name: "Caneca One Piece Luffy",
        category: "canecas",
        price: 28.90,
        description: "Caneca do Monkey D. Luffy com seu chapéu de palha icônico.",
        icon: "👒",
        imageUrl: "https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Caneca+Luffy", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 4,
        name: "Caneca Attack on Titan",
        category: "canecas",
        price: 31.90,
        description: "Caneca com o símbolo das Tropas de Exploração de Attack on Titan.",
        icon: "⚔️",
        imageUrl: "https://via.placeholder.com/300x300/FF6B35/FFFFFF?text=Caneca+AOT", // SUBSTITUA pela URL da imagem
        featured: false
    },

    // ACTION FIGURES
    {
        id: 5,
        name: "Action Figure Goku SSJ",
        category: "action-figures",
        price: 89.90,
        description: "Figure articulado do Goku Super Saiyajin com acessórios. Altura: 15cm.",
        icon: "👨‍🦲",
        imageUrl: "https://via.placeholder.com/300x300/4A90E2/FFFFFF?text=Goku+SSJ", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 6,
        name: "Action Figure Naruto Sage Mode",
        category: "action-figures",
        price: 95.90,
        description: "Figure do Naruto no Modo Sábio dos Sapos com base especial.",
        icon: "🧘‍♂️",
        imageUrl: "https://via.placeholder.com/300x300/4A90E2/FFFFFF?text=Naruto+Sage", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 7,
        name: "Action Figure Ichigo Bankai",
        category: "action-figures",
        price: 110.90,
        description: "Figure do Ichigo em modo Bankai com espada Tensa Zangetsu.",
        icon: "⚡",
        imageUrl: "https://via.placeholder.com/300x300/4A90E2/FFFFFF?text=Ichigo+Bankai", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 8,
        name: "Action Figure All Might",
        category: "action-figures",
        price: 87.90,
        description: "Figure do All Might de My Hero Academia em pose heroica.",
        icon: "💪",
        imageUrl: "https://via.placeholder.com/300x300/4A90E2/FFFFFF?text=All+Might", // SUBSTITUA pela URL da imagem
        featured: true
    },

    // ROUPAS
    {
        id: 9,
        name: "Camiseta Akatsuki",
        category: "roupas",
        price: 49.90,
        description: "Camiseta preta com o símbolo da organização Akatsuki de Naruto.",
        icon: "👕",
        imageUrl: "https://via.placeholder.com/300x300/E74C3C/FFFFFF?text=Camiseta+Akatsuki", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 10,
        name: "Moletom Konoha",
        category: "roupas",
        price: 89.90,
        description: "Moletom com capuz com o símbolo da Vila da Folha.",
        icon: "🧥",
        imageUrl: "https://via.placeholder.com/300x300/E74C3C/FFFFFF?text=Moletom+Konoha", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 11,
        name: "Camiseta Dragon Ball",
        category: "roupas",
        price: 45.90,
        description: "Camiseta com estampa das esferas do dragão brilhantes.",
        icon: "✨",
        imageUrl: "https://via.placeholder.com/300x300/E74C3C/FFFFFF?text=Camiseta+Dragon+Ball", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 12,
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
        id: 13,
        name: "Chaveiro Pokébola",
        category: "acessorios",
        price: 15.90,
        description: "Chaveiro da Pokébola que abre e fecha, com LED interno.",
        icon: "🔴",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Chaveiro+Pokebola", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 14,
        name: "Pôster Attack on Titan",
        category: "acessorios",
        price: 25.90,
        description: "Pôster de alta qualidade 60x90cm do anime Attack on Titan.",
        icon: "🖼️",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Poster+AOT", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 15,
        name: "Anel Akatsuki",
        category: "acessorios",
        price: 35.90,
        description: "Anel oficial da organização Akatsuki em metal envelhecido.",
        icon: "💍",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Anel+Akatsuki", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 16,
        name: "Mochila Pikachu",
        category: "acessorios",
        price: 79.90,
        description: "Mochila amarela do Pikachu com orelhas 3D e bolsos internos.",
        icon: "🎒",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Mochila+Pikachu", // SUBSTITUA pela URL da imagem
        featured: true
    },
    {
        id: 17,
        name: "Mousepad Anime",
        category: "acessorios",
        price: 22.90,
        description: "Mousepad gamer com estampa de vários animes populares.",
        icon: "🖱️",
        imageUrl: "https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=Mousepad+Anime", // SUBSTITUA pela URL da imagem
        featured: false
    },
    {
        id: 18,
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
