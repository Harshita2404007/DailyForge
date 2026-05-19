// Hover interaction improved
export default function InsightCard({ insights }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
      <h2 className="text-2xl font-semibold text-main mb-4">
        Insights
      </h2>

      <ul className="space-y-3 text-sm text-main">
        {insights?.map((insight, i) => (
          <li
            key={i}
            className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1"
          >
            <span className="text-blue-500">
              {insight.icon}
            </span>

            <span>{insight.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}