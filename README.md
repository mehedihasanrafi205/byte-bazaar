# Byte Bazaar

Byte Bazaar is a modern e-commerce application built with **Next.js 15 (App Router)** and **Express.js**. It features a dynamic product catalog, user authentication, and product management capabilities.

## 🚀 Technlogies Used

-   **Frontend**: Next.js 15 (App Router), Tailwind CSS
-   **Backend**: Express.js, MongoDB
-   **Authentication**: NextAuth.js (Google & Credentials)
-   **Styling**: Tailwind CSS, DaisyUI

## 📦 Features

### ✅ Implemented Features

1.  **Landing Page**:
    *   Responsive design with 7+ sections (Banner, Brands, New Arrivals, Featured Categories, Testimonials, FAQ, Newsletter).
    *   Publicly accessible.
2.  **Authentication**:
    *   Secure login using NextAuth.js.
    *   Supports **Google Login** and **Mock Login** (Email/Password).
    *   User sessions persist via cookies.
3.  **Item List Page**:
    *   Publicly accessible at `/products`.
    *   Fetches real-time data from the Express backend.
    *   Search and Filter functionality (by category and name).
4.  **Item Details Page**:
    *   Publicly accessible.
    *   Shows detailed product information, specifications, and images.
5.  **Add Product (Protected)**:
    *   Only accessible to authenticated users.
    *   Secure form to add new products to the database.
    *   Toast notifications on success.

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18+)
- MongoDB connection string (optional, if running local backend with own DB)

### 1. Backend Setup (`byte-bazaar-server`)
```bash
cd byte-bazaar-server
npm install
# Create .env file with:
# URI=your_mongodb_connection_string
# PORT=4000
npm start
# Server runs on http://localhost:4000
```

### 2. Frontend Setup (`byte-bazaar`)
```bash
cd byte-bazaar
npm install
# Create .env.local file (see below)
npm run dev
# App runs on http://localhost:3000
```

### Environment Variables (`.env.local`)
Create a `.env.local` file in the root of the frontend project:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_super_secret_key
# Optional: Google OAuth
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

## 📍 Route Summary

| Route | Access | Description |
| :--- | :--- | :--- |
| `/` | Public | Landing page with 7 sections. |
| `/products` | Public | List of all available products with search/filter. |
| `/products/:id` | Public | Detailed view of a specific product. |
| `/login` | Public | User login page. |
| `/add-product` | Protected | Form to add a new product (requires login). |
| `/manage-products`| Protected | Dashboard to view user-added products. |

## 🔐 Authentication Flow

1.  **Login**: Users can log in via `/login`.
    *   **Mock Login**: Use `test@example.com` / `password`.
    *   **Google Login**: Requires valid OAuth keys in `.env.local`.
2.  **Session**: A JWT session is created and stored in a secure cookie.
3.  **Protection**: Middleware or Client-side checks (`useSession`, `ProtectedRoute`) prevent access to `/add-product` and `/manage-products` for unauthenticated users.
4.  **Redirect**: Unauthenticated users trying to access protected routes are redirected to `/login`.