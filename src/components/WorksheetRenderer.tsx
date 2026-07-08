import React from "react";
import { 
  BookOpen, Calculator, Activity as ActivityIcon, Palette, 
  Droplet, Paintbrush, PenTool, Sparkles, TreePine, Grid, 
  ArrowRight, Heart, Star, Smile, Scissors, HelpCircle, GraduationCap
} from "lucide-react";

interface WorksheetRendererProps {
  type: string;
  studentName?: string;
  teacherName?: string;
  schoolName?: string;
  dateStr?: string;
  classroomStr?: string;
}

export const WorksheetRenderer: React.FC<WorksheetRendererProps> = ({
  type,
  studentName = "",
  teacherName = "",
  schoolName = "",
  dateStr = "",
  classroomStr = ""
}) => {
  // Simple minimalist header for download-ready PDFs
  const SimpleHeader = () => (
    <div className="flex justify-between items-center border-b border-slate-300 pb-2 mb-4 text-xs font-semibold text-slate-500 font-sans select-none">
      <div className="flex-1 flex items-center gap-1.5">
        <span>Aluno(a):</span>
        <div className="border-b border-dotted border-slate-400 flex-1 h-4" />
      </div>
      <div className="w-32 flex items-center gap-1.5 ml-4">
        <span>Data:</span>
        <div className="border-b border-dotted border-slate-400 flex-1 h-4" />
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[210mm] mx-auto bg-white p-6 md:p-10 border border-slate-200 shadow-md rounded-2xl relative aspect-[1/1.414] text-slate-800 font-sans flex flex-col justify-between overflow-hidden">
      
      {/* Absolute cute background elements for preview, hidden in print */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-amber-400 to-emerald-400 print:hidden" />
      
      <div>
        <SimpleHeader />

        {/* Content switch */}
        {type === "vogais" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-orange-500 w-6 h-6 print:text-slate-800" /> Aventura das Vogais!
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP02 • Escrever e Colorir</p>
            </div>

            <div className="bg-amber-50/50 p-3 rounded-lg border border-dashed border-amber-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-amber-800 flex items-center gap-1.5 print:text-slate-800">
                <Smile className="w-4 h-4 text-amber-500 print:text-slate-800" /> Instrução: Pinte as vogais, cubra os pontilhados com bastante capricho e faça um lindo desenho que comece com cada letra no quadro ao lado!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { letter: "A", word: "ABELHA", emoji: "🐝", dotted: "A A A A A" },
                { letter: "E", word: "ELEFANTE", emoji: "🐘", dotted: "E E E E E" },
                { letter: "I", word: "IGREJA", emoji: "⛪", dotted: "I I I I I" },
                { letter: "O", word: "OLHO", emoji: "👁️", dotted: "O O O O O" },
                { letter: "U", word: "UVA", emoji: "🍇", dotted: "U U U U U" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center border border-slate-200 p-2.5 rounded-xl bg-slate-50/50 print:bg-white print:border-slate-300">
                  <div className="w-14 h-14 bg-amber-400/20 text-amber-600 rounded-lg flex items-center justify-center font-black text-3xl border border-amber-200 print:bg-white print:text-slate-800 print:border-slate-300">
                    {item.letter}
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-xs text-slate-400 block tracking-wider uppercase">{item.word} {item.emoji}</span>
                    <span className="font-mono text-xl tracking-[0.6em] text-slate-300 select-none block mt-1 font-medium border-b border-dashed border-slate-200 pb-1">
                      {item.dotted}
                    </span>
                  </div>
                  <div className="w-16 h-12 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-300 text-xs text-center p-1">
                    Desenhe aqui!
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "soma" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <Calculator className="text-blue-500 w-6 h-6 print:text-slate-800" /> Matemática na Fazenda
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01MA06 • Somas Simples de 1 a 10</p>
            </div>

            <div className="bg-blue-50/50 p-3 rounded-lg border border-dashed border-blue-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-blue-800 flex items-center gap-1.5 print:text-slate-800">
                <Smile className="w-4 h-4 text-blue-500 print:text-slate-800" /> Instrução: Conte os animaizinhos da fazenda, escreva as quantidades nos círculos e resolva as continhas de somar!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                { 
                  left: ["🦆", "🦆"], right: ["🦆"], 
                  title: "Os patinhos no lago:" 
                },
                { 
                  left: ["🐮", "🐮"], right: ["🐮", "🐮"], 
                  title: "As vaquinhas no pasto:" 
                },
                { 
                  left: ["🐷", "🐷", "🐷"], right: ["🐷", "🐷"], 
                  title: "Os porquinhos na lama:" 
                },
                { 
                  left: ["🐔"], right: ["🐔", "🐔", "🐔"], 
                  title: "As galinhas no galinheiro:" 
                },
              ].map((item, idx) => (
                <div key={idx} className="border-2 border-slate-100 p-4 rounded-xl bg-white space-y-3 flex flex-col justify-between shadow-sm print:shadow-none print:border-slate-300">
                  <span className="text-xs font-bold text-slate-500">{item.title}</span>
                  <div className="flex items-center justify-around gap-2 my-2">
                    {/* Left Group */}
                    <div className="flex gap-1 bg-slate-50 p-1.5 rounded-lg border border-slate-100 print:bg-white">
                      {item.left.map((emoji, eIdx) => (
                        <span key={eIdx} className="text-2xl">{emoji}</span>
                      ))}
                    </div>

                    <span className="text-xl font-bold text-slate-400">+</span>

                    {/* Right Group */}
                    <div className="flex gap-1 bg-slate-50 p-1.5 rounded-lg border border-slate-100 print:bg-white">
                      {item.right.map((emoji, eIdx) => (
                        <span key={eIdx} className="text-2xl">{emoji}</span>
                      ))}
                    </div>
                  </div>

                  {/* Math Equation */}
                  <div className="flex items-center justify-center gap-3 pt-2 border-t border-slate-100 print:border-slate-300">
                    <div className="w-10 h-10 border-2 border-slate-300 rounded-full flex items-center justify-center font-bold text-lg bg-slate-50 print:bg-white">
                      {item.left.length}
                    </div>
                    <span className="text-lg font-bold text-slate-400">+</span>
                    <div className="w-10 h-10 border-2 border-slate-300 rounded-full flex items-center justify-center font-bold text-lg bg-slate-50 print:bg-white">
                      {item.right.length}
                    </div>
                    <span className="text-lg font-bold text-slate-400">=</span>
                    <div className="w-12 h-12 border-2 border-blue-400 bg-blue-50/20 text-blue-700 rounded-lg flex items-center justify-center font-extrabold text-xl print:bg-white print:border-slate-400 print:text-slate-800">
                      ?
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "coord-motora" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <ActivityIcon className="text-emerald-500 w-6 h-6 print:text-slate-800" /> Caminhos dos Insetos
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EI03CG05 • Motricidade Fina</p>
            </div>

            <div className="bg-emerald-50/50 p-3 rounded-lg border border-dashed border-emerald-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5 print:text-slate-800">
                <Smile className="w-4 h-4 text-emerald-500 print:text-slate-800" /> Instrução: Use lápis de cor ou giz de cera colorido para cobrir os pontilhados, guiando cada inseto até a sua plantinha favorita!
              </p>
            </div>

            <div className="space-y-8 py-4">
              {[
                { 
                  icon: "🐝", name: "Abelha", target: "🌸", 
                  pathD: "M 10 20 L 50 20 L 90 20 L 130 20 L 170 20 L 210 20 L 250 20 L 290 20 L 330 20 L 370 20 L 410 20 L 450 20" 
                },
                { 
                  icon: "🐞", name: "Joaninha", target: "🍃", 
                  pathD: "M 10 20 Q 50 0, 90 20 T 170 20 T 250 20 T 330 20 T 410 20 L 450 20" 
                },
                { 
                  icon: "🐌", name: "Caracol", target: "🍄", 
                  pathD: "M 10 20 L 50 0 L 90 20 L 130 0 L 170 20 L 210 0 L 250 20 L 290 0 L 330 20 L 370 0 L 410 20 L 450 20" 
                },
                { 
                  icon: "🦋", name: "Borboleta", target: "🌻", 
                  pathD: "M 10 20 C 30 0, 60 40, 90 20 S 150 0, 180 20 S 240 40, 270 20 S 330 0, 360 20 S 420 40, 450 20" 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between gap-4 border border-slate-100 p-4 rounded-xl bg-slate-50/40 print:bg-white print:border-slate-300">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl filter drop-shadow select-none">{item.icon}</span>
                    <span className="text-[9px] font-bold text-slate-400 mt-1 uppercase">{item.name}</span>
                  </div>
                  
                  {/* Dashed SVG path */}
                  <div className="flex-1 h-12 relative overflow-visible">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 460 40" preserveAspectRatio="none">
                      <path 
                        d={item.pathD} 
                        fill="none" 
                        stroke="#cbd5e1" 
                        strokeWidth="3" 
                        strokeDasharray="6,8" 
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-3xl filter drop-shadow select-none">{item.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "colorir" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <Palette className="text-pink-500 w-6 h-6 print:text-slate-800" /> Animais Coloridos da Floresta
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EI03TS02 • Pintura Guiada</p>
            </div>

            <div className="bg-pink-50/50 p-3 rounded-lg border border-dashed border-pink-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-pink-800 flex items-center gap-1.5 print:text-slate-800">
                <Smile className="w-4 h-4 text-pink-500 print:text-slate-800" /> Instrução: Pinte este lindo Elefante e seus amiguinhos! Siga a legenda de números para descobrir as cores perfeitas de cada parte!
              </p>
            </div>

            {/* Colors legend */}
            <div className="grid grid-cols-4 gap-2 text-center py-1">
              {[
                { num: 1, name: "Amarelo", bg: "bg-yellow-400", text: "text-yellow-800" },
                { num: 2, name: "Cinza", bg: "bg-slate-300", text: "text-slate-800" },
                { num: 3, name: "Verde", bg: "bg-emerald-400", text: "text-emerald-800" },
                { num: 4, name: "Azul", bg: "bg-blue-400", text: "text-blue-800" }
              ].map((color, idx) => (
                <div key={idx} className={`p-1.5 rounded-lg border border-slate-200 flex items-center justify-center gap-2 ${color.bg} ${color.text} font-bold text-xs shadow-sm print:bg-white print:text-slate-800`}>
                  <span className="w-5 h-5 bg-white/70 rounded-full flex items-center justify-center text-xs">{color.num}</span>
                  <span className="hidden sm:inline">{color.name}</span>
                </div>
              ))}
            </div>

            {/* Large outline vector mockup */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50/30 flex flex-col items-center justify-center h-64 relative print:bg-white print:border-slate-400">
              {/* Cute line-art SVG drawing of a cartoon elephant */}
              <svg className="w-48 h-48 text-slate-700 stroke-current fill-none" viewBox="0 0 100 100" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {/* Elephant Head & Trunk */}
                <path d="M 50 30 C 35 30, 30 45, 30 55 C 30 65, 38 75, 50 75 C 62 75, 70 65, 70 55 C 70 45, 65 30, 50 30 Z" />
                <path d="M 50 65 C 50 75, 45 85, 40 85 C 37 85, 36 80, 42 75" />
                {/* Eyes */}
                <circle cx="43" cy="48" r="3" className="fill-slate-700" />
                <circle cx="57" cy="48" r="3" className="fill-slate-700" />
                {/* Ears */}
                <path d="M 30 40 C 15 40, 10 55, 25 60 C 28 61, 30 58, 30 55" />
                <path d="M 70 40 C 85 40, 90 55, 75 60 C 72 61, 70 58, 70 55" />
                {/* Cheeks */}
                <path d="M 38 55 Q 40 57, 42 55" />
                <path d="M 58 55 Q 60 57, 62 55" />
                {/* Numbers labels to color */}
                <text x="50" y="42" fontSize="5" className="fill-slate-400 font-bold font-sans text-center print:fill-slate-600">2</text>
                <text x="20" y="50" fontSize="5" className="fill-slate-400 font-bold font-sans text-center print:fill-slate-600">2</text>
                <text x="80" y="50" fontSize="5" className="fill-slate-400 font-bold font-sans text-center print:fill-slate-600">2</text>
                <text x="44" y="80" fontSize="5" className="fill-slate-400 font-bold font-sans text-center print:fill-slate-600">2</text>
                
                {/* Grass below with number 3 */}
                <path d="M 10 90 L 90 90 M 15 90 L 18 85 L 21 90 M 75 90 L 78 82 L 81 90" />
                <text x="18" y="95" fontSize="4" className="fill-slate-400 font-bold font-sans print:fill-slate-600">3</text>
                <text x="78" y="95" fontSize="4" className="fill-slate-400 font-bold font-sans print:fill-slate-600">3</text>
                
                {/* Sun above with number 1 */}
                <circle cx="85" cy="20" r="6" />
                <path d="M 85 10 L 85 12 M 85 28 L 85 30 M 75 20 L 77 20 M 93 20 L 95 20" />
                <text x="83.5" y="21.5" fontSize="5" className="fill-slate-400 font-bold font-sans print:fill-slate-600">1</text>
              </svg>
              <span className="absolute bottom-3 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Desenho Exclusivo para Colorir</span>
            </div>
          </div>
        )}

        {type === "ciencias-agua" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <Droplet className="text-blue-500 w-6 h-6 print:text-slate-800" /> O Ciclo da Água na Natureza
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF03CI07 • Recorte e Colagem</p>
            </div>

            <div className="bg-blue-50/50 p-3 rounded-lg border border-dashed border-blue-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-blue-800 flex items-center gap-1.5 print:text-slate-800">
                <Scissors className="w-4 h-4 text-blue-500 print:text-slate-800" /> Instrução: Observe a paisagem abaixo. No final da página, recorte as plaquinhas com os nomes corretos e cole-as nos quadrinhos correspondentes (1, 2, 3)!
              </p>
            </div>

            {/* Cycle Illustration mockup */}
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 bg-slate-50/40 relative h-52 flex items-center justify-center print:bg-white print:border-slate-400">
              {/* Nice landscape diagram */}
              <svg className="w-full h-full text-slate-600 stroke-current fill-none" viewBox="0 0 200 100" strokeWidth="1">
                {/* Sun (source of heat) */}
                <circle cx="170" cy="15" r="8" />
                
                {/* Mountain / Ocean */}
                <path d="M 10 90 Q 50 30, 90 70 T 170 90 L 190 90 M 140 90 Q 150 93, 170 90" />
                <text x="145" y="96" fontSize="3" className="fill-slate-400 print:fill-slate-600 font-bold font-sans">Oceano</text>
                
                {/* Cloud (condensation) */}
                <path d="M 80 25 C 75 25, 72 20, 78 15 C 80 12, 90 12, 92 16 C 96 14, 102 18, 98 22 C 100 25, 90 28, 80 25 Z" />
                <path d="M 30 35 C 25 35, 22 30, 28 25 C 30 22, 40 22, 42 26 C 46 24, 52 28, 48 32 C 50 35, 40 38, 30 35 Z" />
                
                {/* Rain (precipitation) */}
                <path d="M 32 42 L 30 46 M 38 42 L 36 46 M 44 42 L 42 46 M 28 48 L 26 52 M 34 48 L 32 52 M 40 48 L 38 52" strokeDasharray="1,1" />

                {/* Evaporation arrows */}
                <path d="M 160 80 Q 165 65, 160 50" markerEnd="url(#arrow)" strokeDasharray="2,2" />
                <path d="M 175 80 Q 180 65, 175 50" markerEnd="url(#arrow)" strokeDasharray="2,2" />

                {/* Empty boxes for sticking labels */}
                {/* Box 1 (Evaporation) */}
                <rect x="145" y="45" width="30" height="10" rx="2" strokeDasharray="2,2" className="stroke-blue-400" />
                <text x="147" y="52" fontSize="5" className="fill-blue-500 font-bold font-sans">CAIXA 1</text>

                {/* Box 2 (Condensation) */}
                <rect x="90" y="10" width="30" height="10" rx="2" strokeDasharray="2,2" className="stroke-blue-400" />
                <text x="92" y="17" fontSize="5" className="fill-blue-500 font-bold font-sans">CAIXA 2</text>

                {/* Box 3 (Precipitation) */}
                <rect x="25" y="55" width="30" height="10" rx="2" strokeDasharray="2,2" className="stroke-blue-400" />
                <text x="27" y="62" fontSize="5" className="fill-blue-500 font-bold font-sans">CAIXA 3</text>
              </svg>
            </div>

            {/* Recortável block at bottom */}
            <div className="border-2 border-dashed border-slate-300 p-3 rounded-xl bg-slate-50/50 relative print:bg-white">
              <div className="absolute -top-3 left-4 bg-white px-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Scissors className="w-3 h-3" /> Linha de Recorte
              </div>
              <p className="text-[10px] text-slate-400 font-medium mb-2 uppercase tracking-wide text-center">Corte as plaquinhas abaixo para colar nos quadrinhos corretos:</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {["EVAPORAÇÃO", "CONDENSAÇÃO", "PRECIPITAÇÃO"].map((label, idx) => (
                  <div key={idx} className="border-2 border-dashed border-slate-400 p-2 text-xs font-bold text-slate-700 bg-white rounded-lg flex items-center justify-center uppercase select-none">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {type === "cores" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <Paintbrush className="text-purple-500 w-6 h-6 print:text-slate-800" /> Misturas Mágicas de Cores
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01AR04 • Teoria Cromática Prática</p>
            </div>

            <div className="bg-purple-50/50 p-3 rounded-lg border border-dashed border-purple-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-purple-800 flex items-center gap-1.5 print:text-slate-800">
                <Smile className="w-4 h-4 text-purple-500 print:text-slate-800" /> Instrução: Vamos pintar e misturar! Pinte os círculos com lápis de cor ou guache e escreva o nome da cor secundária que surge com a mistura mágica!
              </p>
            </div>

            <div className="space-y-5 pt-2">
              {[
                { c1: "Vermelho", c1Bg: "bg-red-500", c2: "Amarelo", c2Bg: "bg-yellow-400", result: "Laranja", resBorder: "border-orange-400" },
                { c1: "Azul", c1Bg: "bg-blue-500", c2: "Amarelo", c2Bg: "bg-yellow-400", result: "Verde", resBorder: "border-emerald-400" },
                { c1: "Vermelho", c1Bg: "bg-red-500", c2: "Azul", c2Bg: "bg-blue-500", result: "Roxo", resBorder: "border-purple-400" }
              ].map((mix, idx) => (
                <div key={idx} className="flex items-center justify-between gap-3 p-3 border border-slate-100 rounded-xl bg-slate-50/50 print:bg-white print:border-slate-300">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${mix.c1Bg} border border-white shadow-sm print:border-slate-400`} />
                    <span className="text-xs font-bold text-slate-700">{mix.c1}</span>
                  </div>

                  <span className="text-lg font-bold text-slate-400">+</span>

                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${mix.c2Bg} border border-white shadow-sm print:border-slate-400`} />
                    <span className="text-xs font-bold text-slate-700">{mix.c2}</span>
                  </div>

                  <span className="text-lg font-bold text-slate-400">=</span>

                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-full border-2 border-dashed ${mix.resBorder} bg-white flex items-center justify-center font-bold text-[10px] text-slate-400`}>
                      MISTURE
                    </div>
                    <div className="flex-1 border-b border-slate-400 h-7 w-20 px-1 text-xs text-slate-400 flex items-end">
                      Cor: ____________
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "caligrafia" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <PenTool className="text-violet-500 w-6 h-6 print:text-slate-800" /> Meu Caderno de Caligrafia
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF02LP07 • Escrita Cursiva</p>
            </div>

            <div className="bg-violet-50/50 p-3 rounded-lg border border-dashed border-violet-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-violet-800 flex items-center gap-1.5 print:text-slate-800">
                <Smile className="w-4 h-4 text-violet-500 print:text-slate-800" /> Instrução: Siga os movimentos das setas e escreva as palavras com letra cursiva bem caprichada nas linhas pautadas!
              </p>
            </div>

            {/* Calligraphy rows */}
            <div className="space-y-4 pt-2">
              {[
                { word: "Amor", sub: "A m o r", dotted: "Amor Amor Amor Amor" },
                { word: "Escola", sub: "E s c o l a", dotted: "Escola Escola Escola" },
                { word: "Família", sub: "F a m í l i a", dotted: "Família Família" },
                { word: "Natureza", sub: "N a t u r e z a", dotted: "Natureza Natureza" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span className="uppercase tracking-wider">{item.word} ({item.sub})</span>
                  </div>
                  
                  {/* Caligraphy Special lines mockup */}
                  <div className="border border-slate-300 rounded-lg overflow-hidden bg-white">
                    {/* Background calligraphy lines */}
                    <div className="h-6 bg-slate-50 border-b border-slate-200 px-3 flex items-center text-slate-300 font-mono text-sm tracking-widest select-none print:bg-white">
                      {item.dotted}
                    </div>
                    {/* Middle shaded zone typical of calligraphy notebooks */}
                    <div className="h-5 bg-violet-100/30 border-b-2 border-violet-200 px-3 flex items-center text-slate-400 font-serif text-sm print:bg-slate-100">
                      <span className="text-slate-300 select-none tracking-[1.5em]">{item.dotted}</span>
                    </div>
                    <div className="h-6 px-3 flex items-center" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === "labirinto" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <Sparkles className="text-orange-500 w-6 h-6 print:text-slate-800" /> Labirinto dos Números
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01MA01 • Sequência de 1 a 20</p>
            </div>

            <div className="bg-orange-50/50 p-3 rounded-lg border border-dashed border-orange-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-orange-800 flex items-center gap-1.5 print:text-slate-800">
                <Smile className="w-4 h-4 text-orange-500 print:text-slate-800" /> Instrução: Ajude o coelhinho fofinho a atravessar o labirinto numérico! Pinte as pedrinhas na ordem sequencial de 1 a 20 até alcançar a cenoura!
              </p>
            </div>

            {/* Grid representation */}
            <div className="flex items-center justify-center gap-4 py-2 select-none">
              <span className="text-3xl filter drop-shadow">🐰</span>
              <div className="grid grid-cols-5 gap-3 border-2 border-slate-200 p-4 rounded-xl bg-slate-50 print:bg-white print:border-slate-400">
                {[
                  { num: 1, active: true }, { num: 2, active: true }, { num: 3, active: true }, { num: 12, active: false }, { num: 18, active: false },
                  { num: 8, active: false }, { num: 9, active: false }, { num: 4, active: true }, { num: 5, active: true }, { num: 6, active: true },
                  { num: 14, active: false }, { num: 15, active: false }, { num: 19, active: false }, { num: 8, active: false }, { num: 7, active: true },
                  { num: 13, active: false }, { num: 12, active: true }, { num: 11, active: true }, { num: 10, active: true }, { num: 8, active: true },
                  { num: 14, active: true }, { num: 15, active: true }, { num: 16, active: true }, { num: 17, active: true }, { num: 18, active: true },
                  { num: 9, active: false }, { num: 11, active: false }, { num: 13, active: false }, { num: 10, active: false }, { num: 19, active: true },
                  { num: 7, active: false }, { num: 6, active: false }, { num: 5, active: false }, { num: 4, active: false }, { num: 20, active: true },
                ].slice(0, 25).map((cell, idx) => (
                  <div 
                    key={idx} 
                    className={`w-10 h-10 border-2 rounded-lg flex items-center justify-center font-black text-sm transition-all
                      ${cell.active 
                        ? "border-orange-300 bg-white text-orange-600 shadow-sm print:border-slate-300 print:text-slate-700" 
                        : "border-slate-200 bg-slate-100 text-slate-400 print:bg-white print:border-slate-200 print:text-slate-300"
                      }`}
                  >
                    {cell.num}
                  </div>
                ))}
              </div>
              <span className="text-3xl filter drop-shadow">🥕</span>
            </div>
          </div>
        )}

        {type === "dia-arvore" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <TreePine className="text-emerald-500 w-6 h-6 print:text-slate-800" /> Celebrando o Dia da Árvore!
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EI03ET03 • Artes e Natureza</p>
            </div>

            <div className="bg-emerald-50/50 p-3 rounded-lg border border-dashed border-emerald-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5 print:text-slate-800">
                <Smile className="w-4 h-4 text-emerald-500 print:text-slate-800" /> Instrução: Use sua imaginação! Desenhe a copa, pinte o tronco ou cole folhas secas de verdade nos galhos para construir uma linda e frondosa árvore!
              </p>
            </div>

            {/* Tree Silhouette vector for crafting */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50/30 flex items-center justify-center h-72 relative print:bg-white print:border-slate-400">
              <svg className="w-48 h-56 text-slate-600 stroke-current fill-none" viewBox="0 0 100 120" strokeWidth="1.5" strokeLinecap="round">
                {/* Detailed tree trunk & bare branches */}
                <path d="M 50 110 L 50 80" strokeWidth="6" />
                <path d="M 45 110 L 35 115" strokeWidth="3" />
                <path d="M 55 110 L 65 115" strokeWidth="3" />
                {/* Main fork */}
                <path d="M 50 80 Q 40 70, 30 65" strokeWidth="4" />
                <path d="M 50 80 Q 60 70, 70 65" strokeWidth="4" />
                <path d="M 50 80 L 50 60" strokeWidth="3.5" />
                {/* Smaller branches */}
                <path d="M 30 65 Q 20 60, 15 62" strokeWidth="2.5" />
                <path d="M 30 65 Q 35 55, 30 45" strokeWidth="2" />
                <path d="M 70 65 Q 80 60, 85 62" strokeWidth="2.5" />
                <path d="M 70 65 Q 65 55, 70 45" strokeWidth="2" />
                <path d="M 50 60 Q 45 50, 48 40" strokeWidth="2.5" />
                <path d="M 50 60 Q 55 50, 52 40" strokeWidth="2.5" />
                {/* Soft ground outline */}
                <path d="M 20 110 C 35 107, 65 107, 80 110" strokeWidth="1.5" />
                
                {/* Tiny bird on branch */}
                <path d="M 32 45 Q 35 42, 38 45 M 38 45 L 36 48" />
                <circle cx="35" cy="44" r="0.5" className="fill-slate-600" />
              </svg>
              <div className="absolute top-10 left-10 w-16 h-12 border border-slate-300 rounded border-dashed text-[8px] text-slate-400 p-1 font-sans flex items-center justify-center text-center">
                Cole folhinhas aqui!
              </div>
              <div className="absolute top-14 right-10 w-16 h-12 border border-slate-300 rounded border-dashed text-[8px] text-slate-400 p-1 font-sans flex items-center justify-center text-center">
                Pinte com tinta!
              </div>
            </div>
          </div>
        )}

        {type === "formas" && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <Grid className="text-cyan-500 w-6 h-6 print:text-slate-800" /> Mundo das Formas Geométricas
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EI03ET05 • Reconhecimento Espacial</p>
            </div>

            <div className="bg-cyan-50/50 p-3 rounded-lg border border-dashed border-cyan-300 print:bg-white print:border-slate-300">
              <p className="text-xs font-semibold text-cyan-800 flex items-center gap-1.5 print:text-slate-800">
                <Smile className="w-4 h-4 text-cyan-500 print:text-slate-800" /> Instrução: Pinte as figuras geométricas seguindo o código de cores abaixo com bastante cuidado para deixar a paisagem bem colorida!
              </p>
            </div>

            {/* Shapes Legend */}
            <div className="grid grid-cols-4 gap-3 text-center py-2">
              {[
                { shape: "Círculo 🔴", color: "Vermelho", border: "border-red-400 bg-red-50/40" },
                { shape: "Quadrado 🟦", color: "Azul", border: "border-blue-400 bg-blue-50/40" },
                { shape: "Triângulo 🔺", color: "Verde", border: "border-emerald-400 bg-emerald-50/40" },
                { shape: "Retângulo 🟡", color: "Amarelo", border: "border-yellow-400 bg-yellow-50/40" }
              ].map((item, idx) => (
                <div key={idx} className={`p-2 rounded-xl border-2 font-bold text-xs ${item.border} text-slate-700 print:bg-white print:border-slate-300`}>
                  <div className="font-semibold">{item.shape}</div>
                  <div className="text-[10px] text-slate-500 font-medium uppercase mt-1">Cor: {item.color}</div>
                </div>
              ))}
            </div>

            {/* Nice shape-composition diagram drawing */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 bg-slate-50/30 flex items-center justify-center h-56 relative print:bg-white print:border-slate-400">
              <svg className="w-72 h-44 text-slate-700 stroke-current fill-none" viewBox="0 0 160 100" strokeWidth="1.5">
                {/* House composed of shapes */}
                {/* Roof (Triangulo) */}
                <polygon points="50,45 20,75 80,75" />
                <text x="47" y="68" fontSize="6" className="fill-slate-400 font-sans print:fill-slate-600">🔺</text>
                
                {/* Body (Quadrado) */}
                <rect x="25" y="75" width="50" height="20" />
                <text x="46" y="86" fontSize="6" className="fill-slate-400 font-sans print:fill-slate-600">🟦</text>
                
                {/* Door (Retangulo) */}
                <rect x="45" y="83" width="10" height="12" />
                
                {/* Sun (Circulo) */}
                <circle cx="125" cy="30" r="12" />
                <text x="121" y="34" fontSize="6" className="fill-slate-400 font-sans print:fill-slate-600">🔴</text>
                
                {/* Tree */}
                {/* Tree trunk (Retangulo) */}
                <rect x="115" y="75" width="8" height="20" />
                {/* Tree foliage (Circulo) */}
                <circle cx="119" cy="63" r="14" />
                <text x="115" y="66" fontSize="6" className="fill-slate-400 font-sans print:fill-slate-600">🔴</text>
              </svg>
            </div>
          </div>
        )}

        {/* 11. caligrafia-frases */}
        {type === "caligrafia-frases" && (
          <div className="space-y-5">
            <div className="text-center mb-3">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <PenTool className="text-rose-500 w-6 h-6" /> Praticando Frases Cursivas
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP02 • Escrita Cursiva & Caligrafia</p>
            </div>

            <div className="bg-rose-50/50 p-2.5 rounded-lg border border-dashed border-rose-300">
              <p className="text-xs font-semibold text-rose-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-rose-500" /> Instrução: Cubra as frases cursivas pontilhadas com bastante capricho e copie-as nas linhas pautadas abaixo!
              </p>
            </div>

            <div className="space-y-4 pt-1">
              {[
                "A amizade e o respeito fazem o mundo feliz.",
                "O sol brilha forte e aquece nosso dia no parque.",
                "Ler livros nos leva para mundos de fantasia."
              ].map((phrase, idx) => (
                <div key={idx} className="space-y-2 border border-slate-100 p-3 rounded-xl bg-slate-50/20">
                  <div className="font-mono text-base tracking-[0.05em] text-slate-300 select-none border-b border-dashed border-slate-200 pb-1 italic font-medium">
                    {phrase}
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="h-6 border-b-2 border-slate-200 border-dashed relative">
                      <span className="absolute left-1 bottom-0.5 text-[8px] font-mono text-slate-300">1</span>
                    </div>
                    <div className="h-6 border-b-2 border-slate-200 relative">
                      <span className="absolute left-1 bottom-0.5 text-[8px] font-mono text-slate-300">2</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 12. caligrafia-silabario */}
        {type === "caligrafia-silabario" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-sky-500 w-6 h-6" /> Silabário Cursivo das Famílias
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP08 • Consciência Silábica</p>
            </div>

            <div className="bg-sky-50/50 p-2.5 rounded-lg border border-dashed border-sky-300">
              <p className="text-xs font-semibold text-sky-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-sky-500" /> Instrução: Pratique as famílias silábicas cursivas cobrindo os pontilhados!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-1">
              {[
                { letter: "B", syllables: "ba  be  bi  bo  bu  bão" },
                { letter: "C", syllables: "ca  ce  ci  co  cu  cão" },
                { letter: "D", syllables: "da  de  di  do  du  dão" },
                { letter: "F", syllables: "fa  fe  fi  fo  fu  fão" },
                { letter: "G", syllables: "ga  ge  gi  go  gu  gão" }
              ].map((row, idx) => (
                <div key={idx} className="flex items-center gap-3 border border-slate-200 p-2 rounded-xl bg-white">
                  <div className="w-10 h-10 bg-sky-100 text-sky-700 font-black text-xl rounded-lg flex items-center justify-center border border-sky-200">
                    {row.letter}
                  </div>
                  <div className="flex-1 font-mono text-lg tracking-[0.2em] text-slate-300 select-none border-b border-dashed border-slate-200 pb-1 italic font-medium">
                    {row.syllables}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 13. caligrafia-coordenando */}
        {type === "caligrafia-coordenando" && (
          <div className="space-y-5">
            <div className="text-center mb-3">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <ActivityIcon className="text-emerald-500 w-6 h-6" /> Grafomotricidade & Coordenação
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EI03CG05 • Controle Visomotor Fino</p>
            </div>

            <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-dashed border-emerald-300">
              <p className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-emerald-500" /> Instrução: Cubra os tracejados de grafomotricidade das figuras para ajudá-las a chegar a suas respectivas metas!
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {[
                { label: "Caminho em Laços (Foguete 🚀 ➔ Lua 🌙)", trace: "e e e e e e e e e e e e e" },
                { label: "Caminho em Ondas (Patinho 🦆 ➔ Lagoa 🌊)", trace: "˜ ˜ ˜ ˜ ˜ ˜ ˜ ˜ ˜ ˜ ˜ ˜ ˜" },
                { label: "Caminho em Dentes (Carrinho 🚗 ➔ Garagem 🏠)", trace: "v v v v v v v v v v v v v" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1.5 border border-slate-200 p-3 rounded-xl bg-slate-50/30">
                  <span className="text-[11px] font-bold text-slate-500 block uppercase">{item.label}</span>
                  <div className="font-mono text-2xl tracking-[0.5em] text-slate-300 select-none border-b border-dashed border-slate-200 pb-2">
                    {item.trace}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 14. caligrafia-bastao */}
        {type === "caligrafia-bastao" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-amber-500 w-6 h-6" /> Letras de Fôrma / Bastão
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP11 • Letras de Fôrma Maiúsculas e Minúsculas</p>
            </div>

            <div className="bg-amber-50/50 p-2.5 rounded-lg border border-dashed border-amber-300">
              <p className="text-xs font-semibold text-amber-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-amber-500" /> Instrução: Pinte as letras bastão e cubra as linhas pontilhadas!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              {[
                { upper: "A a", word: "ABELHA 🐝", trace: "A a A a A a A a" },
                { upper: "B b", word: "BOLA ⚽", trace: "B b B b B b B b" },
                { upper: "C c", word: "CASA 🏠", trace: "C c C c C c C c" },
                { upper: "D d", word: "DADO 🎲", trace: "D d D d D d D d" }
              ].map((item, idx) => (
                <div key={idx} className="border border-slate-200 p-3 rounded-xl bg-white space-y-1">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                    <span className="font-black text-xl text-amber-600">{item.upper}</span>
                    <span className="text-[10px] font-bold text-slate-400">{item.word}</span>
                  </div>
                  <div className="font-mono text-sm tracking-[0.2em] text-slate-300 select-none pt-1">
                    {item.trace}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 15. caligrafia-frases-curtas */}
        {type === "caligrafia-frases-curtas" && (
          <div className="space-y-5">
            <div className="text-center mb-3">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <PenTool className="text-purple-500 w-6 h-6" /> Frases Curtas Cursivas
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP02 • Caligrafia de Frases Curtas</p>
            </div>

            <div className="bg-purple-50/50 p-2.5 rounded-lg border border-dashed border-purple-300">
              <p className="text-xs font-semibold text-purple-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-purple-500" /> Instrução: Treine a caligrafia copiando estas frases simples e curtas nas pautas abaixo!
              </p>
            </div>

            <div className="space-y-4 pt-1">
              {[
                "O gato dorme.",
                "A bola rola.",
                "Eu amo estudar."
              ].map((phrase, idx) => (
                <div key={idx} className="space-y-2 border border-slate-200 p-3 rounded-xl bg-white">
                  <div className="font-serif italic text-lg text-slate-300 border-b border-dashed border-slate-200 pb-1">
                    {phrase}
                  </div>
                  <div className="h-6 border-b-2 border-slate-200 relative">
                    <span className="absolute left-1 bottom-0.5 text-[8px] text-slate-300 font-mono">Pauta</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 16. letras-az */}
        {type === "letras-az" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-sky-500 w-6 h-6" /> Alfabeto A-Z (Labirintos e Tracing)
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP10 • Sequência Alfabética de A a Z</p>
            </div>

            <div className="bg-sky-50/50 p-2.5 rounded-lg border border-dashed border-sky-300">
              <p className="text-xs font-semibold text-sky-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-sky-500" /> Instrução: Conecte as letras em ordem alfabética para guiar o macaquinho Mimi até a banana fofinha!
              </p>
            </div>

            {/* Simulated mini maze of letters */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 bg-slate-50/30 flex flex-col items-center justify-center space-y-4">
              <div className="flex gap-2">
                <span className="text-xl">🐒 INÍCIO ➔</span>
                <span className="bg-sky-400 text-white font-black px-2.5 py-1 rounded">A</span>
                <span className="border border-slate-300 font-bold px-2.5 py-1 rounded text-slate-400">T</span>
                <span className="border border-slate-300 font-bold px-2.5 py-1 rounded text-slate-400">M</span>
              </div>
              <div className="flex gap-2 pl-12">
                <span className="border border-slate-300 font-bold px-2.5 py-1 rounded text-slate-400">X</span>
                <span className="bg-sky-400 text-white font-black px-2.5 py-1 rounded">B</span>
                <span className="bg-sky-400 text-white font-black px-2.5 py-1 rounded">C</span>
                <span className="border border-slate-300 font-bold px-2.5 py-1 rounded text-slate-400">K</span>
              </div>
              <div className="flex gap-2 pl-24">
                <span className="border border-slate-300 font-bold px-2.5 py-1 rounded text-slate-400">O</span>
                <span className="border border-slate-300 font-bold px-2.5 py-1 rounded text-slate-400">Y</span>
                <span className="bg-sky-400 text-white font-black px-2.5 py-1 rounded">D</span>
                <span className="bg-sky-400 text-white font-black px-2.5 py-1 rounded">E ➔ 🍌 FIM!</span>
              </div>
            </div>
          </div>
        )}

        {/* 17. caligrafia-numerais */}
        {type === "caligrafia-numerais" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <Calculator className="text-emerald-500 w-6 h-6" /> Numerais & Contagem
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01MA01 • Escrita de Números de 1 a 10</p>
            </div>

            <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-dashed border-emerald-300">
              <p className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-emerald-500" /> Instrução: Conte os objetos desenhados em cada quadro e cubra os números pontilhados ao lado!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-1">
              {[
                { number: "1", objects: "🚂 Trem", trace: "1   1   1   1   1" },
                { number: "2", objects: "🦆🦆 Patinhos", trace: "2   2   2   2   2" },
                { number: "3", objects: "⭐⭐⭐ Estrelas", trace: "3   3   3   3   3" }
              ].map((row, idx) => (
                <div key={idx} className="flex items-center gap-4 border border-slate-200 p-3 rounded-xl bg-white">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 font-black text-2xl rounded-full flex items-center justify-center border border-emerald-200">
                    {row.number}
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-black text-slate-400 uppercase block">{row.objects}</span>
                    <span className="font-mono text-xl tracking-[0.4em] text-slate-300 select-none block mt-0.5">
                      {row.trace}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 18. hora-leitura-simples */}
        {type === "hora-leitura-simples" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-pink-500 w-6 h-6" /> Hora da Leitura: Sílabas Simples
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP09 • Leitura de Sílabas Simples</p>
            </div>

            <div className="bg-pink-50/50 p-2.5 rounded-lg border border-dashed border-pink-300">
              <p className="text-xs font-semibold text-pink-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-pink-500" /> Instrução: Una as sílabas destacadas em cada balão para formar as palavras e leia-as em voz alta!
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              {[
                { syllables: ["BO", "LA"], word: "BOLA ⚽" },
                { syllables: ["GA", "TO"], word: "GATO 🐱" },
                { syllables: ["CA", "SA"], word: "CASA 🏠" }
              ].map((item, idx) => (
                <div key={idx} className="border-2 border-slate-200 p-3 rounded-2xl bg-white flex flex-col justify-between space-y-3">
                  <div className="flex justify-center gap-1">
                    {item.syllables.map((s, sIdx) => (
                      <span key={sIdx} className="bg-pink-100 text-pink-700 font-bold px-2 py-1 rounded text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-slate-100 pt-2 text-xs font-black text-slate-700">
                    {item.word}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 19. fichas-silabicas */}
        {type === "fichas-silabicas" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-indigo-500 w-6 h-6" /> Fichas Silábicas: Divisão
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP06 • Segmentação de Palavras em Sílabas</p>
            </div>

            <div className="bg-indigo-50/50 p-2.5 rounded-lg border border-dashed border-indigo-300">
              <p className="text-xs font-semibold text-indigo-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-indigo-500" /> Instrução: Separe as palavras nos quadradinhos correspondentes para treinar a divisão silábica!
              </p>
            </div>

            <div className="space-y-3 pt-1">
              {[
                { word: "PATO 🦆", count: 2, placeholder: "[   ] [   ]" },
                { word: "BANANA 🍌", count: 3, placeholder: "[   ] [   ] [   ]" },
                { word: "PIRULITO 🍭", count: 4, placeholder: "[   ] [   ] [   ] [   ]" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border border-slate-200 p-3 rounded-xl bg-white">
                  <span className="font-bold text-sm text-slate-700">{item.word}</span>
                  <span className="font-mono text-base text-indigo-400 tracking-[0.3em]">
                    {item.placeholder}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 20. silabas-complexas */}
        {type === "silabas-complexas" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-violet-500 w-6 h-6" /> Sílabas Complexas: NH, LH e CH
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP08 • Grafemas Complexos</p>
            </div>

            <div className="bg-violet-50/50 p-2.5 rounded-lg border border-dashed border-violet-300">
              <p className="text-xs font-semibold text-violet-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-violet-500" /> Instrução: Preencha as lacunas com NH, LH ou CH para completar as palavras corretamente!
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { label: "Co_ _e", tip: "Instrumento para tomar sopa 🥄" },
                { label: "Ni_ _o", tip: "A casinha fofinha dos passarinhos 🪺" },
                { label: "Chu_ _eiro", tip: "Lugar de tomar banho gostoso 🚿" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border border-slate-200 p-3 rounded-xl bg-white">
                  <div className="space-y-0.5">
                    <span className="font-bold text-base text-slate-800 tracking-wider">{item.label}</span>
                    <span className="text-[10px] text-slate-400 block font-medium">{item.tip}</span>
                  </div>
                  <div className="w-16 h-8 border-2 border-dashed border-violet-300 rounded flex items-center justify-center text-xs font-bold text-violet-400">
                    Preencher!
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 21. fluencia-leitora */}
        {type === "fluencia-leitora" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-amber-500 w-6 h-6" /> Pirâmide de Fluência Leitora
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF12LP01 • Fluência e Ritmo de Leitura</p>
            </div>

            <div className="bg-amber-50/50 p-2.5 rounded-lg border border-dashed border-amber-300">
              <p className="text-xs font-semibold text-amber-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-amber-500" /> Instrução: Leia as frases da pirâmide linha por linha, acumulando as palavras para treinar sua fluência!
              </p>
            </div>

            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 bg-slate-50/20 text-center space-y-2 py-6">
              {[
                "O",
                "O rato",
                "O rato roeu",
                "O rato roeu a roupa",
                "O rato roeu a roupa do rei!"
              ].map((line, idx) => (
                <div key={idx} className="font-bold text-slate-700 text-sm md:text-base tracking-wide py-0.5">
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 22. grafismos-nivel1 / 23. grafismos-nivel2 / 24. grafismos-nivel3 */}
        {(type === "grafismos-nivel1" || type === "grafismos-nivel2" || type === "grafismos-nivel3") && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <Grid className="text-emerald-500 w-6 h-6" /> Caderno de Grafismos Fonéticos
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EI03CG05 • Símbolos e Fonemas</p>
            </div>

            <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-dashed border-emerald-300">
              <p className="text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-emerald-500" /> Instrução: Decodifique a mensagem secreta substituindo as vogais pelos símbolos geométricos correspondentes!
              </p>
            </div>

            {/* Symbol Key */}
            <div className="grid grid-cols-5 gap-2 text-center py-2 border border-slate-200 rounded-xl bg-white">
              {[
                { letter: "A", symbol: "🔴" },
                { letter: "E", symbol: "🟦" },
                { letter: "I", symbol: "🔺" },
                { letter: "O", symbol: "🔸" },
                { letter: "U", symbol: "🟢" }
              ].map((item, idx) => (
                <div key={idx} className="text-xs font-bold text-slate-700">
                  <div className="text-slate-400 text-[10px]">{item.letter}</div>
                  <div className="mt-0.5">{item.symbol}</div>
                </div>
              ))}
            </div>

            {/* Secret word challenge */}
            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-5 bg-slate-50/20 text-center space-y-3">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">Mensagem Codificada:</span>
              <div className="flex justify-center gap-4 text-2xl font-black text-slate-700">
                <span>B 🔸 L 🔴</span>
                <span>=</span>
                <span className="text-emerald-600 border-b-2 border-dashed border-emerald-400 px-3 pb-1 text-lg">B _ L _</span>
              </div>
            </div>
          </div>
        )}

        {/* 25. caderno-leitura */}
        {type === "caderno-leitura" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-sky-500 w-6 h-6" /> Caderno de Leitura: Sílabas & Palavras
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP05 • Consolidação da Alfabetização</p>
            </div>

            <div className="bg-sky-50/50 p-2.5 rounded-lg border border-dashed border-sky-300">
              <p className="text-xs font-semibold text-sky-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-sky-500" /> Instrução: Aponte com o dedo e leia as colunas silábicas diariamente para treinar sua leitura!
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              {[
                { title: "Família M", items: ["ma", "me", "mi", "mo", "mu"] },
                { title: "Família P", items: ["pa", "pe", "pi", "po", "pu"] },
                { title: "Família T", items: ["ta", "te", "ti", "to", "tu"] }
              ].map((col, idx) => (
                <div key={idx} className="border border-slate-200 p-3 rounded-xl bg-white space-y-2">
                  <div className="font-bold text-xs text-sky-800 border-b border-sky-50 pb-1 uppercase">{col.title}</div>
                  <div className="space-y-1 font-mono text-base font-semibold text-slate-700">
                    {col.items.map((it, itIdx) => (
                      <div key={itIdx} className="hover:text-sky-500">{it}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 26. interpretacao-textos */}
        {type === "interpretacao-textos" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-amber-500 w-6 h-6" /> Compreensão & Interpretação de Texto
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF15LP03 • Interpretação Textual Infantil</p>
            </div>

            {/* Simple Reading Passage */}
            <div className="bg-amber-50 border-2 border-dashed border-amber-200 p-4 rounded-xl text-slate-700 leading-relaxed font-semibold text-xs relative">
              <span className="absolute -top-3.5 left-4 text-2xl">🦁</span>
              <h4 className="font-black text-slate-800 mb-1">A Girafa Gigi</h4>
              A Girafa Gigi adora comer as folhas mais verdinhas e altas das árvores. Ela é muito elegante e alta. Um lindo dia de sol, Gigi dividiu seu almoço delicioso com o macaquinho Mimi, seu grande amigo da floresta!
            </div>

            {/* Questions with simple blanks */}
            <div className="space-y-2.5 pt-1">
              {[
                "1. Qual é o nome da girafa da historinha?",
                "2. O que Gigi adora comer?",
                "3. Com quem Gigi dividiu seu almoço?"
              ].map((q, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <span className="font-bold text-slate-600 block">{q}</span>
                  <div className="border-b border-dashed border-slate-300 h-5" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 27. letras-vazadas */}
        {type === "letras-vazadas" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <Scissors className="text-rose-500 w-6 h-6" /> Recorte e Monte: Letras Vazadas
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EI03CG05 • Recorte e Artes Manuais</p>
            </div>

            <div className="bg-rose-50/50 p-2.5 rounded-lg border border-dashed border-rose-300">
              <p className="text-xs font-semibold text-rose-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-rose-500" /> Instrução: Recorte a letra grande vazada nas linhas pontilhadas, pinte e monte seu caderno artístico!
              </p>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 bg-slate-50/30 flex items-center justify-center h-44 relative">
              <span className="absolute top-2 left-2 text-xs font-mono text-slate-400">✂️ Siga o tracejado</span>
              <div className="w-24 h-32 border-4 border-dashed border-slate-400 rounded-2xl flex items-center justify-center">
                <span className="text-7xl font-black text-slate-300">B</span>
              </div>
            </div>
          </div>
        )}

        {/* 28. coord-fina */}
        {type === "coord-fina" && (
          <div className="space-y-5">
            <div className="text-center mb-3">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <ActivityIcon className="text-indigo-500 w-6 h-6" /> Coordenação Motora Fina: Linhas
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EI03CG05 • Desenvolvimento Motor</p>
            </div>

            <div className="bg-indigo-50/50 p-2.5 rounded-lg border border-dashed border-indigo-300">
              <p className="text-xs font-semibold text-indigo-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-indigo-500" /> Instrução: Ligue cada bichinho ao seu respectivo alimento cobrindo os tracejados de lápis de cor!
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { start: "🐜 Formiguinha", end: "🍃 Folha", path: "•  •  •  •  •  •  •  •  •  •  •  •  •  •" },
                { start: "🐒 Macaco", end: "🍌 Banana", path: "˜  ˜  ˜  ˜  ˜  ˜  ˜  ˜  ˜  ˜  ˜  ˜  ˜  ˜" }
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center border border-slate-200 p-3 rounded-xl bg-white text-xs">
                  <span className="font-bold text-slate-600">{row.start}</span>
                  <span className="font-mono text-slate-300 select-none px-2">{row.path}</span>
                  <span className="font-bold text-slate-600">{row.end}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 29. digrafos */}
        {type === "digrafos" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-teal-500 w-6 h-6" /> Dígrafos LH, NH e CH
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Habilidade BNCC: EF01LP13 • Estudo Ortográfico de Dígrafos</p>
            </div>

            <div className="bg-teal-50/50 p-2.5 rounded-lg border border-dashed border-teal-300">
              <p className="text-xs font-semibold text-teal-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-teal-500" /> Instrução: Complete as palavras com LH, NH ou CH de maneira que os termos fiquem corretos!
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { word: "Pa_ _aço", hint: "Faz todo mundo rir no circo 🤡" },
                { word: "Ga_ _inha", hint: "Bota ovo amarelinho 🐔" },
                { word: "Co_ _elho", hint: "Adora comer cenouras fresquinhas 🐰" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border border-slate-200 p-3 rounded-xl bg-white">
                  <div className="space-y-0.5">
                    <span className="font-bold text-base text-slate-800 tracking-wider">{item.word}</span>
                    <span className="text-[10px] text-slate-400 block font-medium">{item.hint}</span>
                  </div>
                  <div className="w-16 h-8 border-2 border-dashed border-teal-300 rounded flex items-center justify-center text-xs font-bold text-teal-400">
                    LH/NH/CH
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 30. portugues-resumos */}
        {type === "portugues-resumos" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <BookOpen className="text-sky-500 w-6 h-6" /> Português em Resumos: Flashcard
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Revisão Gramatical Rápida para Estudos</p>
            </div>

            <div className="bg-sky-50/50 p-2.5 rounded-lg border border-dashed border-sky-300">
              <p className="text-xs font-semibold text-sky-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-sky-500" /> Instrução: Guarde este flashcard resumo para revisar regras de gramática fundamentais!
              </p>
            </div>

            <div className="border-2 border-slate-300 rounded-2xl p-4 bg-white space-y-3 shadow-sm">
              <div className="border-b border-slate-200 pb-2">
                <span className="text-[10px] font-black text-sky-600 block uppercase">Dica nº 1 • Crase</span>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">Não se usa crase antes de verbos ou palavras masculinas. Ex: "Fomos a pé", "Passamos a estudar".</p>
              </div>
              <div>
                <span className="text-[10px] font-black text-sky-600 block uppercase">Dica nº 2 • Uso dos Porquês</span>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed"><strong>Por que:</strong> Início de perguntas. <strong>Porque:</strong> Respostas e explicações.</p>
              </div>
            </div>
          </div>
        )}

        {/* 31. portugues-concursos */}
        {type === "portugues-concursos" && (
          <div className="space-y-4">
            <div className="text-center mb-2">
              <h1 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-tight flex items-center justify-center gap-2">
                <GraduationCap className="text-indigo-500 w-6 h-6" /> Questões Gabaritadas de Português
              </h1>
              <p className="text-xs text-slate-500 mt-1 font-medium">Simulado com Questões Comentadas</p>
            </div>

            <div className="bg-indigo-50/50 p-2.5 rounded-lg border border-dashed border-indigo-300">
              <p className="text-xs font-semibold text-indigo-800 flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-indigo-500" /> Instrução: Resolva a questão múltipla escolha abaixo e confira a explicação lógica no verso!
              </p>
            </div>

            <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 bg-white space-y-3">
              <h4 className="font-bold text-xs text-slate-800">Questão 1 (Acentuação Gráfica):</h4>
              <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">Assinale a alternativa em que TODAS as palavras estão acentuadas pelo mesmo motivo da palavra <strong>café</strong>:</p>
              <div className="space-y-1.5 pl-2 text-[10px] font-medium text-slate-500">
                <div>a) [   ] Cipó, jacaré, picolé.</div>
                <div>b) [   ] Árvore, lâmpada, pássaro.</div>
                <div>c) [   ] Saúde, saída, baú.</div>
              </div>
              <div className="border-t border-slate-100 pt-2 text-[9px] font-bold text-indigo-600">
                💡 Gabarito: Letra (a) - Todas são palavras oxítonas terminadas em e/o.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer metadata element of worksheet, matches printing standard */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-400 font-medium font-sans select-none print:mt-2 print:pt-2">
        <span className="uppercase tracking-wider">Educateca • Biblioteca Digital de Atividades</span>
        <span className="mt-1 sm:mt-0 italic">Atividade gratuita licenciada para uso em sala de aula</span>
      </div>
    </div>
  );
};
