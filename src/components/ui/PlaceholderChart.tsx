interface PlaceholderChartProps {
  title: string
  description?: string
}

export default function PlaceholderChart({ title, description }: PlaceholderChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
        {/* PLACEHOLDER CHART - DO NOT DEPLOY */}
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">📊</div>
          <p>Chart Placeholder</p>
          <p className="text-sm">Static visualization will be added in Phase 2</p>
        </div>
      </div>
    </div>
  )
}

