# Zayra - Modern E-commerce Platform 🌟🦑🏷️

A full-stack e-commerce web application built with modern technologies, featuring a sleek dark theme with vibrant green accents. Specializing in gaming and tech products.

![Zayra Homepage](path/to/homepage-screenshot.png)

## 🚀 Features

- **Product Catalog**: Browse trending products across multiple categories (Headphones, Phones, PCs, Laptops, Watches)
- **Product Details**: Comprehensive product information with ratings and reviews
- **Shopping Cart**: Add items to cart with real-time updates
- **Secure Checkout**: Multiple payment options (Google Pay, Credit Card)
- **User Authentication**: Secure login and registration with Clerk
- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Modern UI with green accent colors

## 🛠️ Tech Stack

### Frontend
- **React** - UI library for building interactive interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5/CSS3** - Markup and styling

### Backend
- **Node.js** - JavaScript runtime
- **MongoDB** - NoSQL database for product and user data
- **Postman** - API testing and development

### Authentication
- **Clerk** - User authentication and management

## 📸 Web Sampple Pages
<img width="1919" height="996" alt="image" src="https://github.com/user-attachments/assets/e9050fb0-f0e0-433b-a8d7-da17f18da1bd" />
<img width="1919" height="770" alt="image" src="https://github.com/user-attachments/assets/932c4d35-4b24-4d88-94bb-46a3afd3f607" />
<img width="1919" height="992" alt="image" src="https://github.com/user-attachments/assets/85dd5a79-8747-40c9-bc46-3702db27c322" />
<img width="1919" height="770" alt="image" src="https://github.com/user-attachments/assets/1bc86791-95ba-49f9-9055-5e333933967a" />
<img width="1917" height="969" alt="image" src="https://github.com/user-attachments/assets/1dbc7041-21bb-46f9-9960-34468c5ee6bf" />
<img width="1919" height="580" alt="image" src="https://github.com/user-attachments/assets/60bfa219-ea4a-48f2-8c95-d69287fe05a8" />

### Homepage - Trending Products
![Homepage](path/to/homepage-screenshot.png)
*Browse trending products with ratings and quick add-to-cart functionality*

### Checkout Page
![Checkout](path/to/checkout-screenshot.png)
*Secure checkout with order summary and multiple payment options*

## 🎨 Design Features

- Clean, modern interface with dark theme
- Vibrant green (#00FF00 / lime) accent color
- Card-based product layout
- Star rating system
- Smooth hover effects and transitions
- Intuitive navigation with category filters

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/zayra-ecommerce.git
cd zayra-ecommerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables**

Create a `.env` file in the root directory:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=publishable_key
CLERK_SECRET_KEY=secret_key

4. **Run the development server**
npm run dev
```

5. **Open your browser**
Navigate to `https://zayra-project-wc4v.vercel.app/`

## 🗂️ Project Structure

```
zayra-ecommerce/
  ├── src/
  │   ├── components/
  │   │   ├── ProductCard.tsx
  │   │   ├── Navbar.tsx
  │   │   ├── Cart.tsx
  │   │   └── Checkout.tsx
  │   ├── pages/
  │   │   ├── index.tsx
  │   │   ├── products/
  │   │   └── checkout/
  │   ├── styles/
  │   │   └── globals.css
  │   ├── lib/
  │   │   ├── mongodb.ts
  │   │   └── utils.ts
  │   ├── types/
  │   │   └── index.ts
  │   └── api/
  │       ├── products/
  │       └── orders/
  ├── public/
  │   └── images/
  ├── .env.example
  ├── package.json
  ├── tsconfig.json
  └── tailwind.config.js
```

## 🔐 Authentication

User authentication is managed through Clerk, providing:
- Email/Password authentication
- OAuth providers (Google, GitHub, etc.)
- User profile management
- Session handling

## 🎯 Key Components

### Product Card
Displays product information including:
- Product image
- Name and description
- Price
- Star rating and review count
- Add to Cart button

### Checkout Flow
1. Cart review
2. Payment method selection
3. Order summary with discount calculation
4. Secure payment processing

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚧 Future Enhancements

- [ ] Product search functionality
- [ ] Wishlist feature
- [ ] Order tracking
- [ ] Email notifications
- [ ] Product recommendations

## 👤 Author

**Shamika Dilshan**
- GitHub: [@shamikadilshanzz](https://github.com/shamikadilshanzz)
- LinkedIn: [Shamika](www.linkedin.com/in/shamika-dilshan-193a4b268)
- Email: shamikadilshan4562@gmail.com

Made with ❤️ and ☕
