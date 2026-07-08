import React from "react";
import { Activity } from "../types";
import { 
  BookOpen, Calculator, Activity as ActivityIcon, Palette, 
  Droplet, Paintbrush, PenTool, Sparkles, TreePine, Grid, 
  ArrowRight, Heart, Star, Smile, Scissors, HelpCircle, GraduationCap
} from "lucide-react";

interface ActivityCoverImageProps {
  activity: Activity;
  size?: "small" | "large";
}

export const ActivityCoverImage: React.FC<ActivityCoverImageProps> = ({ activity, size = "small" }) => {
  const isLarge = size === "large";
  
  // Custom colors based on activity coverColor
  const bgGradient = activity.coverColor || "from-sky-400 to-indigo-500";
  
  // Helper to get cute graphic icons/drawings to show on the cover
  const renderCoverIllustration = () => {
    const iconClass = isLarge ? "w-20 h-20 text-white/90 drop-shadow-md" : "w-10 h-10 text-white/90";
    
    switch (activity.worksheetType) {
      case "vogais":
        return (
          <div className="relative flex items-center justify-center">
            <span className={`${isLarge ? "text-5xl" : "text-2xl"} font-black text-amber-300 drop-shadow-md animate-bounce`}>A E I O U</span>
            <span className="absolute -top-4 -right-4 text-xl">🐝</span>
          </div>
        );
      case "soma":
        return (
          <div className="flex items-center gap-1 font-black text-white">
            <span className={isLarge ? "text-4xl" : "text-xl"}>5</span>
            <span className={`${isLarge ? "text-3xl" : "text-lg"} text-amber-300`}>+</span>
            <span className={isLarge ? "text-4xl" : "text-xl"}>3</span>
            <span className={`${isLarge ? "text-3xl" : "text-lg"} text-amber-300`}>=</span>
            <span className={`px-2 py-0.5 rounded bg-amber-400 ${isLarge ? "text-4xl" : "text-xl"} text-slate-800`}>8</span>
          </div>
        );
      case "coord-motora":
      case "caligrafia-coordenando":
      case "coord-fina":
        return (
          <div className="w-full max-w-[80%] space-y-2">
            <div className="border-t-2 border-dashed border-white/60 h-2 w-full rounded relative">
              <span className="absolute -top-2 left-0 text-sm">🦋</span>
              <span className="absolute -top-2 right-0 text-sm">🌸</span>
            </div>
            <div className="border-t-2 border-dotted border-white/80 h-2 w-full rounded relative">
              <span className="absolute -top-2 left-1/2 text-sm">🐌</span>
            </div>
          </div>
        );
      case "colorir":
        return (
          <div className="flex gap-2">
            <span className="text-3xl animate-pulse">🎨</span>
            <span className="text-2xl rotate-12">🖍️</span>
            <span className="text-2xl -rotate-12">🦁</span>
          </div>
        );
      case "ciencias-agua":
        return (
          <div className="relative flex flex-col items-center">
            <span className="text-4xl">☁️</span>
            <span className="text-xl -mt-1 animate-bounce">🌧️</span>
          </div>
        );
      case "cores":
        return (
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-red-400 border border-white" />
            <div className="w-8 h-8 rounded-full bg-blue-400 border border-white" />
            <div className="w-8 h-8 rounded-full bg-yellow-400 border border-white" />
          </div>
        );
      case "caligrafia":
      case "caligrafia-frases":
      case "caligrafia-bastao":
      case "caligrafia-frases-curtas":
        return (
          <div className="w-full flex flex-col items-center space-y-1">
            <div className="w-full h-0.5 bg-white/40" />
            <span className={`font-serif italic tracking-wider text-amber-200 ${isLarge ? "text-2xl" : "text-sm"}`}>Letra Cursiva</span>
            <div className="w-full h-0.5 bg-white/40" />
          </div>
        );
      case "caligrafia-silabario":
      case "hora-leitura-simples":
      case "fichas-silabicas":
      case "silabas-complexas":
        return (
          <div className="flex gap-1.5 font-bold">
            <span className="bg-white/20 px-2 py-1 rounded text-sm text-white">BA</span>
            <span className="bg-white/20 px-2 py-1 rounded text-sm text-amber-200">BE</span>
            <span className="bg-white/20 px-2 py-1 rounded text-sm text-white">BI</span>
          </div>
        );
      case "letras-az":
        return (
          <div className="relative w-12 h-12 border-2 border-white/60 rounded flex items-center justify-center font-black text-xl text-white">
            A-Z
            <span className="absolute -bottom-2 -right-2 text-sm">🧩</span>
          </div>
        );
      case "caligrafia-numerais":
        return (
          <div className="flex gap-2 items-center font-black text-white text-xl">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span className="text-amber-300">🚂</span>
          </div>
        );
      case "fluencia-leitora":
        return (
          <div className="flex flex-col items-center space-y-0.5">
            <span className="text-[10px] bg-white/20 px-1 rounded">A</span>
            <span className="text-[11px] bg-white/20 px-1.5 rounded">A Ana</span>
            <span className="text-[12px] bg-white/20 px-2 rounded">A Ana adora</span>
          </div>
        );
      case "grafismos-nivel1":
      case "grafismos-nivel2":
      case "grafismos-nivel3":
        return (
          <div className="flex gap-1">
            <span className="text-lg">🔴</span>
            <span className="text-lg">🟦</span>
            <span className="text-lg">🔺</span>
          </div>
        );
      case "caderno-leitura":
        return (
          <div className="flex flex-col items-center">
            <span className="text-3xl">🗣️</span>
            <span className="text-xs font-bold text-amber-300">BOQUINHAS</span>
          </div>
        );
      case "interpretacao-textos":
        return (
          <div className="flex items-center gap-1 bg-white/10 p-1.5 rounded border border-white/20">
            <BookOpen className="w-6 h-6 text-white" />
            <span className="text-[10px] font-bold">HISTÓRIAS</span>
          </div>
        );
      case "letras-vazadas":
        return (
          <div className="relative">
            <span className="text-3xl font-black text-white outline-dashed outline-1">A</span>
            <Scissors className="w-4 h-4 text-white absolute -bottom-2 -right-2" />
          </div>
        );
      case "digrafos":
        return (
          <div className="flex gap-1 font-black text-white text-xs">
            <span className="bg-rose-500/40 px-1 py-0.5 rounded">LH</span>
            <span className="bg-sky-500/40 px-1 py-0.5 rounded">NH</span>
            <span className="bg-emerald-500/40 px-1 py-0.5 rounded">CH</span>
          </div>
        );
      case "portugues-resumos":
        return (
          <div className="flex flex-col items-center">
            <span className="text-xs font-black tracking-widest text-amber-300">RESUMOS</span>
            <span className="text-xl">💡</span>
          </div>
        );
      case "portugues-concursos":
        return (
          <div className="flex flex-col items-center">
            <span className="text-lg">🏆</span>
            <span className="text-[9px] font-black bg-white text-slate-800 px-1 rounded">GABARITO</span>
          </div>
        );
      default:
        return <BookOpen className={iconClass} />;
    }
  };

  return (
    <div className={`w-full h-full bg-gradient-to-br ${bgGradient} relative overflow-hidden flex flex-col justify-between p-4 md:p-6 select-none shadow-inner`}>
      {/* Notebook binder rings style on the left side */}
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/15 flex flex-col justify-around py-4 z-20">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-2 h-4 bg-slate-300 rounded-full border border-slate-400 shadow-sm -ml-0.5" />
        ))}
      </div>

      {/* Decorative vertical binding line */}
      <div className="absolute left-3.5 top-0 bottom-0 w-1 border-r border-dashed border-white/20 z-10" />

      {/* Background cute watermark patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-4 right-10 text-xl">⭐</div>
        <div className="absolute bottom-10 right-4 text-2xl">✏️</div>
        <div className="absolute top-1/2 left-8 text-sm">☁️</div>
        <div className="absolute bottom-4 left-10 text-xl">🌈</div>
      </div>

      {/* Top Tag & Info */}
      <div className="pl-3 flex justify-between items-center z-10">
        <span className="text-[9px] md:text-[10px] font-black tracking-wider uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 shadow-sm text-white">
          {activity.grade}
        </span>
        <span className="text-[8px] md:text-[9px] font-black tracking-widest text-white/50 uppercase font-mono">
          PDF COMPLETO
        </span>
      </div>

      {/* Mid Visual Area: Illustration */}
      <div className="pl-3 flex-1 flex flex-col items-center justify-center py-2 z-10">
        <div className={`p-4 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-md flex items-center justify-center ${isLarge ? "w-32 h-32" : "w-16 h-16"}`}>
          {renderCoverIllustration()}
        </div>
      </div>

      {/* Bottom Title area styled like a classic school book */}
      <div className="pl-3 z-10 space-y-1">
        <span className="text-[9px] font-bold tracking-wider text-amber-300 uppercase block font-display">
          {activity.category}
        </span>
        <h3 className={`font-black tracking-tight text-white font-display leading-tight line-clamp-2 ${isLarge ? "text-xl md:text-2xl" : "text-sm"}`}>
          {activity.title}
        </h3>
        <div className="flex items-center gap-1 text-[8px] font-bold text-white/70">
          <span>{activity.pagesCount} Páginas</span>
          <span>•</span>
          <span>BNCC: {activity.bnccCode || "COMPLETO"}</span>
        </div>
      </div>
    </div>
  );
};
