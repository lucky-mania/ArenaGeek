# Arena Geek - E-commerce Platform

## Overview

Arena Geek is a frontend-focused e-commerce platform specializing in anime merchandise. The application is built as a single-page application (SPA) using vanilla HTML, CSS, and JavaScript, designed to sell anime-themed products like mugs, posters, and keychains. The platform features a modern, responsive design with product browsing, search functionality, shopping cart management, and WhatsApp integration for order completion.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Dark anime-themed color palette with focus on pink/red accent colors (#e94560, #f38ba8)
Location: Esperantina, Piauí - Rua Jaime Pinheiro Brasil, 771, Bairro Morro da Onça
Image management: Easy customization through config.js URLs and images/ folder
Logo integration: Custom Arena Geek logo in header and about section

## System Architecture

### Frontend Architecture
- **Single Page Application (SPA)**: Built with vanilla HTML5, CSS3, and ES6+ JavaScript
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox for layout management
- **Component-Based Structure**: Modular JavaScript functions for different features (cart, search, filters)
- **State Management**: Local browser storage for cart persistence and application state
- **Event-Driven Architecture**: DOM event listeners for user interactions and dynamic content updates

### Data Management
- **Static Product Database**: JavaScript object-based product catalog stored in `config.js` with imageUrl fields for easy image customization
- **Client-Side Storage**: LocalStorage for shopping cart persistence across browser sessions
- **In-Memory State**: JavaScript variables for current filters, cart state, and UI toggles
- **Image Assets**: Organized in images/ folder with custom Arena Geek logos and product placeholders

### User Interface Design
- **Modern CSS Architecture**: Custom CSS with CSS Grid, Flexbox, and CSS animations
- **Design System**: Consistent color scheme, typography, and spacing using CSS custom properties
- **Interactive Elements**: Smooth animations and transitions for enhanced user experience
- **Accessibility Features**: Semantic HTML structure and keyboard navigation support

### Business Logic
- **Product Management**: Categorized product system with featured items and search functionality
- **Shopping Cart**: Add/remove items, quantity management, and price calculations
- **Order Processing**: WhatsApp integration for order completion and customer communication

## External Dependencies

### Third-Party Libraries
- **Font Awesome 6.0.0**: Icon library for UI elements and visual enhancements
- **CDN Delivery**: External stylesheet inclusion for faster loading and maintenance

### Integration Services
- **WhatsApp Business API**: Direct order forwarding to business WhatsApp number for customer service
- **Social Media Links**: Integration points for Instagram, Facebook, and Twitter profiles

### Browser APIs
- **LocalStorage API**: Client-side data persistence for shopping cart
- **DOM APIs**: Dynamic content manipulation and event handling
- **CSS Animations API**: Smooth transitions and visual feedback

### Development Tools
- **Standard Web Technologies**: No build process required, direct browser execution
- **Static Hosting Compatible**: Designed for deployment on static hosting platforms