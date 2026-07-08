import React, { useState } from "react";
import { initialActivities, allCategories } from "./data/activities";
import { Activity } from "./types";
import { NetflixRow } from "./components/NetflixRow";
import { ActivityModal } from "./components/ActivityModal";
import { ActivityIcon } from "./components/ActivityIcon";
import { 
  Search, BookOpen, GraduationCap, Heart, HelpCircle, 
  Sparkles, Star, Clock, Filter, AlertCircle, Info, Smile
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const categoryRowConfigs: Record<string, { title: string; emoji: string }> = {
  "Alfabetização": { title: "Alfabetização e Letramento", emoji: "✏️" },
  "Português": { title: "Língua Portuguesa & Gramática", emoji: "✍️" },
  "Matemática": { title: "Matemática & Contagem Divertida", emoji: "🔢" },
  "Coordenação Motora": { title: "Coordenação Motora & Grafomotricidade", emoji: "🌀" },
  "Colorir": { title: "Colorir & Pintar", emoji: "🎨" },
  "Ciências": { title: "Ciências & Descobrindo o Mundo", emoji: "🌍" },
  "Artes": { title: "Artes Lúdicas & Criatividade", emoji: "🎭" },
  "Caligrafia": { title: "Caligrafia & Escrita Cursiva", emoji: "✒️" },
  "Jogos Educativos": { title: "Jogos Educativos & Desafios", emoji: "🧩" },
  "Datas Comemorativas": { title: "Datas Comemorativas & Eventos", emoji: "📅" },
  "Educação Infantil": { title: "Educação Infantil & Primeiros Passos", emoji: "🧸" },
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  // Search and Category filtering logic
  const filteredActivities = initialActivities.filter((act) => {
    const matchesSearch = 
      act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (act.bnccCode && act.bnccCode.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "Todos" || act.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Handpicked list of featured activities
  const featuredActivities = initialActivities.filter(act => ["1", "2", "3", "10", "11", "13", "20", "25", "29", "30"].includes(act.id));

  // Recently added activities (last 8 added, reversed to show newest first)
  const recentlyAdded = [...initialActivities].reverse().slice(0, 8);

  // Map category to a specific warm, cute pastel color theme
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Todos": return "bg-sky-400 hover:bg-sky-500 text-white shadow-sky-100";
      case "Matemática": return "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200";
      case "Alfabetização": return "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200";
      case "Português": return "bg-teal-100 text-teal-800 border-teal-200 hover:bg-teal-200";
      case "Coordenação Motora": return "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200";
      case "Colorir": return "bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200";
      case "Ciências": return "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200";
      case "Artes": return "bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200";
      case "Caligrafia": return "bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200";
      case "Jogos Educativos": return "bg-rose-100 text-rose-800 border-rose-200 hover:bg-rose-200";
      case "Datas Comemorativas": return "bg-teal-100 text-teal-800 border-teal-200 hover:bg-teal-200";
      case "Educação Infantil": return "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200";
      default: return "bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-pink-50 to-amber-50 text-slate-800 font-sans flex flex-col justify-between selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden relative">
      
      {/* Decorative Floating Children elements (Clouds, Stars, Air Balloons, Rainbows) */}
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

      {/* CORE SKETCHBOOK-STYLE HEADER */}
      <header className="relative z-40 bg-white border-b-8 border-amber-300 shadow-sm ui-hide-print">
        {/* Binder rings visual design */}
        <div className="h-4 bg-amber-400 w-full flex justify-around px-8">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-4 h-6 -mt-2 bg-slate-300 rounded-full border-2 border-slate-400 shadow-inner flex items-center justify-center">
              <div className="w-1.5 h-3 bg-slate-100 rounded-full" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 bg-gradient-to-tr from-amber-300 to-yellow-400 rounded-2xl flex items-center justify-center text-3xl shadow-md border-4 border-white animate-pulse">
              📚
            </div>
            <div>
              <span className="text-3xl font-black font-display tracking-tight text-slate-800 flex items-center gap-2 justify-center md:justify-start">
                Educateca
                <span className="text-xs font-black uppercase tracking-widest bg-pink-100 text-pink-700 border-2 border-pink-200 px-2.5 py-1 rounded-full animate-bounce">
                  ✨ Atividades
                </span>
              </span>
              <p className="text-xs text-slate-500 font-bold tracking-wide uppercase">
                O Grande Livro de Atividades para Professores da Educação Infantil! 🎒
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-amber-100/80 border-2 border-amber-200 px-4 py-2 rounded-2xl text-slate-800 font-black text-xs flex items-center gap-2 shadow-sm">
              <span>🐻 {initialActivities.length} Atividades Disponíveis</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN BODY AREA */}
      <main className="flex-1 pb-20 relative z-10 ui-hide-print">
        
        {/* LANDSCAPE HERO BANNER SECTION (Cheerful sky, rainbow, clouds, smiling sun) */}
        <section className="relative mx-4 md:mx-12 mt-8 rounded-[40px] overflow-hidden bg-gradient-to-r from-sky-300 via-pink-200 to-yellow-200 border-8 border-white shadow-xl py-12 md:py-16 px-6 md:px-12">
          
          {/* Beautiful decorative sun */}
          <div className="absolute top-4 right-8 text-6xl animate-spin-slow">☀️</div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Banner Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black bg-white/60 text-indigo-800 border-2 border-white shadow-sm">
                🌈 O Cantinho Feliz do Professor
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight leading-[1.15] text-slate-800">
                O mundo mágico de atividades <br />
                <span className="text-indigo-600 bg-white/40 px-3 py-1 rounded-2xl border-4 border-dashed border-indigo-400/40 inline-block mt-2">
                  educativas prontas! 🎨
                </span>
              </h1>
              
              <p className="text-slate-700 text-sm md:text-base font-bold max-w-xl leading-relaxed">
                Navegue por nosso grande livro, visualize os PDFs completos de caligrafia, matemática, ciências e muito mais, e imprima em um clique para alegrar sua turminha!
              </p>

              {/* GIANT CUTE SEARCH BAR */}
              <div className="max-w-2xl mx-auto lg:mx-0 relative pt-3">
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 w-6 h-6 stroke-[3]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="O que quer ensinar hoje? (Ex: Matemática, Alfabeto, BNCC...)"
                    className="w-full pl-14 pr-24 py-4 md:py-5 bg-white text-slate-800 font-bold placeholder-slate-400 rounded-3xl shadow-md focus:outline-none focus:ring-4 focus:ring-amber-300 text-sm md:text-base border-4 border-amber-300/40 transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black text-rose-600 hover:text-white bg-rose-50 hover:bg-rose-500 border-2 border-rose-100 hover:border-rose-500 px-3 py-1.5 rounded-xl cursor-pointer transition-all"
                    >
                      Limpar
                    </button>
                  )}
                </div>
              </div>

              {/* Badges indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-black text-slate-700 pt-3">
                <span className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-white"><Smile className="text-yellow-500 w-4 h-4" /> Material Lúdico</span>
                <span className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-white">⭐ 100% Gratuito</span>
                <span className="flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-white">✏️ Alinhado à BNCC</span>
              </div>
            </div>

            {/* Banner Right Feature Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div 
                animate={{ 
                  y: [0, -12, 0],
                  rotateZ: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-72 md:w-80 bg-white text-slate-800 rounded-[35px] p-6 shadow-xl border-4 border-amber-300 relative cursor-pointer hover:border-pink-300 transition-colors"
                onClick={() => setSelectedActivity(initialActivities[0])}
              >
                {/* Visual badge */}
                <span className="absolute -top-4 -right-4 px-4 py-1.5 bg-pink-400 text-white text-xs font-black rounded-full uppercase shadow-md flex items-center gap-1 rotate-12 border-2 border-white">
                  🧸 RECOMENDADO
                </span>

                {/* Banner Thumbnail Cover with nice colorful sky layout */}
                <div className="h-44 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 text-white flex flex-col justify-between relative overflow-hidden shadow-inner">
                  <span className="text-[10px] font-black tracking-wider bg-white/35 px-3 py-1 rounded-full uppercase self-start border border-white/20">
                    {initialActivities[0].grade}
                  </span>
                  
                  <div className="flex justify-between items-end relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                      <ActivityIcon name={initialActivities[0].iconName} className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-[9px] font-black tracking-widest text-white/50 uppercase">PDF ESCOLAR</div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-wider">{initialActivities[0].category}</span>
                  <h3 className="font-bold text-lg text-slate-800 leading-tight font-display">
                    {initialActivities[0].title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {initialActivities[0].description}
                  </p>
                  <div className="pt-3 flex items-center justify-between border-t-2 border-dashed border-slate-100">
                    <span className="text-[9px] font-bold text-slate-400">BNCC: {initialActivities[0].bnccCode}</span>
                    <span className="text-xs font-black text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                      Visualizar PDF ➜
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* COLORFUL CATEGORIES BUBBLE PILLS ROW */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-slate-400" />
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">Selecione uma matéria para ver as atividades</h3>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none scroll-smooth">
            {allCategories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-3 rounded-2xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer border-3 shadow-sm
                    ${isSelected
                      ? "bg-amber-400 text-slate-800 border-amber-300 scale-105 shadow-md shadow-amber-200"
                      : `${getCategoryColor(category)} border-white`
                    }
                  `}
                >
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* FILTERED VIEW OR STANDARD LANDSCAPE ROW VIEW */}
        {selectedCategory !== "Todos" || searchQuery ? (
          
          // SEARCH / FILTER ACTIVE VIEW
          <section className="max-w-7xl mx-auto px-6 md:px-12 mt-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-8 border-b-4 border-dotted border-slate-200 pb-5">
              <div>
                <h2 className="text-2xl font-black font-display text-slate-800 tracking-tight flex items-center gap-2">
                  <span>📂 {selectedCategory !== "Todos" ? `Atividades de ${selectedCategory}` : "Resultados Encontrados"}</span>
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-bold">
                  Encontramos <strong className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-100">{filteredActivities.length}</strong> {filteredActivities.length === 1 ? "caderno de atividade" : "cadernos de atividades"} correspondentes.
                </p>
              </div>
              
              <button 
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSearchQuery("");
                }}
                className="text-xs font-black text-indigo-600 hover:text-indigo-700 bg-white hover:bg-slate-50 border-2 border-slate-200 px-4 py-2 rounded-xl cursor-pointer transition-all shadow-xs"
              >
                🌈 Ver Todas as Matérias (Netflix Style)
              </button>
            </div>

            {filteredActivities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredActivities.map((act) => (
                  <motion.div
                    key={act.id}
                    layoutId={`card-${act.id}`}
                    whileHover={{ scale: 1.05, y: -6 }}
                    className="bg-white rounded-[30px] border-4 border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
                    onClick={() => setSelectedActivity(act)}
                  >
                    <div className={`h-32 bg-gradient-to-br ${act.coverColor} p-4 text-white flex flex-col justify-between relative`}>
                      <span className="self-start text-[8px] font-black tracking-wider uppercase bg-white/20 px-2.5 py-0.5 rounded-full border border-white/10">
                        {act.grade}
                      </span>
                      <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center border border-white/10">
                        <ActivityIcon name={act.iconName} className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                      <div>
                        <span className="text-[10px] font-black text-indigo-500 uppercase tracking-wider">{act.category}</span>
                        <h3 className="font-bold text-slate-800 text-base leading-snug mt-1 font-display">
                          {act.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                          {act.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t-2 border-dashed border-slate-100 flex gap-2">
                        <button className="flex-1 py-2 px-3 bg-amber-100 text-slate-800 text-xs font-black rounded-xl hover:bg-amber-200 transition-all flex items-center justify-center gap-1 shadow-sm">
                          Visualizar Atividade ➜
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-[35px] border-4 border-dashed border-slate-200">
                <HelpCircle className="w-14 h-14 text-slate-300 mx-auto mb-3" />
                <h3 className="font-black text-slate-700 text-sm">Nenhuma atividade encontrada...</h3>
                <p className="text-xs text-slate-400 mt-1 font-bold">Tente digitar outras palavras ou clique no botão abaixo para restaurar!</p>
                <button
                  onClick={() => {
                    setSelectedCategory("Todos");
                    setSearchQuery("");
                  }}
                  className="mt-5 px-5 py-3 bg-amber-400 hover:bg-amber-500 text-slate-800 rounded-2xl text-xs font-black transition-all cursor-pointer shadow-md"
                >
                  Voltar para o Catálogo Geral
                </button>
              </div>
            )}
          </section>

        ) : (
          
          // STANDARD DYNAMIC CATALOUGE VIEW - organized with gorgeous Netflix horizontal scroll rows
          <div className="space-y-12 mt-10">
            
            {/* Row 1: Handpicked Recommended/Top Worksheets */}
            <NetflixRow 
              title="Atividades Recomendadas da Semana ⭐" 
              activities={featuredActivities} 
              onSelectActivity={setSelectedActivity} 
            />

            {/* Row 2: Recently Added */}
            <NetflixRow 
              title="Materiais Recém-Adicionados ⏰" 
              activities={recentlyAdded} 
              onSelectActivity={setSelectedActivity} 
            />

            {/* Dynamic Rows for each category that has at least one activity */}
            {allCategories
              .filter((category) => category !== "Todos")
              .map((category) => {
                const activities = initialActivities.filter((a) => a.category === category);
                if (activities.length === 0) return null;

                const config = categoryRowConfigs[category] || { title: category, emoji: "📚" };
                return (
                  <NetflixRow
                    key={category}
                    title={`${config.title} ${config.emoji}`}
                    activities={activities}
                    onSelectActivity={setSelectedActivity}
                  />
                );
              })}

          </div>
        )}

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

      {/* FOOTER - Designed like a cute pastel paper card */}
      <footer className="bg-white border-t-8 border-amber-300 py-12 px-6 md:px-12 ui-hide-print relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-400 text-white rounded-xl flex items-center justify-center text-xl shadow-md border-2 border-white">
              🎨
            </div>
            <div>
              <span className="text-lg font-black font-display text-slate-800 tracking-tight block">Educateca 📚</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">O Cantinho Colorido do Professor da Educação Infantil</span>
            </div>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-slate-600 font-bold">
              Criado com todo o amor para transformar o aprendizado de nossas crianças. ❤️
            </p>
            <p className="text-[10px] text-slate-400 font-medium">
              © 2026 Educateca. Todos os direitos reservados. Licenciado inteiramente para uso escolar.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
