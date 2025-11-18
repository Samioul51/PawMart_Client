# PawMart

**Live Demo:** [https://pawmart51.netlify.app/](https://pawmart51.netlify.app/)

---

## 🔥 Project Overview

**PawMart** is a full-featured platform for pet lovers and pet owners. Users can browse pets for adoption, shop for pet supplies, manage their listings and orders, and download detailed PDF reports of transactions. Smooth animations, dark/light mode, and Firebase authentication enhance the user experience.

---

## 🎯 Key Features

- **Pet Adoption Platform**
  - Browse, filter, and adopt pets (dogs, cats, others)
  - Pet owners and breeders can list pets with detailed info and images
- **Pet Supplies Marketplace**
  - Shop pet food, toys, accessories, and care products
  - Sellers can add products with pricing, descriptions, and location
- **Personalized Dashboard**
  - 'My Listings' and 'My Orders' pages for managing posts and tracking transactions
  - Update, delete listings, track adoption requests and purchases
- **PDF Order Reports**
  - Download complete order details (product, quantities, prices, addresses, dates) in tabular PDF format
- **Secure Authentication & User Experience**
  - Firebase Email/Password and Google login
  - Private route protection, form validation, dynamic page titles, dark/light mode
  - Smooth animations with Framer Motion

---

## 🧰 Tech Stack & Dependencies

### **Frontend Framework**

- React 19
- React DOM

### **Build Tool**

- Vite 7

### **Styling**

- Tailwind CSS 4
- DaisyUI 5
- Styled Components
- @tailwindcss/vite

### **Routing**

- React Router v7

### **Animations & Effects**

- Motion (Framer Motion)
- Swiper JS
- React Hot Toast
- SweetAlert2
- React Simple Typewriter

### **Authentication**

- Firebase 

### PDF generation

- jsPDF
- jsPDF-AutoTable

---

## 📦 Full Dependency List

### **Dependencies**

```
"@tailwindcss/vite": "^4.1.17",
"firebase": "^12.5.0",
"jspdf": "^3.0.3",
"jspdf-autotable": "^5.0.2",
"motion": "^12.23.24",
"react": "^19.1.1",
"react-dom": "^19.1.1",
"react-hot-toast": "^2.6.0",
"react-icons": "^5.5.0",
"react-router": "^7.9.5",
"react-simple-typewriter": "^5.0.1",
"styled-components": "^6.1.19",
"sweetalert2": "^11.26.3",
"swiper": "^12.0.3",
"tailwindcss": "^4.1.17"
```

### **Dev Dependencies**

```
"@eslint/js": "^9.36.0",
"@types/react": "^19.1.16",
"@types/react-dom": "^19.1.9",
"@vitejs/plugin-react": "^5.0.4",
"daisyui": "^5.4.7",
"eslint": "^9.36.0",
"eslint-plugin-react-hooks": "^5.2.0",
"eslint-plugin-react-refresh": "^0.4.22",
"globals": "^16.4.0",
"vite": "^7.1.7"
```

---

## 🚀 Run Locally

```
git clone https://github.com/YOUR_USERNAME/pawmart-client.git
cd pawmart-client
npm install
npm run dev
```

### Build for Production

```
npm run build
npm run preview
```

---

## ⚙️ Environment Variables

Create a `.env` file and add:

```
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🔐 Authentication Notes

- Firebase Email/Password and Google login
- Private route protection for dashboards

