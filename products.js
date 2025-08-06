// Products Database
const products = [
    // Cartas Pokémon
    {
        id: 1,
        name: "Booster Pack Pokémon TCG",
        category: "pokemon",
        price: 15.99,
        description: "Pacote com 11 cartas Pokémon Trading Card Game da série mais recente",
        icon: "fas fa-star",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 2,
        name: "Carta Charizard Holográfica",
        category: "pokemon",
        price: 89.99,
        description: "Carta rara holográfica do Charizard em perfeito estado",
        icon: "fas fa-fire",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 3,
        name: "Deck Pokémon Pikachu",
        category: "pokemon",
        price: 45.99,
        description: "Deck completo temático do Pikachu para iniciantes",
        icon: "fas fa-bolt",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 4,
        name: "Elite Trainer Box",
        category: "pokemon",
        price: 129.99,
        description: "Caixa elite com boosters, dados, marcadores de dano e playmat",
        icon: "fas fa-box",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },

    // Action Figures
    {
        id: 5,
        name: "Action Figure Goku Super Saiyajin",
        category: "figures",
        price: 79.99,
        description: "Figure articulado do Goku em transformação Super Saiyajin",
        icon: "fas fa-dragon",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 6,
        name: "Naruto Uzumaki Figure",
        category: "figures",
        price: 65.99,
        description: "Action figure detalhado do Naruto com kunais inclusos",
        icon: "fas fa-ninja",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 7,
        name: "Luffy Gear 4 Figure",
        category: "figures",
        price: 89.99,
        description: "Figure premium do Monkey D. Luffy em modo Gear 4",
        icon: "fas fa-fist-raised",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 8,
        name: "Vegeta Final Flash Figure",
        category: "figures",
        price: 85.99,
        description: "Figure do Príncipe Vegeta executando o Final Flash",
        icon: "fas fa-explosion",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },

    // Canecas
    {
        id: 9,
        name: "Caneca Dragon Ball Z",
        category: "canecas",
        price: 24.99,
        description: "Caneca térmica com estampa dos personagens de Dragon Ball Z",
        icon: "fas fa-mug-hot",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 10,
        name: "Caneca One Piece Chapéu de Palha",
        category: "canecas",
        price: 22.99,
        description: "Caneca personalizada com o símbolo dos Piratas do Chapéu de Palha",
        icon: "fas fa-coffee",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 11,
        name: "Caneca Naruto Hokage",
        category: "canecas",
        price: 26.99,
        description: "Caneca exclusiva com o símbolo da Vila da Folha",
        icon: "fas fa-leaf",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 12,
        name: "Caneca Attack on Titan",
        category: "canecas",
        price: 28.99,
        description: "Caneca com design dos Titãs e Tropa de Exploração",
        icon: "fas fa-shield-alt",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },

    // Chaveiros
    {
        id: 13,
        name: "Chaveiro Pokébola",
        category: "chaveiros",
        price: 12.99,
        description: "Chaveiro em formato de Pokébola com LED",
        icon: "fas fa-circle",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 14,
        name: "Chaveiro Kunai Naruto",
        category: "chaveiros",
        price: 15.99,
        description: "Réplica em miniatura da kunai do Naruto",
        icon: "fas fa-dagger",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 15,
        name: "Chaveiro Espada Kirito SAO",
        category: "chaveiros",
        price: 18.99,
        description: "Mini espada Elucidator do Kirito de Sword Art Online",
        icon: "fas fa-sword",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 16,
        name: "Chaveiro Akatsuki",
        category: "chaveiros",
        price: 13.99,
        description: "Chaveiro com o símbolo da organização Akatsuki",
        icon: "fas fa-cloud",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },

    // Pulseiras
    {
        id: 17,
        name: "Pulseira Konoha",
        category: "pulseiras",
        price: 19.99,
        description: "Pulseira de couro com símbolo da Vila da Folha",
        icon: "fas fa-band-aid",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 18,
        name: "Pulseira Dragon Ball",
        category: "pulseiras",
        price: 22.99,
        description: "Pulseira com as 7 esferas do dragão",
        icon: "fas fa-gem",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 19,
        name: "Pulseira One Piece Jolly Roger",
        category: "pulseiras",
        price: 21.99,
        description: "Pulseira com bandeira pirata dos Chapéus de Palha",
        icon: "fas fa-skull-crossbones",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    },
    {
        id: 20,
        name: "Pulseira Attack on Titan",
        category: "pulseiras",
        price: 24.99,
        description: "Pulseira metálica com símbolo das Asas da Liberdade",
        icon: "fas fa-wings",
        image: null // Placeholder para imagem - adicione a URL da imagem aqui
    }
];

// Pagination settings
let currentPage = 1;
const productsPerPage = 8;
let currentProducts = products;

// Initialize products display
function initProducts() {
    currentProducts = products;
    displayProducts(getProductsForPage(1));
    updatePaginationControls();
}

// Get products for specific page
function getProductsForPage(page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return currentProducts.slice(startIndex, endIndex);
}

// Display products in grid
function displayProducts(productsToShow, append = false) {
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsToShow || productsToShow.length === 0) {
        if (!append) {
            productsGrid.innerHTML = '<p style="text-align: center; color: white; grid-column: 1/-1;">Nenhum produto encontrado.</p>';
        }
        return;
    }

    const productsHTML = productsToShow.map(product => `
        <div class="product-card fade-in" data-category="${product.category}">
            <div class="product-image">
                ${product.image ? 
                    `<img src="${product.image}" alt="${product.name}" loading="lazy">` : 
                    `<div class="product-placeholder">
                        <i class="${product.icon}"></i>
                        <span>Imagem em breve</span>
                    </div>`
                }
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i>
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `).join('');

    if (append) {
        productsGrid.innerHTML += productsHTML;
    } else {
        productsGrid.innerHTML = productsHTML;
    }

    // Trigger animation for new cards
    setTimeout(() => {
        const allCards = document.querySelectorAll('.product-card');
        const newCards = append ? 
            Array.from(allCards).slice(-productsToShow.length) : 
            Array.from(allCards);
        
        newCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }, 50);
}

// Update pagination controls
function updatePaginationControls() {
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);
    const paginationContainer = document.getElementById('pagination-controls');
    
    if (!paginationContainer) return;
    
    if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        return;
    }
    
    paginationContainer.style.display = 'flex';
    
    // Show "Ver Mais" button if there are more products
    if (currentPage < totalPages) {
        paginationContainer.innerHTML = `
            <button class="load-more-btn" onclick="loadMoreProducts()">
                <i class="fas fa-plus"></i>
                Ver Mais Produtos
            </button>
        `;
    } else {
        paginationContainer.innerHTML = `
            <button class="show-less-btn" onclick="showLessProducts()">
                <i class="fas fa-minus"></i>
                Mostrar Menos
            </button>
        `;
    }
}

// Load more products
function loadMoreProducts() {
    currentPage++;
    const newProducts = getProductsForPage(currentPage);
    displayProducts(newProducts, true);
    updatePaginationControls();
}

// Show less products (reset to first page)
function showLessProducts() {
    currentPage = 1;
    displayProducts(getProductsForPage(1));
    updatePaginationControls();
    
    // Scroll to products section
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

// Filter products by category
function filterProducts(category) {
    // Update active filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Reset pagination
    currentPage = 1;

    // Filter and display products
    if (category === 'all') {
        currentProducts = products;
    } else {
        currentProducts = products.filter(product => product.category === category);
    }
    
    displayProducts(getProductsForPage(1));
    updatePaginationControls();

    // Smooth scroll to products if not visible
    const productsSection = document.getElementById('produtos');
    const rect = productsSection.getBoundingClientRect();
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show category from hero section
function showCategory(category) {
    // Navigate to products section
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
    
    // Wait for scroll to complete, then filter
    setTimeout(() => {
        filterProducts(category);
    }, 500);
}

// Get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initProducts();
});
