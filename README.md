# ByteBazaar 🚀

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-blue?style=flat&logo=tailwind-css)](https://tailwindcss.com/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green?style=flat&logo=mongodb)](https://mongodb.com/)

**Live Demo:** [https://byte-bazaar-phi.vercel.app/](https://byte-bazaar-phi.vercel.app/)  
**GitHub Repo:** [https://github.com/mehedihasanrafi205/byte-bazaar](https://github.com/mehedihasanrafi205/byte-bazaar)

---

## 📖 About

ByteBazaar is a responsive tech product marketplace built with Next.js (App Router). Users browse/search products, view details, and (post-Google login) add/manage listings. Focus: Clean UI, auth via NextAuth.js, Express.js + MongoDB backend.

**Tech Stack:** Next.js, Tailwind CSS, NextAuth.js (Google), Express.js, MongoDB, Swiper.js, SweetAlert2.

---

## ✨ Features

### Public
- **Landing (/):** Hero, banner, latest products, brands carousel, categories, newsletter, footer.
- **Products (/products):** Search/filter, responsive grid cards (image, title, desc, price, details).
- **Details (/products/[id]):** Banner, full desc, meta (price/date/priority), back btn.

### Protected
- **Add (/add-product):** Form (title, descs, price/date/priority, image URL), validation, toast.
- **Manage (/manage-products):** Table/grid of products; view/delete actions.

### Auth
- Google OAuth; navbar dropdown post-login.

---

## 🗺️ Routes

| Route              | Access    | Description                  |
|--------------------|-----------|------------------------------|
| `/`                | Public    | Landing Page                 |
| `/products`        | Public    | Product List                 |
| `/products/[id]`   | Public    | Product Details              |
| `/add-product`     | Protected | Add Product Form             |
| `/manage-products` | Protected | Manage Products Dashboard    |
| `/login`           | Public    | Google Login                 |

---

## 🚀 Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Google OAuth creds

### Local Run
1. Clone: `git clone https://github.com/mehedihasanrafi205/byte-bazaar.git && cd byte-bazaar`
2. Install: `npm install` (frontend); `cd backend && npm install` (if separate)
3. Env (.env.local / .env):
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret  # openssl rand -base64 32
   GOOGLE_CLIENT_ID=your-id
   GOOGLE_CLIENT_SECRET=your-secret
   MONGODB_URI=your-mongo-uri
   BACKEND_URL=http://localhost:5000
   ```
4. Backend: `cd backend && npm run dev` (port 5000)
5. Frontend: `npm run dev` (port 3000)

### Deploy
- Frontend: Vercel (connect repo, add envs)
- Backend: Vercel (Node service, set envs)

---

## 🎨 Design
- Responsive (mobile-first)
- Colors: Navy primary, slate text, emerald CTAs
- Interactions: Hovers, animations, loading states



**Built by Mehedi Hasan Rafi** 🌟