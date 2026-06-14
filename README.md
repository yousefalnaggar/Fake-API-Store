# Fake API Store - Minimal Product Explorer

A clean, minimal single-page product browsing app built with React + Vite, powered by the [Fake Store API](https://fakestoreapi.com/products).

---
## Prerequisites

Before running this application, ensure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

---
## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yousefalnaggar/Fake-API-Store.git
   cd Fake-API-Store
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

---
## Features

- Real-time search filtering by product name
- Category pill-tab filtering (All / Electronics / Jewelry / Men's / Women's)
- Skeleton card loading state while data fetches
- Graceful error state with a retry button
- Empty state when no results match
- Fully responsive: 2-col mobile → 3-col tablet → 4-col desktop

---
## Tech Stack

| Tool            | Why it was chosen                                   |
| --------------- | --------------------------------------------------- |
| React 19 + Vite | Fast HMR dev experience, minimal config             |
| Tailwind CSS v3 | Utility-first, no context-switching between files   |
| Fake Store API  | Free, stable REST API with categories and ratings   |
| Native `fetch`  | No extra dependency needed for a single GET request |

---
## Folder Structure

```
src/
  hooks/
    useProducts.js     ← all data fetching lives here, isolated from UI
  components/
    Header.jsx         ← sticky top bar
    SearchBar.jsx      ← controlled input with clear button
    CategoryFilter.jsx ← pill tabs, derived dynamically from API data
    ProductCard.jsx    ← memoized card (image, title, price, rating)
    LoadingSpinner.jsx ← animated skeleton grid
    ErrorMessage.jsx   ← error state + retry
    EmptyState.jsx     ← no-results state
  App.jsx              ← root: owns all state + filtering logic
  main.jsx
  index.css            ← Tailwind directives + Inter font import
```

---
## 📄 License

This project is licensed under the MIT License.

---
<div align="center">
  <p><strong>Made with ❤️ by <a href="https://github.com/yousefalnaggar">Yousef Alnaggar</a></strong></p>
</div>
