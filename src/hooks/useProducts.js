import { useState, useEffect } from 'react'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchProducts() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
        const data = await res.json()
        if (!cancelled) setProducts(data)
      } catch (err) {
        if (!cancelled) setError(err.message || 'Something went wrong')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchProducts()
    return () => { cancelled = true }
  }, [])

  return { products, loading, error }
}
