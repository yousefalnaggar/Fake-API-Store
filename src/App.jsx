import { useState, useMemo, useCallback } from 'react'
import { useProducts } from './hooks/useProducts'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import ProductCard from './components/ProductCard'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import EmptyState from './components/EmptyState'

export default function App() {
  const { products, loading, error } = useProducts()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory
      const matchesQuery = !q || p.title.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [products, query, activeCategory])

  const handleQueryChange = useCallback((val) => setQuery(val), [])
  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat)
    setQuery('')
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-6">
          <SearchBar value={query} onChange={handleQueryChange} />
          {!loading && !error && (
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onChange={handleCategoryChange}
            />
          )}
        </div>

        {/* Result count */}
        {!loading && !error && products.length > 0 && (
          <p className="text-xs text-gray-400 mb-4">
            Showing <span className="font-medium text-gray-600">{filtered.length}</span> of {products.length} products
          </p>
        )}

        {/* States */}
        {loading && <LoadingSpinner count={8} />}

        {!loading && error && (
          <ErrorMessage message={error} onRetry={() => window.location.reload()} />
        )}

        {!loading && !error && filtered.length === 0 && (
          <EmptyState query={query} category={activeCategory} />
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
