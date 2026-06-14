import { memo } from 'react'

const CATEGORY_LABELS = {
  electronics: 'Electronics',
  jewelery: 'Jewelry',
  "men's clothing": "Men's",
  "women's clothing": "Women's",
}

const ProductCard = memo(function ProductCard({ product }) {
  const { title, price, image, category, rating } = product

  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-200 flex flex-col">
      <div className="aspect-square bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1.5">
          {CATEGORY_LABELS[category] ?? category}
        </span>
        <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 flex-1 mb-3">
          {title}
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-base font-semibold text-gray-900">
            ${price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-gray-500">
              {rating?.rate?.toFixed(1)} <span className="text-gray-300">({rating?.count})</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})

export default ProductCard
