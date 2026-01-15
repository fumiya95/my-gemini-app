import React from 'react';
import { Home, ChevronLeft } from 'lucide-react';
import { AppView } from '../types';

interface NavigationProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  title: string;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate, title }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm safe-area-top">
      <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
        {currentView !== 'home' ? (
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ChevronLeft size={24} />
            <span className="ml-1 font-medium">戻る</span>
          </button>
        ) : (
          <div className="w-8" /> // Spacer
        )}
        
        <h1 className="text-lg font-bold text-slate-800 truncate">{title}</h1>
        
        <button 
          onClick={() => onNavigate('home')}
          className={`p-2 rounded-full hover:bg-slate-100 transition-colors ${currentView === 'home' ? 'text-indigo-600' : 'text-slate-400'}`}
        >
          <Home size={24} />
        </button>
      </div>
    </header>
  );
};