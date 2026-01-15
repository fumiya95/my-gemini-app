import React from 'react';
import { User, Users, Building2, MessageSquare, FileText, ArrowRight } from 'lucide-react';

export const AppellationGuide: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      {/* Introduction */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg mb-2 text-slate-800">基本の考え方</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          ビジネス敬語では<span className="font-bold text-indigo-600">「ウチ（身内）」</span>と<span className="font-bold text-orange-600">「ソト（相手）」</span>を明確に区別します。
          自分の会社の人間であっても、お客様（ソト）の前では「身内」として扱い、敬語を使わず呼び捨てにします。
        </p>
      </div>

      {/* Person Chart */}
      <div className="space-y-2">
        <h3 className="font-bold text-slate-700 ml-1">一人称（自分の呼び方）</h3>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-slate-100">
                <div className="p-4 flex flex-col items-center bg-blue-50/50">
                    <span className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">To Customer</span>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-2">
                        <User size={24} />
                    </div>
                    <p className="font-bold text-slate-800">私（わたくし）</p>
                    <p className="text-xs text-slate-500 mt-1">最もフォーマル</p>
                </div>
                <div className="p-4 flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">To Colleague</span>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-500 mb-2">
                        <Users size={24} />
                    </div>
                    <p className="font-bold text-slate-800">私（わたし）/ 僕</p>
                    <p className="text-xs text-slate-500 mt-1">社内・日常</p>
                </div>
            </div>
        </div>
      </div>

      {/* Company Chart */}
      <div className="space-y-2">
        <h3 className="font-bold text-slate-700 ml-1">自社（自分の会社）</h3>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
             <div className="grid grid-cols-2 divide-x divide-slate-100">
                <div className="p-4 flex flex-col items-center bg-blue-50/50">
                    <span className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">To Customer</span>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-2">
                        <Building2 size={24} />
                    </div>
                    <p className="font-bold text-slate-800">弊社（へいしゃ）</p>
                    <p className="text-xs text-slate-500 mt-1">へりくだる表現</p>
                </div>
                <div className="p-4 flex flex-col items-center">
                     <span className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Internal</span>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-500 mb-2">
                        <Users size={24} />
                    </div>
                    <p className="font-bold text-slate-800">当社 / うち</p>
                    <p className="text-xs text-slate-500 mt-1">客観的 / 口語</p>
                </div>
            </div>
        </div>
      </div>

      {/* Partner Company Chart */}
      <div className="space-y-2">
        <h3 className="font-bold text-slate-700 ml-1">相手の会社</h3>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-slate-100">
                <div className="p-4 flex flex-col items-center bg-orange-50/50">
                     <span className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Spoken</span>
                     <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-2">
                        <MessageSquare size={24} />
                    </div>
                    <p className="font-bold text-slate-800">御社（おんしゃ）</p>
                    <p className="text-xs text-slate-500 mt-1">会話・面接</p>
                </div>
                <div className="p-4 flex flex-col items-center bg-orange-50/50">
                    <span className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Written</span>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-2">
                        <FileText size={24} />
                    </div>
                    <p className="font-bold text-slate-800">貴社（きしゃ）</p>
                    <p className="text-xs text-slate-500 mt-1">メール・履歴書</p>
                </div>
            </div>
        </div>
      </div>

      <div className="bg-rose-50 border border-rose-100 p-4 rounded-lg">
        <h4 className="font-bold text-rose-800 mb-2 text-sm">⚠️ 注意！二重敬語</h4>
        <div className="flex items-center text-sm text-rose-700">
            <span>社長様</span>
            <ArrowRight size={16} className="mx-2" />
            <span className="font-bold">社長</span>
        </div>
        <p className="text-xs text-rose-600 mt-1">役職名には既に敬意が含まれています。「〇〇社長」「社長の〇〇様」が正解です。</p>
      </div>
    </div>
  );
};