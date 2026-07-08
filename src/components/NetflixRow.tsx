import React, { useRef, useState, useEffect } from "react";
import { Activity } from "../types";
import { ActivityIcon } from "./ActivityIcon";
import { ChevronLeft, ChevronRight, Eye, Download, Star } from "lucide-react";
import { motion } from "motion/react";
import { ActivityCoverImage } from "./ActivityCoverImage";

interface NetflixRowProps {
  title: string;
  activities: Activity[];
  onSelectActivity: (activity: Activity) => void;
}

export const NetflixRow: React.FC<NetflixRowProps> = ({ title, activities, onSelectActivity }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkArrows = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = rowRef.current;
    if (el) {
      el.addEventListener("scroll", checkArrows);
      checkArrows();
      window.addEventListener("resize", checkArrows);
    }
    return () => {
      if (el) el.removeEventListener("scroll", checkArrows);
      window.removeEventListener("resize", checkArrows);
    };
  }, [activities]);

  const handleScroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { clientWidth } = rowRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (activities.length === 0) return null;

  // Map category or title to specific fun pastel combinations to keep theme colorful
  const getPastelColor = (category: string) => {
    switch (category) {
      case "Matemática": return "bg-sky-100 text-sky-700 border-sky-300";
      case "Alfabetização": return "bg-rose-100 text-rose-700 border-rose-300";
      case "Coordenação Motora": return "bg-emerald-100 text-emerald-700 border-emerald-300";
      case "Colorir": return "bg-purple-100 text-purple-700 border-purple-300";
      case "Ciências": return "bg-amber-100 text-amber-700 border-amber-300";
      default: return "bg-indigo-100 text-indigo-700 border-indigo-300";
    }
  };

  return (
    <div className="relative space-y-4 group/row select-none">
      {/* Category Row Title with a super cute book/crayon theme */}
      <div className="flex items-center gap-3 px-6 md:px-12">
        <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-lg shadow-sm">
          🎈
        </div>
        <h2 className="text-xl md:text-2xl font-bold font-display text-slate-800 tracking-tight flex items-center gap-2">
          {title}
        </h2>
        {/* Playful dotted line */}
        <div className="h-1 flex-1 border-b-4 border-dotted border-slate-200" />
        <span className="text-xs font-black text-amber-500 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full uppercase tracking-wider">
          {activities.length} {activities.length === 1 ? "Livrinho" : "Livrinhas"}
        </span>
      </div>

      {/* Row Wrapper with arrows */}
      <div className="relative px-6 md:px-12">
        {/* Left Arrow Button (styled like a cute yellow button) */}
        {showLeftArrow && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-amber-300 hover:bg-amber-400 text-slate-800 rounded-full flex items-center justify-center transition-all opacity-100 md:opacity-0 group-hover/row:opacity-100 cursor-pointer shadow-md hover:scale-110 active:scale-95 border-2 border-white"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>
        )}

        {/* Right Arrow Button (styled like a cute yellow button) */}
        {showRightArrow && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-amber-300 hover:bg-amber-400 text-slate-800 rounded-full flex items-center justify-center transition-all opacity-100 md:opacity-0 group-hover/row:opacity-100 cursor-pointer shadow-md hover:scale-110 active:scale-95 border-2 border-white"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>
        )}

        {/* Horizontal Scrolling Box */}
        <div
          ref={rowRef}
          className="flex gap-6 overflow-x-auto py-4 scrollbar-none scroll-smooth px-2"
          style={{ scrollbarWidth: "none" }}
        >
          {activities.map((act) => (
            <motion.div
              key={act.id}
              whileHover={{ 
                scale: 1.05,
                y: -6,
                transition: { type: "spring", stiffness: 350, damping: 15 }
              }}
              className="flex-none w-64 md:w-72 bg-white rounded-3xl border-4 border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => onSelectActivity(act)}
            >
              {/* Card Thumbnail cover with realistic PDF cover page */}
              <div className="h-44 w-full relative overflow-hidden">
                <ActivityCoverImage activity={act} size="small" />
              </div>

              {/* Card Body Info */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider">
                    <span className={`px-2 py-0.5 rounded-md border ${getPastelColor(act.category)}`}>
                      {act.category}
                    </span>
                    {act.bnccCode && (
                      <span className="bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded-md text-slate-500 font-mono">
                        BNCC: {act.bnccCode}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-slate-800 text-base md:text-lg tracking-tight leading-snug mt-2 font-display hover:text-amber-500 transition-colors">
                    {act.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-3 border-t-2 border-dashed border-slate-100 flex items-center gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectActivity(act);
                    }}
                    className="flex-1 py-2.5 px-3 bg-amber-100 hover:bg-amber-200 text-slate-800 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:scale-[1.02]"
                  >
                    <Eye className="w-4 h-4 stroke-[2.5]" />
                    <span>Visualizar</span>
                  </button>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectActivity(act);
                    }}
                    className="py-2.5 px-3 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-xl transition-all flex items-center justify-center cursor-pointer shadow-sm hover:scale-[1.02]"
                    title="Baixar PDF / Imprimir"
                  >
                    <Download className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
