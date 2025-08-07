// ===================================
// ARENA GEEK - JAVASCRIPT PRINCIPAL
// ===================================

// Estado global da aplicação
let cart = JSON.parse(localStorage.getItem('arenaGeekCart')) || [];
let currentFilter = 'all';
let isCartOpen = false;

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Função principal de inicialização
function initializeApp() {
    setupEventListeners();
    loadProducts();
    updateCartUI();
    setupScrollEffects();
    setupMobileMenu();
    setupSearch();
    animateElements();
}

// ===================================
// EVENT LISTENERS
// ===================================

function setupEventListeners() {
    // Filtros de categoria
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            handleCategoryFilter(this);
        });
    });

    // Categoria cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProductsByCategory(category);
            scrollToProducts();
        });
    });

    // Busca
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Scroll suave para seções
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Fechar modal ao clicar fora
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeProductModal();
        }
    });

    // Tecla ESC para fechar modais
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
            if (isCartOpen) toggleCart();
        }
    });
}

// ===================================
// CARREGAMENTO DE PRODUTOS
// ===================================

function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    // Mostrar loading
    productsGrid.innerHTML = '<div class="loading-products">Carregando produtos...</div>';

    // Simular delay de carregamento para melhor UX
    setTimeout(() => {
        displayProducts(PRODUCTS_DATABASE);
    }, 500);
}

function displayProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <i class="fas fa-search"></i>
                <p>${MESSAGES.noProductsFound}</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Adicionar animação aos produtos
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }, 100);
}

function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <!-- 
                ================================
                IMAGEM DO PRODUTO - URL CUSTOMIZÁVEL
                ================================
                Para alterar as imagens dos produtos:
                1. Vá ao arquivo config.js
                2. Encontre o produto desejado
                3. Substitua a URL no campo "imageUrl" pela URL da sua imagem
                4. A imagem será automaticamente exibida no site
                ================================
                -->
                <img src="${product.imageUrl || 'https://via.placeholder.com/300x300/667eea/FFFFFF?text=Produto'}" 
                     alt="${product.name}" 
                     class="product-img"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span class="product-emoji" style="display: none;">${product.icon}</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${STORE_CONFIG.currency} ${product.price.toFixed(2).replace('.', ',')}</div>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="decreaseQuantity(${product.id})">-</button>
                        <input type="number" class="quantity-input" id="quantity-${product.id}" value="1" min="1" max="99">
                        <button class="quantity-btn" onclick="increaseQuantity(${product.id})">+</button>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i>
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ===================================
// SISTEMA DE FILTROS
// ===================================

function handleCategoryFilter(button) {
    // Remover classe active de todos os botões
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Adicionar classe active ao botão clicado
    button.classList.add('active');
    
    // Obter categoria do filtro
    const filter = button.dataset.filter;
    currentFilter = filter;
    
    // Filtrar produtos
    filterProducts(filter);
}

function filterProducts(category) {
    let filteredProducts;
    
    if (category === 'all') {
        filteredProducts = PRODUCTS_DATABASE;
    } else {
        filteredProducts = PRODUCTS_DATABASE.filter(product => product.category === category);
    }
    
    displayProducts(filteredProducts);
}

function filterProductsByCategory(category) {
    // Atualizar botão ativo
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
    
    currentFilter = category;
    filterProducts(category);
}

// ===================================
// SISTEMA DE BUSCA
// ===================================

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    let filteredProducts = PRODUCTS_DATABASE;
    
    // Aplicar filtro de categoria se ativo
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
    }
    
    // Aplicar busca por nome e descrição
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
}

// ===================================
// CONTROLE DE QUANTIDADE
// ===================================

function increaseQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < 99) {
            quantityInput.value = currentValue + 1;
        }
    }
}

function decreaseQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    }
}

// ===================================
// CARRINHO DE COMPRAS
// ===================================

function addToCart(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) return;

    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    if (quantity <= 0) {
        showNotification(MESSAGES.quantityError, 'error');
        return;
    }

    // Verificar se produto já existe no carrinho
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    // Salvar no localStorage
    localStorage.setItem('arenaGeekCart', JSON.stringify(cart));
    
    // Atualizar UI
    updateCartUI();
    showNotification(MESSAGES.addedToCart, 'success');
    
    // Animação no botão
    const button = event.target.closest('.add-to-cart-btn');
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }

    // Reset quantity input
    if (quantityInput) {
        quantityInput.value = 1;
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('arenaGeekCart', JSON.stringify(cart));
    updateCartUI();
    showNotification(MESSAGES.removedFromCart, 'info');
}

function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        localStorage.setItem('arenaGeekCart', JSON.stringify(cart));
        updateCartUI();
    }
}

function clearCart() {
    cart = [];
    localStorage.setItem('arenaGeekCart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    updateCartCount();
    updateCartItems();
    updateCartTotal();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Animação no contador
        if (totalItems > 0) {
            cartCount.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }
    }
}

function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>${MESSAGES.emptyCart}</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">${MESSAGES.cartEmpty}</p>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                ${item.icon}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${STORE_CONFIG.currency} ${item.price.toFixed(2).replace('.', ',')}</div>
                <div class="cart-item-quantity">Qtd: ${item.quantity}</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remover item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function updateCartTotal() {
    const totalAmount = document.getElementById('total-amount');
    if (totalAmount) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalAmount.textContent = `${STORE_CONFIG.currency} ${total.toFixed(2).replace('.', ',')}`;
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (!cartSidebar || !cartOverlay) return;

    isCartOpen = !isCartOpen;
    
    if (isCartOpen) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ===================================
// INTEGRAÇÃO WHATSAPP
// ===================================

function sendToWhatsApp() {
    if (cart.length === 0) {
        showNotification(MESSAGES.cartEmpty, 'warning');
        return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    try {
        window.open(whatsappUrl, '_blank');
        
        // Opcional: limpar carrinho após envio
        // clearCart();
        // toggleCart();
        
        showNotification('Redirecionando para WhatsApp...', 'success');
    } catch (error) {
        showNotification(MESSAGES.whatsappError, 'error');
        console.error('Erro ao abrir WhatsApp:', error);
    }
}

function generateWhatsAppMessage() {
    let message = `${STORE_CONFIG.whatsappMessage}\n\n`;
    
    message += `📋 *PEDIDO - ${STORE_CONFIG.name}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   💰 ${STORE_CONFIG.currency} ${item.price.toFixed(2).replace('.', ',')}\n`;
        message += `   📦 Quantidade: ${item.quantity}\n`;
        message += `   💵 Subtotal: ${STORE_CONFIG.currency} ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *TOTAL: ${STORE_CONFIG.currency} ${total.toFixed(2).replace('.', ',')}*\n\n`;
    
    message += `📞 Aguardo confirmação do pedido!\n`;
    message += `🚚 Gostaria de informações sobre entrega.`;
    
    return message;
}

// ===================================
// NAVEGAÇÃO E SCROLL
// ===================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function scrollToProducts() {
    scrollToSection('products');
}

function setupScrollEffects() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header hide/show effect
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Removido o efeito parallax da hero section
        // para evitar que ela "siga" o usuário ao rolar a página
    });
}

// ===================================
// MENU MOBILE
// ===================================

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Trocar ícone
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Fechar menu ao clicar em link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
}

// ===================================
// MODAL DE PRODUTO
// ===================================

function openProductModal(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) return;

    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    
    if (!modalOverlay || !modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">
                <img src="${product.imageUrl || 'https://via.placeholder.com/400x400/667eea/FFFFFF?text=Produto'}" 
                     alt="${product.name}" 
                     class="modal-product-img"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span class="modal-product-emoji" style="display: none;">${product.icon}</span>
            </div>
            <div class="modal-product-info">
                <h2>${product.name}</h2>
                <p class="modal-product-description">${product.description}</p>
                <div class="modal-product-price">${STORE_CONFIG.currency} ${product.price.toFixed(2).replace('.', ',')}</div>
                <div class="modal-product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="decreaseQuantity('modal-${product.id}')">-</button>
                        <input type="number" class="quantity-input" id="quantity-modal-${product.id}" value="1" min="1" max="99">
                        <button class="quantity-btn" onclick="increaseQuantity('modal-${product.id}')">+</button>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCartFromModal(${product.id})">
                        <i class="fas fa-cart-plus"></i>
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function addToCartFromModal(productId) {
    const quantityInput = document.getElementById(`quantity-modal-${productId}`);
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) return;

    // Simular o evento para usar a função principal
    const mockEvent = {
        target: quantityInput
    };
    
    // Criar input temporário para compatibilidade
    const tempInput = document.createElement('input');
    tempInput.id = `quantity-${productId}`;
    tempInput.value = quantity;
    document.body.appendChild(tempInput);
    
    addToCart(productId);
    
    // Remover input temporário
    document.body.removeChild(tempInput);
    
    closeProductModal();
}

// ===================================
// SISTEMA DE NOTIFICAÇÕES
// ===================================

function showNotification(message, type = 'info') {
    // Remover notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;

    // Estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animação de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        warning: '#f39c12',
        info: '#3498db'
    };
    return colors[type] || '#3498db';
}

// ===================================
// ANIMAÇÕES E EFEITOS
// ===================================

function animateElements() {
    // Intersection Observer para animações
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos que devem ser animados
    document.querySelectorAll('.category-card, .product-card, .section-title').forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// UTILITÁRIOS
// ===================================

function formatPrice(price) {
    return `${STORE_CONFIG.currency} ${price.toFixed(2).replace('.', ',')}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced search
const debouncedSearch = debounce(handleSearch, 300);

// ===================================
// SISTEMA DE BUSCA - CONFIGURAÇÃO
// ===================================

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        // Usar a versão debounced da busca
        searchInput.removeEventListener('input', handleSearch);
        searchInput.addEventListener('input', debouncedSearch);
    }
}

// ===================================
// SISTEMA DE EVENTOS
// ===================================

function registerForEvent(eventName) {
    const eventPrices = {
        'Pokemon TCG': 15.00,
        'Torneio Anime Games': 20.00,
        'Cosplay Contest': 10.00,
        'Sessão de Anime': 5.00
    };
    
    const price = eventPrices[eventName] || 0;
    
    const message = generateEventRegistrationMessage(eventName, price);
    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    try {
        window.open(whatsappUrl, '_blank');
        showNotification(`Redirecionando para WhatsApp para inscrição em ${eventName}...`, 'success');
    } catch (error) {
        showNotification('Erro ao abrir WhatsApp. Verifique se o aplicativo está instalado.', 'error');
        console.error('Erro ao abrir WhatsApp:', error);
    }
}

function generateEventRegistrationMessage(eventName, price) {
    let message = `🎮 *INSCRIÇÃO EM EVENTO - ${STORE_CONFIG.name}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    message += `📅 *Evento:* ${eventName}\n`;
    message += `💰 *Taxa de Inscrição:* ${STORE_CONFIG.currency} ${price.toFixed(2).replace('.', ',')}\n\n`;
    
    message += `👤 *Dados do Participante:*\n`;
    message += `• Nome completo: \n`;
    message += `• Idade: \n`;
    message += `• Telefone: \n`;
    message += `• E-mail: \n\n`;
    
    message += `📝 *Observações:*\n`;
    message += `Este é um projeto futuro da Arena Geek. Em breve teremos mais informações sobre datas e regulamentos!\n\n`;
    
    message += `🚀 Aguardo confirmação e mais detalhes sobre o evento!`;
    
    return message;
}

// ===================================
// EVENTOS GLOBAIS
// ===================================

// Atualizar UI quando a página volta do background
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        updateCartUI();
    }
});

// Salvar estado do carrinho antes de sair da página
window.addEventListener('beforeunload', function() {
    localStorage.setItem('arenaGeekCart', JSON.stringify(cart));
});

// Prevenir zoom duplo clique em iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// ===================================
// CONSOLE LOG (para debug)
// ===================================

console.log(`
🎮 Arena Geek - Loja de Produtos Anime
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏪 Loja: ${STORE_CONFIG.name}
📱 WhatsApp: ${STORE_CONFIG.whatsappNumber}
📦 Produtos cadastrados: ${PRODUCTS_DATABASE.length}
🛒 Itens no carrinho: ${cart.length}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
