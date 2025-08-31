import { Home, Tent } from "lucide-react";
import type { PropertyType } from "@shared/schema";

interface FloatingToggleNewProps {
  currentType: PropertyType;
  onToggle: () => void;
}

export default function FloatingToggleNew({ currentType, onToggle }: FloatingToggleNewProps) {
  return (
    <div className="fixed bottom-8 right-8 z-50" data-testid="floating-toggle">
      <div className="glass-card p-2 rounded-2xl">
        <div className="flex items-center space-x-2">
          <button
            onClick={onToggle}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              currentType === "glamping" 
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            data-testid="button-toggle-glamping"
          >
            <Tent className="w-5 h-5" />
            <span>Glamping</span>
          </button>
          
          <button
            onClick={onToggle}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              currentType === "villa" 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
            data-testid="button-toggle-villa"
          >
            <Home className="w-5 h-5" />
            <span>Villa</span>
          </button>
        </div>
      </div>
    </div>
  );
}