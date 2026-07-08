import React, { useState } from "react";
import { Activity } from "../types";
import { WorksheetRenderer } from "./WorksheetRenderer";
import { ActivityCoverImage } from "./ActivityCoverImage";
import { ActivityIcon } from "./ActivityIcon";
import { 
  X, Printer, ZoomIn, ZoomOut, Check, Sparkles, AlertCircle,
  FileText, Calendar, GraduationCap, School, User, Heart
} from "lucide-react";
import { motion } from "motion/react";

interface ActivityModalProps {
  activity: Activity;
  onClose: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose }) => {
  // Personalization State for the school header
  const [schoolName, setSchoolName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [classroomStr, setClassroomStr] = useState("");

  // Zoom State for the worksheet preview container
  const [zoomScale, setZoomScale] = useState(1);

  const handleZoomIn = () => {
    if (zoomScale < 1.4) setZoomScale(prev => prev + 0.1);
  };

  const handleZoomOut = () => {
    if (zoomScale > 0.7) setZoomScale(prev => prev - 0.1);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto ui-hide-print">
      {/* Background overlay with a soft pastel peach/pink tint */}
      <div 
        className="fixed inset-0 bg-sky-950/40 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Hidden container specifically for browser window.print() */}
      <div className="hidden print:block printable-worksheet-wrapper">
        <WorksheetRenderer
          type={activity.worksheetType}
          schoolName={schoolName}
          teacherName={teacherName}
          studentName={studentName}
          dateStr={dateStr}
          classroomStr={classroomStr}
        />
      </div>

      <div className="flex min-h-screen items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative w-full max-w-6xl bg-white rounded-[40px] border-8 border-amber-300 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-h-[92vh] font-sans"
        >
          {/* Close button with a big, round, toy-like appearance */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-11 h-11 bg-rose-400 hover:bg-rose-500 hover:scale-110 active:scale-95 text-white rounded-full flex items-center justify-center transition-all cursor-pointer border-4 border-white shadow-md font-bold"
            title="Fechar"
          >
            <X className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Left panel: Info & Personalization Form (scrollable like a child's workbook) */}
          <div className="lg:col-span-5 p-6 md:p-8 overflow-y-auto border-r-4 border-dashed border-slate-100 flex flex-col justify-between max-h-[90vh] bg-pink-50/20">
            <div className="space-y-6">
              
              {/* Category & Grade Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 bg-sky-100 text-sky-800 text-xs font-black rounded-full border border-sky-300 flex items-center gap-1.5 shadow-sm">
                  <ActivityIcon name={activity.iconName} className="w-4 h-4" />
                  {activity.category}
                </span>
                
                <span className="px-3.5 py-1.5 bg-rose-100 text-rose-800 text-xs font-black rounded-full border border-rose-300 shadow-sm">
                  🧸 {activity.grade}
                </span>

                {activity.bnccCode && (
                  <span className="px-3.5 py-1.5 bg-purple-100 text-purple-800 text-xs font-black rounded-full border border-purple-300 shadow-sm uppercase tracking-wider">
                    ⭐ BNCC: {activity.bnccCode}
                  </span>
                )}
              </div>

              {/* Title & Description with beautiful children's book styling */}
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-black text-slate-800 font-display leading-tight flex items-center gap-2">
                  <span>{activity.title}</span>
                  <span className="text-xl shrink-0">🎒</span>
                </h1>
                
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 w-fit">
                  <span>Recomendado: {activity.ageRange}</span>
                  <span>•</span>
                  <span>Dificuldade: {activity.difficulty}</span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed pt-2">
                  {activity.longDescription || activity.description}
                </p>
              </div>

              {/* Objectives */}
              <div className="space-y-2.5 bg-emerald-50/40 p-4 rounded-3xl border-2 border-emerald-100">
                <h3 className="font-black text-emerald-800 text-xs uppercase tracking-wider flex items-center gap-1">
                  <span>🎯 Objetivos Pedagógicos:</span>
                </h3>
                <ul className="space-y-2">
                  {activity.objectives.map((obj, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-slate-600 leading-relaxed font-semibold">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PDF Cover Art Preview Card */}
              <div className="space-y-3 bg-white p-4 rounded-3xl border-4 border-amber-100 shadow-sm flex flex-col items-center">
                <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest block text-center">
                  Capa da Apostila / PDF 📖
                </span>
                <div className="w-full max-w-[200px] aspect-[1/1.414] rounded-2xl overflow-hidden border-2 border-slate-100 shadow-md">
                  <ActivityCoverImage activity={activity} size="medium" />
                </div>
              </div>
            </div>

            {/* Print button footer block (super fun big buttons) */}
            <div className="border-t-4 border-dashed border-slate-100 pt-6 mt-6 space-y-3">
              <button
                onClick={handlePrint}
                className="w-full py-4 px-5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white rounded-2xl font-black text-sm tracking-wide shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer border-b-4 border-emerald-600"
              >
                <Printer className="w-5 h-5 stroke-[2.5]" />
                <span>IMPRIMIR / BAIXAR PDF 🌈</span>
              </button>
              
              <div className="flex gap-2.5 p-3 bg-amber-50 rounded-2xl text-[11px] text-amber-800 border border-amber-200 leading-relaxed font-semibold">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>💡 <strong>Como salvar no celular ou PC:</strong> Clique no botão verde de imprimir e selecione a opção <strong>"Salvar como PDF"</strong> no navegador!</span>
              </div>
            </div>
          </div>

          {/* Right panel: Live PDF Simulation Viewer (styled like an artsy school easel) */}
          <div className="lg:col-span-7 bg-sky-50/60 p-4 md:p-6 flex flex-col justify-between max-h-[92vh] overflow-hidden">
            
            {/* PDF Viewer Topbar with wood easel style */}
            <div className="flex items-center justify-between border-b-4 border-sky-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-sky-400 flex items-center justify-center text-xs">🖍️</div>
                <span className="text-xs font-black text-sky-800 uppercase tracking-wider font-display">
                  Folha de Atividade Pronta
                </span>
              </div>

              {/* Scale Zoom Controls */}
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm border-2 border-sky-100">
                <button 
                  onClick={handleZoomOut}
                  disabled={zoomScale <= 0.7}
                  className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 text-slate-500 rounded-full transition-all disabled:opacity-40 cursor-pointer"
                  title="Diminuir Zoom"
                >
                  <ZoomOut className="w-4 h-4 stroke-[2.5]" />
                </button>
                <span className="text-[10px] font-black text-sky-800 min-w-[36px] text-center font-mono select-none">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button 
                  onClick={handleZoomIn}
                  disabled={zoomScale >= 1.4}
                  className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 text-slate-500 rounded-full transition-all disabled:opacity-40 cursor-pointer"
                  title="Aumentar Zoom"
                >
                  <ZoomIn className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Central Worksheet Stage - Styled with school desk shadows */}
            <div className="flex-1 overflow-auto flex items-start justify-center p-3 rounded-3xl bg-amber-100/30 border-4 border-amber-200/40 relative">
              <div 
                className="transition-all duration-200 origin-top shadow-xl rounded-2xl"
                style={{ transform: `scale(${zoomScale})` }}
              >
                <WorksheetRenderer
                  type={activity.worksheetType}
                  schoolName={schoolName}
                  teacherName={teacherName}
                  studentName={studentName}
                  dateStr={dateStr}
                  classroomStr={classroomStr}
                />
              </div>
            </div>

            {/* Quick Helper text below */}
            <div className="pt-3 text-center text-xs font-bold text-sky-800 select-none flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Sua folha de atividades será impressa exatamente assim! ✨</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
