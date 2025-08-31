import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarNewProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchBarNew({ searchQuery, onSearchChange }: SearchBarNewProps) {
  return (
    <section className="py-12 section-blur" data-testid="search-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 dark:text-white/50" />
              </div>
              <input
                type="text"
                placeholder="Cari glamping atau villa impian Anda..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-2xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent backdrop-blur-md transition-all duration-300"
                data-testid="input-search"
              />
            </div>
            
            {/* Filter Button */}
            <Button className="btn-secondary flex items-center space-x-2 whitespace-nowrap" data-testid="button-filter">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
          
          {/* Search Results Count */}
          {searchQuery && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 dark:text-white/70 text-sm">
                Menampilkan hasil pencarian untuk "<span className="text-primary-600 dark:text-primary-300 font-medium">{searchQuery}</span>"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}