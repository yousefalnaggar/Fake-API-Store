export default function EmptyState({ query, category }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <h3 className="text-base font-semibold text-gray-900 mb-1">No results found</h3>
      <p className="text-sm text-gray-500 max-w-xs">
        {query
          ? `No products match "${query}"${category !== 'all' ? ` in this category` : ''}.`
          : 'No products found in this category.'}
      </p>
    </div>
  )
}
