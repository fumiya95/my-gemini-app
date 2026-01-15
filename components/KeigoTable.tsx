import React, { useState } from 'react';
import { VERB_LIST } from '../constants';
import { ArrowUpCircle, ArrowDownCircle, Info } from 'lucide-react';

export const KeigoTable: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800">
        <p className="font-bold mb-2">💡 敬語の基本ルール</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>尊敬語</strong>：相手を高める（主語は相手）</li>
          <li><strong>謙譲語</strong>：自分を下げる（主語は自分・身内）</li>
          <li><strong>丁寧語</strong>：丁寧な表現（〜です・ます）</li>
        </ul>
      </div>

      <div className="space-y-3">
        {VERB_LIST.map((entry, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow-sm border transition-all duration-300 overflow-hidden ${expandedIndex === index ? 'ring-2 ring-indigo-500 border-transparent' : 'border-slate-200 hover:border-indigo-300'}`}
          >
            <button 
              onClick={() => toggleExpand(index)}
              className="w-full text-left p-4 flex items-center justify-between bg-white"
            >
              <div className="flex items-center space-x-4">
                <span className="text-lg font-bold text-slate-800 w-16">{entry.plain}</span>
                <span className="text-slate-500 text-sm">→ {entry.polite}</span>
              </div>
              <div className="text-indigo-600 text-sm font-medium">
                {expandedIndex === index ? '閉じる' : '詳細を見る'}
              </div>
            </button>

            {/* Expanded Content */}
            <div 
              className={`px-4 pb-4 space-y-4 transition-all duration-300 ease-in-out ${expandedIndex === index ? 'block opacity-100' : 'hidden opacity-0'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                {/* Respectful */}
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 relative">
                   <div className="absolute -top-3 left-3 bg-white px-2 py-0.5 rounded-full border border-orange-200 shadow-sm flex items-center space-x-1">
                      <ArrowUpCircle size={14} className="text-orange-500" />
                      <span className="text-xs font-bold text-orange-700">尊敬語 (相手)</span>
                   </div>
                   <p className="mt-2 text-orange-900 font-medium">{entry.respectful}</p>
                </div>

                {/* Humble */}
                <div className="bg-teal-50 p-3 rounded-lg border border-teal-100 relative mt-3 md:mt-0">
                   <div className="absolute -top-3 left-3 bg-white px-2 py-0.5 rounded-full border border-teal-200 shadow-sm flex items-center space-x-1">
                      <ArrowDownCircle size={14} className="text-teal-500" />
                      <span className="text-xs font-bold text-teal-700">謙譲語 (自分)</span>
                   </div>
                   <p className="mt-2 text-teal-900 font-medium">{entry.humble}</p>
                </div>
              </div>

              <div className="flex items-start space-x-2 bg-slate-50 p-3 rounded text-sm text-slate-600">
                <Info size={16} className="mt-0.5 text-slate-400 flex-shrink-0" />
                <span>{entry.tip}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};