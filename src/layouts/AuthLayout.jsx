import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Brand Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
        <Link to="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-xs group-hover:bg-indigo-700 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">GateMate</span>
        </Link>
        {title && (
          <h1 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="mt-2 text-sm text-slate-600">
            {subtitle}
          </p>
        )}
      </div>

      {/* Main Card */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 shadow-xs border border-slate-200 rounded-2xl">
          {children}
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Exclusive to VIT Students • domain: <span className="font-medium text-slate-700">@vitstudent.ac.in</span>
        </p>
      </div>
    </div>
  );
}
