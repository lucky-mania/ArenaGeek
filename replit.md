# Overview

This is a Brazilian geek/anime store website called "Arena Geek" - a premium single-page application that functions as an e-commerce platform for Pokemon cards, action figures, and related merchandise. The site features a sophisticated shopping cart system with WhatsApp integration for order processing, making it accessible to small business owners who prefer messaging-based commerce over traditional payment gateways. The design uses an elegant gray background with striking red and white "ARENA GEEK" branding, complemented by orange/gold accent colors and premium visual effects including animated particles, glowing elements, and smooth transitions.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a vanilla JavaScript architecture with modular design patterns:

**HTML Structure**: Single-page application with semantic HTML5 structure, featuring a fixed navigation header, product catalog sections, and a sliding cart sidebar.

**CSS Framework**: Custom CSS with modern features including CSS Grid, Flexbox, backdrop filters, and CSS animations. Uses Google Fonts (Poppins) and Font Awesome icons for visual elements.

**JavaScript Modules**: Code is separated into focused modules:
- `script.js` - Main application logic, navigation, and animations
- `cart.js` - Shopping cart functionality with localStorage persistence
- `products.js` - Product database and catalog management
- `whatsapp.js` - WhatsApp integration with clearly marked phone number configuration section for easy customization

**State Management**: Uses browser localStorage for cart persistence, allowing users to maintain their cart across browser sessions.

**Responsive Design**: Mobile-first approach with collapsible navigation and touch-friendly interfaces.

## Backend Architecture
**Client-Side Only**: This is a static frontend application with no server-side components. All functionality runs in the browser.

**Data Storage**: Product catalog is stored as a JavaScript array/object structure. Cart data persists in localStorage.

## User Interface Patterns
**Cart System**: Sliding sidebar cart with real-time updates, quantity management, and visual feedback animations.

**Navigation**: Responsive navigation with mobile hamburger menu and smooth scrolling to page sections.

**Notifications**: Toast-style notifications for user feedback on cart actions.

# External Dependencies

## Content Delivery Networks (CDNs)
- **Google Fonts**: Poppins font family for typography
- **Font Awesome 6.0.0**: Icon library for UI elements and product categories

## Third-Party Services
- **WhatsApp Business API**: Integration for order processing via `wa.me` links. Orders are formatted as structured messages and sent directly to the store's WhatsApp number for manual processing.

## Browser APIs
- **localStorage**: For cart data persistence
- **Window.open()**: For opening WhatsApp in new tabs/apps

## Potential Future Integrations
The architecture is prepared for:
- Payment gateway integration (current WhatsApp flow could be supplemented)
- Content Management System for product catalog
- Analytics tracking
- Email marketing integration