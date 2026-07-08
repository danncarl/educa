import React, { useState } from "react";
import { initialActivities, allCategories } from "./data/activities";
import { Activity } from "./types";
import { ActivityModal } from "./components/ActivityModal";
import { ActivityIcon } from "./components/ActivityIcon";
import { Smile } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Cute custom child-friendly styles for each category mapping
const categoryStyles: Record<string, {
  colorName: string;
  emoji: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  iconBg: string;
  btnBg: string;
  btnText: string;
}> = {
  "Todos": {
    colorName: "Multicor",
    emoji: "🌈",
    bgColor: "bg-amber-50 hover:bg-amber-100/40",
    borderColor: "border-amber-200",
    textColor: "text-amber-800",
    iconBg: "bg-amber-400 text-amber-900",
    btnBg: "bg-amber-400 hover:bg-amber-500 text-slate-800 shadow-amber-100",
    btnText: "text-slate-800",
  },
  "Matemática": {
    colorName: "Azul",
    emoji: "🔵",
    bgColor: "bg-blue-50/70 hover:bg-blue-100/50",
    borderColor: "border-blue-200",
    textColor: "text-blue-800",
    iconBg: "bg-blue-500 text-white",
    btnBg: "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-100",
    btnText: "text-white",
  },
  "Coordenação Motora": {
    colorName: "Verde",
    emoji: "🟢",
    bgColor: "bg-emerald-50/70 hover:bg-emerald-100/50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-800",
    iconBg: "bg-emerald-500 text-white",
    btnBg: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-100",
    btnText: "text-white",
  },
  "Alfabetização": {
    colorName: "Amarelo",
    emoji: "🟡",
    bgColor: "bg-amber-50/70 hover:bg-amber-100/50",
    borderColor: "border-amber-200",
    textColor: "text-amber-800",
    iconBg: "bg-amber-400 text-slate-800",
    btnBg: "bg-amber-400 hover:bg-amber-500 text-slate-800 shadow-amber-100",
    btnText: "text-slate-800",
  },
  "Português": {
    colorName: "Roxo",
    emoji: "🟣",
    bgColor: "bg-purple-50/70 hover:bg-purple-100/50",
    borderColor: "border-purple-200",
    textColor: "text-purple-800",
    iconBg: "bg-purple-500 text-white",
    btnBg: "bg-purple-500 hover:bg-purple-600 text-white shadow-purple-100",
    btnText: "text-white",
  },
  "Artes": {
    colorName: "Laranja",
    emoji: "🟠",
    bgColor: "bg-orange-50/70 hover:bg-orange-100/50",
    borderColor: "border-orange-200",
    textColor: "text-orange-800",
    iconBg: "bg-orange-500 text-white",
    btnBg: "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-100",
    btnText: "text-white",
  },
  "Colorir": {
    colorName: "Rosa",
    emoji: "🩷",
    bgColor: "bg-pink-50/70 hover:bg-pink-100/50",
    borderColor: "border-pink-200",
    textColor: "text-pink-800",
    iconBg: "bg-pink-500 text-white",
    btnBg: "bg-pink-500 hover:bg-pink-600 text-white shadow-pink-100",
    btnText: "text-white",
  },
  "Jogos Educativos": {
    colorName: "Vermelho",
    emoji: "🔴",
    bgColor: "bg-red-50/70 hover:bg-red-100/50",
    borderColor: "border-red-200",
    textColor: "text-red-800",
    iconBg: "bg-red-500 text-white",
    btnBg: "bg-red-500 hover:bg-red-600 text-white shadow-red-100",
    btnText: "text-white",
  },
  "Ciências": {
    colorName: "Verde",
    emoji: "🟢",
    bgColor: "bg-emerald-50/70 hover:bg-emerald-100/50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-800",
    iconBg: "bg-emerald-500 text-white",
    btnBg: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-100",
    btnText: "text-white",
  },
  "Caligrafia": {
    colorName: "Roxo",
    emoji: "🟣",
    bgColor: "bg-purple-50/70 hover:bg-purple-100/50",
    borderColor: "border-purple-200",
    textColor: "text-purple-800",
    iconBg: "bg-purple-500 text-white",
    btnBg: "bg-purple-500 hover:bg-purple-600 text-white shadow-purple-100",
    btnText: "text-white",
  },
  "Datas Comemorativas": {
    colorName: "Laranja",
    emoji: "🟠",
    bgColor: "bg-orange-50/70 hover:bg-orange-100/50",
    borderColor: "border-orange-200",
    textColor: "text-orange-800",
    iconBg: "bg-orange-500 text-white",
    btnBg: "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-100",
    btnText: "text-white",
  },
  "Educação Infantil": {
    colorName: "Amarelo",
    emoji: "🟡",
    bgColor: "bg-amber-50/70 hover:bg-amber-100/50",
    borderColor: "border-amber-200",
    textColor: "text-amber-800",
    iconBg: "bg-amber-400 text-slate-800",
    btnBg: "bg-amber-400 hover:bg-amber-500 text-slate-800 shadow-amber-100",
    btnText: "text-slate-800",
  }
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  // Simple category filtering
  const filteredActivities = initialActivities.filter((act) => {
    return selectedCategory === "Todos" || act.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-pink-50 to-amber-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden relative">
      
      {/* Decorative Floating Kids Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-8 left-12 text-5xl opacity-40 animate-bounce" style={{ animationDuration: "5s" }}>☁️</div>
        <div className="absolute top-24 right-16 text-5xl opacity-30 animate-pulse">☁️</div>
        <div className="absolute top-1/3 left-4 text-4xl opacity-20">⭐</div>
        <div className="absolute top-1/2 right-12 text-4xl opacity-20">🎨</div>
        <div className="absolute bottom-1/4 left-10 text-4xl opacity-20">✏️</div>
        <div className="absolute bottom-12 right-20 text-5xl opacity-30 animate-bounce" style={{ animationDuration: "8s" }}>🎈</div>
        <div className="absolute top-4 right-1/4 text-4xl opacity-20">🌈</div>
        <div className="absolute bottom-1/3 right-4 text-4xl opacity-15">🐻</div>
        <div className="absolute bottom-4 left-1/3 text-4xl opacity-15">🎒</div>
      </div>

      {/* CORE SKETCHBOOK-STYLE HEADER (Logo and simple title only) */}
      <header className="relative z-40 bg-white border-b-8 border-amber-300 shadow-sm ui-hide-print">
        {/* Binder rings visual design */}
        <div className="h-4 bg-amber-400 w-full flex justify-around px-8">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-4 h-6 -mt-2 bg-slate-300 rounded-full border-2 border-slate-400 shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-3 bg-slate-100 rounded-full" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-tr from-amber-300 to-yellow-400 rounded-2xl flex items-center justify-center text-4xl shadow-md border-4 border-white mb-3">
            📚
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black font-display tracking-tight text-slate-800 flex items-center gap-2 justify-center">
              Educateca
              <span className="text-xs font-black uppercase tracking-widest bg-pink-100 text-pink-700 border-2 border-pink-200 px-2.5 py-1 rounded-full">
                ✨ Atividades
              </span>
            </h1>
            <p className="text-xs text-slate-400 font-bold tracking-wide uppercase mt-1">
              Biblioteca Infantil de Atividades Lúdicas
            </p>
          </div>
        </div>
      </header>

      {/* MAIN BODY AREA */}
      <main className="flex-1 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10 ui-hide-print mt-8">
        
        {/* COLORFUL CATEGORIES BUBBLE PILLS ROW */}
        <section className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {allCategories.map((category) => {
              const style = categoryStyles[category] || categoryStyles["Todos"];
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-3 rounded-2xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border-3 shadow-xs
                    ${isSelected
                      ? "bg-amber-400 text-slate-800 border-amber-300 scale-105 shadow-md shadow-amber-200"
                      : `${style.bgColor} ${style.borderColor} ${style.textColor}`
                    }
                  `}
                >
                  <span className="text-sm">{style.emoji}</span>
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* LIBRARY / ACTIVITIES GRID */}
        <section>
          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredActivities.map((act) => {
                const style = categoryStyles[act.category] || categoryStyles["Todos"];
                return (
                  <motion.div
                    key={act.id}
                    layoutId={`card-${act.id}`}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative p-6 rounded-[32px] border-4 ${style.borderColor} ${style.bgColor} flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-all min-h-[220px] cursor-pointer`}
                    onClick={() => setSelectedActivity(act)}
                  >
                    {/* Category Icon */}
                    <div className={`w-12 h-12 rounded-2xl ${style.iconBg} flex items-center justify-center shadow-inner mb-4`}>
                      <ActivityIcon name={act.iconName} className="w-6 h-6 text-white" />
                    </div>

                    {/* Activity Name */}
                    <div className="flex-1 flex items-center justify-center mb-5">
                      <h3 className="font-black text-slate-800 text-lg leading-snug font-display">
                        {act.title}
                      </h3>
                    </div>

                    {/* Big Baixar Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedActivity(act);
                      }}
                      className={`w-full py-3.5 px-6 rounded-2xl ${style.btnBg} ${style.btnText} text-sm font-black tracking-wide shadow-xs hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2`}
                    >
                      <span>Baixar</span>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-[35px] border-4 border-dashed border-slate-200">
              <Smile className="w-14 h-14 text-slate-300 mx-auto mb-3 animate-bounce" />
              <h3 className="font-black text-slate-700 text-sm">Nenhuma atividade nesta categoria ainda...</h3>
              <p className="text-xs text-slate-400 mt-1 font-bold">Escolha outra matéria acima para explorar!</p>
            </div>
          )}
        </section>

      </main>

      {/* DETAILED ACTIVE WORKBOOK MODAL OVERLAY */}
      <AnimatePresence>
        {selectedActivity && (
          <ActivityModal 
            activity={selectedActivity} 
            onClose={() => setSelectedActivity(null)} 
          />
        )}
      </AnimatePresence>

      {/* FOOTER - Simple Paper style */}
      <footer className="bg-white border-t-8 border-amber-300 py-10 px-6 md:px-12 ui-hide-print relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-400 text-white rounded-xl flex items-center justify-center text-xl shadow-md border-2 border-white">
              🎨
            </div>
            <div>
              <span className="text-lg font-black font-display text-slate-800 tracking-tight block">Educateca 📚</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Biblioteca Infantil de Atividades</span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-slate-600 font-bold">
              Criado com amor para pais, professores e crianças. ❤️
            </p>
            <p className="text-[10px] text-slate-400 font-medium">
              © 2026 Educateca. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
