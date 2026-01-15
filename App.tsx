import React, { useState, useEffect } from 'react';
import { BookOpen, Users, MessageSquare, GraduationCap, ChevronRight } from 'lucide-react';
import { AppView } from './types';
import { Navigation } from './components/Navigation';
import { KeigoTable } from './components/KeigoTable';
import { AppellationGuide } from './components/AppellationGuide';
import { PhrasingMaster } from './components/PhrasingMaster';
import { PracticeMode } from './components/PracticeMode';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const getTitle = () => {
    switch (currentView) {
      case 'verbs': return '敬語変換マスター';
      case 'appellations': return '呼称・立場マスター';
      case 'phrasing': return '言い換えマスター';
      case 'practice': return '実戦練習モード';
      default: return '敬語 完璧マスター';
    }
  };

  const menuItems = [
    {
      id: 'verbs' as AppView,
      title: '敬語変換マスター',
      desc: '行く・来る・食べるなど、頻出動詞の変換表',
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      id: 'appellations' as AppView,
      title: '呼称・立場マスター',
      desc: '弊社・御社・わたくし...立場で変わる呼び方',
      icon: Users,
      color: 'bg-emerald-500'
    },
    {
      id: 'phrasing' as AppView,
      title: '言い換えマスター',
      desc: '「NG」→「OK」の言い回しと理由',
      icon: MessageSquare,
      color: 'bg-orange-500'
    },
    {
      id: 'practice' as AppView,
      title: '練習モード',
      desc: 'クイズ形式で理解度をチェック',
      icon: GraduationCap,
      color: 'bg-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navigation 
        currentView={currentView} 
        onNavigate={setCurrentView}
        title={getTitle()}
      />

      <main className="max-w-3xl mx-auto px-4 pt-6 pb-12">
        {currentView === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center py-6">
              <h2 className="text-2xl font-bold mb-2 text-slate-900">ビジネス敬語を<br/>完璧にマスターしよう</h2>
              <p className="text-slate-500">迷わず、正しく、自信を持って話すために。</p>
            </div>

            <div className="grid gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 flex items-center text-left group"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} text-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-indigo-700 transition-colors">{item.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-indigo-400" />
                </button>
              ))}
            </div>
            
            <footer className="text-center text-slate-400 text-xs mt-12">
               &copy; Keigo Master Pro
            </footer>
          </div>
        )}

        <div className={currentView === 'home' ? 'hidden' : 'block animate-fade-in'}>
          {currentView === 'verbs' && <KeigoTable />}
          {currentView === 'appellations' && <AppellationGuide />}
          {currentView === 'phrasing' && <PhrasingMaster />}
          {currentView === 'practice' && <PracticeMode onComplete={() => setCurrentView('home')} />}
        </div>
      </main>
    </div>
  );
}