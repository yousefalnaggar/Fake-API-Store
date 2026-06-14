const CATEGORY_LABELS = {
  all: 'All',
  electronics: 'Electronics',
  jewelery: 'Jewelry',
  "men's clothing": "Men's",
  "women's clothing": "Women's",
}

export default function CategoryFilter({ categories, active, onChange }) {
  const all = ['all', ...categories]

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition whitespace-nowrap ${
            active === cat
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-gray-900'
          }`}
        >
          {CATEGORY_LABELS[cat] ?? cat}
        </button>
      ))}
    </div>
  )
}
