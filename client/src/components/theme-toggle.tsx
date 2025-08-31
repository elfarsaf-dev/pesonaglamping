import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="relative w-12 h-12 rounded-full glass-card hover:glass-card transition-all duration-300 group"
      data-testid="theme-toggle"
    >
      <div className="relative w-6 h-6">
        {/* Galaxy/Moon Icon */}
        <Moon 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 text-white ${
            theme === 'galaxy' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`}
        />
        
        {/* Sun Icon */}
        <Sun 
          className={`absolute inset-0 w-6 h-6 transition-all duration-500 text-yellow-500 ${
            theme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="glass-card px-3 py-1 rounded-lg">
          <span className="text-xs text-white whitespace-nowrap">
            {theme === 'galaxy' ? 'Mode Siang' : 'Mode Galaxy'}
          </span>
        </div>
      </div>
    </Button>
  );
}