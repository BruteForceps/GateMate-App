import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                G
              </div>
              <span className="font-bold text-slate-900 tracking-tight">GateMate</span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Community-driven parcel pickup service designed exclusively for hostel students at VIT Campus.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-slate-500">
            <Link to="/login" className="hover:text-slate-900 transition-colors">
              Student Login
            </Link>
            <Link to="/register" className="hover:text-slate-900 transition-colors">
              Register Account
            </Link>
            <Link to="/dashboard" className="hover:text-slate-900 transition-colors">
              Live Dashboard
            </Link>
            <span className="text-slate-300">|</span>
            <span>Domain: @vitstudent.ac.in</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} GateMate. Created for campus student collaboration.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-600 cursor-pointer">Hostel Guidelines</span>
            <span className="hover:text-slate-600 cursor-pointer">Security Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
