// WhatsApp integration
// ========================================
// CONFIGURAÇÃO DO WHATSAPP
// Altere o número abaixo para o número da sua loja
// Formato: código do país + DDD + número (sem espaços, traços ou parênteses)
// Exemplo: 5511999887766 (Brasil, SP, 99988-7766)
// ========================================
const WHATSAPP_NUMBER = '5586999999999';

function openWhatsApp() {
    const message = encodeURIComponent('Olá! Estou interessado nos produtos da Arena Geek. Gostaria de saber mais informações!');
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappURL, '_blank');
}

// Send cart to WhatsApp
function sendToWhatsApp() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!');
        return;
    }

    const message = formatCartMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear cart after sending
    setTimeout(() => {
        if (confirm('Pedido enviado! Deseja limpar o carrinho?')) {
            clearCart();
            toggleCart();
        }
    }, 1000);
}

// Format cart message for WhatsApp
function formatCartMessage() {
    let message = '🛒 *NOVO PEDIDO - PONTO NERD* 🛒\n\n';
    
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   💰 R$ ${item.price.toFixed(2).replace('.', ',')}\n`;
        message += `   📦 Quantidade: ${item.quantity}\n`;
        message += `   💵 Subtotal: R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `💸 *TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    message += '📍 Retirar na loja ou calcular entrega?\n';
    message += '🕐 Horário: Segunda à Sábado, 08:00 - 18:00\n';
    message += '📧 Confirme seus dados para finalizar o pedido!';

    return message;
}

// Register for event
function registerEvent(eventName) {
    const modal = document.getElementById('event-modal');
    const eventNameInput = document.getElementById('event-name');
    
    eventNameInput.value = eventName;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('event-modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Handle event form submission
document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const eventName = formData.get('eventName');
    const participantName = formData.get('participantName');
    const participantPhone = formData.get('participantPhone');
    const participantEmail = formData.get('participantEmail');
    
    const message = formatEventMessage(eventName, participantName, participantPhone, participantEmail);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    closeModal();
    
    // Clear form
    this.reset();
    
    showNotification('Inscrição enviada com sucesso!');
});

// Format event registration message
function formatEventMessage(eventName, name, phone, email) {
    let message = '🎮 *INSCRIÇÃO PARA EVENTO* 🎮\n\n';
    message += `📅 *Evento:* ${eventName}\n`;
    message += `👤 *Nome:* ${name}\n`;
    message += `📱 *WhatsApp:* ${phone}\n`;
    
    if (email) {
        message += `📧 *Email:* ${email}\n`;
    }
    
    message += '\n🏆 Inscrição realizada!\n';
    message += '📍 Local: Ponto Nerd - Rua Principal, 123, Centro\n';
    message += '⏰ Mais informações sobre horário e regras serão enviadas em breve!\n';
    message += '\n🎯 Obrigado por participar dos nossos eventos!';
    
    return message;
}

// Send contact message
function sendContactMessage() {
    const message = '👋 Olá! Tenho uma dúvida sobre a loja Ponto Nerd.\n\nPoderia me ajudar?';
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('event-modal');
    const modalContent = document.querySelector('.modal-content');
    
    if (modal.classList.contains('show') && !modalContent.contains(e.target)) {
        closeModal();
    }
});

// Close modal with escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('event-modal');
        if (modal.classList.contains('show')) {
            closeModal();
        }
    }
});

// Add click handler for WhatsApp contact button
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtns = document.querySelectorAll('.whatsapp-btn');
    whatsappBtns.forEach(btn => {
        if (!btn.href || btn.href === '#') {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                sendContactMessage();
            });
        }
    });
});
