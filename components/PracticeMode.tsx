import React, { useState } from 'react';
import { QUIZ_DATA } from '../constants';
import { Check, X, RefreshCw, Trophy, ChevronRight } from 'lucide-react';
import { AppView } from '../types';

interface PracticeModeProps {
    onComplete: () => void;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_DATA[currentIndex];

  const handleSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelectedOption(optionIndex);
  };

  const checkAnswer = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === currentQuestion.correctIndex;
    if (isCorrect) setScore(score + 1);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentIndex < QUIZ_DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center max-w-md mx-auto mt-10">
        <div className="w-20 h-20 bg-yellow-100 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={40} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">お疲れ様でした！</h2>
        <p className="text-slate-600 mb-6">あなたの正解数は...</p>
        <div className="text-5xl font-bold text-indigo-600 mb-8">
          {score} <span className="text-2xl text-slate-400">/ {QUIZ_DATA.length}</span>
        </div>
        <div className="space-y-3">
          <button 
            onClick={restart}
            className="w-full py-3 px-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center"
          >
            <RefreshCw size={20} className="mr-2" />
            もう一度挑戦
          </button>
          <button 
            onClick={onComplete}
            className="w-full py-3 px-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            ホームへ戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto pb-20">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-slate-500 mb-4 px-2">
        <span>Question {currentIndex + 1} / {QUIZ_DATA.length}</span>
        <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider">
          {currentQuestion.type === 'stance' ? '立場判断' : currentQuestion.type === 'fill-in' ? '穴埋め' : '選択問題'}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-slate-100 rounded-full w-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-indigo-500 transition-all duration-300 ease-out"
          style={{ width: `${((currentIndex) / QUIZ_DATA.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-800 leading-relaxed whitespace-pre-line">
            {currentQuestion.question}
          </h3>
        </div>
        
        <div className="bg-slate-50 p-4 space-y-3">
          {currentQuestion.options.map((option, idx) => {
            let itemClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium relative ";
            
            if (showResult) {
               if (idx === currentQuestion.correctIndex) {
                 itemClass += "bg-emerald-50 border-emerald-500 text-emerald-800";
               } else if (idx === selectedOption) {
                 itemClass += "bg-rose-50 border-rose-500 text-rose-800";
               } else {
                 itemClass += "bg-white border-slate-200 text-slate-400 opacity-60";
               }
            } else {
               if (selectedOption === idx) {
                 itemClass += "bg-indigo-50 border-indigo-500 text-indigo-800 shadow-sm";
               } else {
                 itemClass += "bg-white border-slate-200 text-slate-600 hover:border-indigo-200 hover:bg-slate-50";
               }
            }

            return (
              <button 
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={showResult}
                className={itemClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && idx === currentQuestion.correctIndex && <Check size={20} className="text-emerald-600" />}
                  {showResult && idx === selectedOption && idx !== currentQuestion.correctIndex && <X size={20} className="text-rose-600" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Area */}
      {!showResult ? (
        <button 
          onClick={checkAnswer}
          disabled={selectedOption === null}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
            selectedOption !== null 
              ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transform hover:-translate-y-0.5' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          回答する
        </button>
      ) : (
        <div className="animate-fade-in-up">
           <div className="bg-slate-800 text-white p-5 rounded-xl mb-6">
              <div className="flex items-center space-x-2 mb-2 font-bold text-yellow-400">
                <span className="text-lg">解説</span>
              </div>
              <p className="leading-relaxed">{currentQuestion.explanation}</p>
           </div>
           
           <button 
            onClick={nextQuestion}
            className="w-full py-4 bg-indigo-600 text-white font-bold text-lg rounded-xl shadow-md hover:bg-indigo-700 flex items-center justify-center transition-colors"
           >
             <span>{currentIndex < QUIZ_DATA.length - 1 ? '次の問題へ' : '結果を見る'}</span>
             <ChevronRight className="ml-2" />
           </button>
        </div>
      )}
    </div>
  );
};