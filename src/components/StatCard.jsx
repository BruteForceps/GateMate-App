import React from 'react';

export default function StatCard({
  title,
  value,
  description,
  icon,
  badgeText,
  badgeVariant = 'positive',
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs transition-shadow hover:shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </span>
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          {value}
        </span>
        {badgeText && (
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              badgeVariant === 'positive'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            {badgeText}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-1.5 text-xs text-slate-500">{description}</p>
      )}
    </div>
  );
}
