// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize cart
function initCart() {
    updateCartDisplay();
    updateCartCount();
}

// Add item to cart
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showNotification(`${product.name} adicionado ao carrinho!`);
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            icon: product.icon
        });
        showNotification(`${product.name} adicionado ao carrinho!`);
    }

    saveCart();
    updateCartDisplay();
    updateCartCount();
    
    // Add animation to cart button
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    updateCartCount();
    showNotification('Item removido do carrinho!');
}

// Update item quantity
function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        saveCart();
        updateCartDisplay();
        updateCartCount();
    }
}

// Increase quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        saveCart();
        updateCartDisplay();
        updateCartCount();
    }
}

// Decrease quantity
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCart();
        updateCartDisplay();
        updateCartCount();
    } else if (item && item.quantity === 1) {
        removeFromCart(productId);
    }
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        cartTotal.textContent = '0,00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                    <input type="number" class="qty-input" value="${item.quantity}" 
                           onchange="updateQuantity(${item.id}, this.value)" min="1">
                    <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    // Calculate and display total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2).replace('.', ',');
}

// Update cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Show/hide badge
    if (totalItems > 0) {
        cartCount.style.display = 'block';
    } else {
        cartCount.style.display = 'none';
    }
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
    
    // Prevent body scroll when cart is open
    if (cartSidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Clear cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    updateCartCount();
}

// Show notification that appears for 3 seconds then disappears completely
function showNotification(message) {
    // Remove any existing notification first
    const existingNotification = document.querySelector('.cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);

    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // Hide and remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('hide');
        
        // Remove from DOM after animation completes
        setTimeout(() => {
            if (notification && notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    initCart();
});

// Close cart when clicking outside
document.addEventListener('click', function(e) {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartBtn = document.querySelector('.cart-btn');
    
    if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target) && cartSidebar.classList.contains('open')) {
        toggleCart();
    }
});

// Handle escape key to close cart
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    }
});
