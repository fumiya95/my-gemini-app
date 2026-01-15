import React from 'react';
import { PHRASE_LIST } from '../constants';
import { XCircle, CheckCircle, HelpCircle } from 'lucide-react';

export const PhrasingMaster: React.FC = () => {
  return (
    <div className="space-y-6 pb-20">
      <div className="grid gap-4">
        {PHRASE_LIST.map((phrase, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* NG Section */}
                <div className="bg-rose-50/50 p-4 border-b md:border-b-0 md:border-r border-rose-100 flex items-start space-x-3">
                    <XCircle className="text-rose-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                        <span className="text-xs font-bold text-rose-400 block mb-1">NG / 普通</span>
                        <p className="font-medium text-slate-700">{phrase.ng}</p>
                    </div>
                </div>

                {/* OK Section */}
                <div className="bg-emerald-50/50 p-4 flex items-start space-x-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                        <span className="text-xs font-bold text-emerald-600 block mb-1">OK / 正解</span>
                        <p className="font-bold text-slate-800">{phrase.ok}</p>
                    </div>
                </div>
            </div>
            
            {/* Reason */}
            <div className="bg-slate-50 p-3 text-sm text-slate-600 flex items-start space-x-2 border-t border-slate-100">
                <HelpCircle size={16} className="mt-0.5 text-indigo-400 flex-shrink-0" />
                <span>{phrase.reason}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};