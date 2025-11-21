# 🛒 StyleCard – Modern Product Cards UI (React + Vite)

A fast, responsive and SEO-friendly product card UI built using **React**, **Vite**, **Framer Motion**, **React Router**, and **Dark/Light Mode** support.  
Each card is fully animated, optimized for performance, and includes search, sorting, filtering, product details pages and lazy-loaded images.

🔗 **Live Demo:** https://style-card.vercel.app/  
📦 **Tech Stack:** React 19, Vite, React Router 7, Framer Motion 12  

---

## 🚀 Features

- ✔ **Fast Vite build (90+ Lighthouse score)**
- ✔ **Dark / Light Mode with ThemeContext**
- ✔ **Search, Filters & Sorting**
- ✔ **SEO-optimized product pages**
- ✔ **Product Details Page (Dynamic Routing)**
- ✔ **Lazy loading for images**
- ✔ **Framer Motion animations**
- ✔ **Responsive card layout**
- ✔ **Optimized Unsplash photos**
- ✔ **Vercel deployment ready**

---

## 📸 UI Preview

![Preview](/preview.png)

---

## 📁 Folder Structure

src/
├── App.jsx
├── App.css
├── main.jsx
├── data/products.js
├── components/
│ ├── SearchBar.jsx
│ ├── Filters.jsx
│ ├── SortMenu.jsx
├── pages/
│ └── Home.jsx
├── Card.jsx
├── ProductDetails.jsx
└── context/ThemeContext.jsx


---

## 🛠️ Installation

```bash
git clone https://github.com/Devesh-Shah24/style-card.git
cd style-card
npm install
npm run dev

---

🏗️ Build for Production

npm run build
npm run preview

---

🌍 Deployment (Vercel)

Use:

Build Command: npm run build

Output Folder: dist

vercel.json included with security headers + SPA routing fix.

---

📈 Lighthouse Performance

| Category       | Score |
| -------------- | ----- |
| Performance    | 85–95 |
| Accessibility  | 90+   |
| Best Practices | 100   |
| SEO            | 90+   |

---

🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

📝 License

MIT License © 2025 Devesh Kumar
