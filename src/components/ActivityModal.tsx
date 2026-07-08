import React from "react";
import { createPortal } from "react-dom";
import { Activity } from "../types";
import { WorksheetRenderer } from "./WorksheetRenderer";
import { ActivityIcon } from "./ActivityIcon";
import { X, ArrowDownToLine, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

interface ActivityModalProps {
  activity: Activity;
  onClose: () => void;
}

// Map each category to its exact visual style requested by the user
const categoryModalStyles: Record<string, {
  bgColor: string;
  borderColor: string;
  textColor: string;
  badgeBg: string;
  badgeText: string;
  btnBg: string;
  iconBg: string;
}> = {
  "Matemática": {
    bgColor: "bg-blue-50/95",
    borderColor: "border-blue-300",
    textColor: "text-blue-950",
    badgeBg: "bg-blue-100/80 border-blue-300",
    badgeText: "text-blue-800",
    btnBg: "bg-blue-500 hover:bg-blue-600 border-blue-700 text-white shadow-blue-100",
    iconBg: "bg-blue-200/50 text-blue-700",
  },
  "Coordenação Motora": {
    bgColor: "bg-emerald-50/95",
    borderColor: "border-emerald-300",
    textColor: "text-emerald-950",
    badgeBg: "bg-emerald-100/80 border-emerald-300",
    badgeText: "text-emerald-800",
    btnBg: "bg-emerald-500 hover:bg-emerald-600 border-emerald-700 text-white shadow-emerald-100",
    iconBg: "bg-emerald-200/50 text-emerald-700",
  },
  "Ciências": {
    bgColor: "bg-emerald-50/95",
    borderColor: "border-emerald-300",
    textColor: "text-emerald-950",
    badgeBg: "bg-emerald-100/80 border-emerald-300",
    badgeText: "text-emerald-800",
    btnBg: "bg-emerald-500 hover:bg-emerald-600 border-emerald-700 text-white shadow-emerald-100",
    iconBg: "bg-emerald-200/50 text-emerald-700",
  },
  "Alfabetização": {
    bgColor: "bg-amber-50/95",
    borderColor: "border-amber-300",
    textColor: "text-amber-950",
    badgeBg: "bg-amber-100/80 border-amber-300",
    badgeText: "text-amber-800",
    btnBg: "bg-amber-400 hover:bg-amber-500 border-amber-600 text-slate-800 shadow-amber-100",
    iconBg: "bg-amber-200/50 text-amber-700",
  },
  "Educação Infantil": {
    bgColor: "bg-amber-50/95",
    borderColor: "border-amber-300",
    textColor: "text-amber-950",
    badgeBg: "bg-amber-100/80 border-amber-300",
    badgeText: "text-amber-800",
    btnBg: "bg-amber-400 hover:bg-amber-500 border-amber-600 text-slate-800 shadow-amber-100",
    iconBg: "bg-amber-200/50 text-amber-700",
  },
  "Português": {
    bgColor: "bg-purple-50/95",
    borderColor: "border-purple-300",
    textColor: "text-purple-950",
    badgeBg: "bg-purple-100/80 border-purple-300",
    badgeText: "text-purple-800",
    btnBg: "bg-purple-500 hover:bg-purple-600 border-purple-700 text-white shadow-purple-100",
    iconBg: "bg-purple-200/50 text-purple-700",
  },
  "Caligrafia": {
    bgColor: "bg-purple-50/95",
    borderColor: "border-purple-300",
    textColor: "text-purple-950",
    badgeBg: "bg-purple-100/80 border-purple-300",
    badgeText: "text-purple-800",
    btnBg: "bg-purple-500 hover:bg-purple-600 border-purple-700 text-white shadow-purple-100",
    iconBg: "bg-purple-200/50 text-purple-700",
  },
  "Artes": {
    bgColor: "bg-orange-50/95",
    borderColor: "border-orange-300",
    textColor: "text-orange-950",
    badgeBg: "bg-orange-100/80 border-orange-300",
    badgeText: "text-orange-800",
    btnBg: "bg-orange-500 hover:bg-orange-600 border-orange-700 text-white shadow-orange-100",
    iconBg: "bg-orange-200/50 text-orange-700",
  },
  "Datas Comemorativas": {
    bgColor: "bg-orange-50/95",
    borderColor: "border-orange-300",
    textColor: "text-orange-950",
    badgeBg: "bg-orange-100/80 border-orange-300",
    badgeText: "text-orange-800",
    btnBg: "bg-orange-500 hover:bg-orange-600 border-orange-700 text-white shadow-orange-100",
    iconBg: "bg-orange-200/50 text-orange-700",
  },
  "Colorir": {
    bgColor: "bg-pink-50/95",
    borderColor: "border-pink-300",
    textColor: "text-pink-950",
    badgeBg: "bg-pink-100/80 border-pink-300",
    badgeText: "text-pink-800",
    btnBg: "bg-pink-500 hover:bg-pink-600 border-pink-700 text-white shadow-pink-100",
    iconBg: "bg-pink-200/50 text-pink-700",
  },
  "Jogos Educativos": {
    bgColor: "bg-red-50/95",
    borderColor: "border-red-300",
    textColor: "text-red-950",
    badgeBg: "bg-red-100/80 border-red-300",
    badgeText: "text-red-800",
    btnBg: "bg-red-500 hover:bg-red-600 border-red-700 text-white shadow-red-100",
    iconBg: "bg-red-200/50 text-red-700",
  }
};

const defaultStyle = {
  bgColor: "bg-amber-50/95",
  borderColor: "border-amber-300",
  textColor: "text-amber-950",
  badgeBg: "bg-amber-100/80 border-amber-300",
  badgeText: "text-amber-800",
  btnBg: "bg-amber-400 hover:bg-amber-500 border-amber-600 text-slate-800 shadow-amber-100",
  iconBg: "bg-amber-200/50 text-amber-700",
};

export const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose }) => {
  const style = categoryModalStyles[activity.category] || defaultStyle;

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ui-hide-print">
      {/* Background soft overlay */}
      <div 
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* RENDER THE HIDDEN WORKSHEET PORTAL ON DOCUMENT.BODY */}
      {/* Since this is a direct child of body, #root display:none during media print won't hide it */}
      {createPortal(
        <div className="hidden print:block printable-worksheet-wrapper">
          <WorksheetRenderer
            type={activity.worksheetType}
            schoolName=""
            teacherName=""
            studentName=""
            dateStr=""
            classroomStr=""
          />
        </div>,
        document.body
      )}

      {/* Cute and simple mini popup card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={`relative w-full max-w-md bg-white rounded-[32px] border-8 ${style.borderColor} shadow-2xl p-6 text-center font-sans overflow-hidden`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-slate-100 hover:bg-slate-200 hover:scale-105 active:scale-95 text-slate-500 rounded-full flex items-center justify-center transition-all cursor-pointer border border-slate-200"
          title="Fechar"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        <div className="flex flex-col items-center mt-2">
          {/* Large Kid-Friendly Category Icon Bubble */}
          <div className={`w-16 h-16 rounded-3xl ${style.iconBg} flex items-center justify-center shadow-inner mb-4`}>
            <ActivityIcon name={activity.iconName} className="w-8 h-8" />
          </div>

          {/* Cute Discipline Badge */}
          <span className={`px-4 py-1.5 ${style.badgeBg} ${style.badgeText} text-xs font-black rounded-full border mb-3 flex items-center gap-1.5 uppercase tracking-wide`}>
            ⭐ {activity.category}
          </span>

          {/* Activity Title */}
          <h2 className="text-xl md:text-2xl font-black text-slate-800 leading-tight font-display mb-6 px-2">
            {activity.title}
          </h2>

          {/* SINGLE BIG DOWNLOAD BUTTON */}
          <button
            onClick={handleDownload}
            className={`w-full py-4 px-6 rounded-2xl ${style.btnBg} font-black text-base tracking-wide shadow-md hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border-b-4 border-black/20`}
          >
            <ArrowDownToLine className="w-5 h-5 stroke-[2.5]" />
            <span>Baixar Atividade (PDF) 🌈</span>
          </button>

          {/* Helpful Kid-Friendly Notice */}
          <div className="flex gap-2 p-3 mt-4 bg-slate-50 rounded-2xl text-[10px] text-slate-500 border border-slate-100 leading-relaxed font-semibold text-left">
            <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span><strong>Como salvar no celular ou PC:</strong> Na tela de impressão que vai abrir, selecione a opção <strong>"Salvar como PDF"</strong> e guarde no seu aparelho!</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
