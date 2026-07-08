import React from "react";
import { 
  BookOpen, Calculator, Activity as ActivityIconComponent, Palette, 
  Droplet, Paintbrush, PenTool, Sparkles, TreePine, Grid, 
  HelpCircle, LucideIcon 
} from "lucide-react";

interface ActivityIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Calculator,
  Activity: ActivityIconComponent,
  Palette,
  Droplet,
  Paintbrush,
  PenTool,
  Sparkles,
  TreePine,
  Grid
};

export const ActivityIcon: React.FC<ActivityIconProps> = ({ name, className = "w-5 h-5" }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} />;
};
