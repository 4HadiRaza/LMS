'use client';

import { categories } from '@/lib/mockData';
import { useState } from 'react';

export interface FilterState {
  category: string | null;
  level: string | null;
  priceRange: string;
  minRating: number;
  searchQuery: string;
  sortBy: string;
}

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export default function Filters({ filters, onFilterChange }: FiltersProps) {
  const [localSearch, setLocalSearch] = useState(filters.searchQuery);

  const update = (partial: Partial<FilterState>) => {
    onFilterChange({ ...filters, ...partial });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    update({ searchQuery: localSearch });
  };

  const handleReset = () => {
    setLocalSearch('');
    onFilterChange({
      category: null,
      level: null,
      priceRange: 'all',
      minRating: 0,
      searchQuery: '',
      sortBy: 'popular',
    });
  };

  return (
    <aside className="bg-white border border-sand rounded-xl p-6 shadow-card sticky top-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-forest">Filters</h3>
        <button
          onClick={handleReset}
          className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          Reset all
        </button>
      </div>

      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="mb-6">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search courses..."
            value={localSearch}
            onChange={(e) => {
              setLocalSearch(e.target.value);
              if (e.target.value === '') update({ searchQuery: '' });
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                update({ searchQuery: localSearch });
              }
            }}
            className="w-full pl-9 pr-3 py-2.5 text-sm border border-sand rounded-lg bg-cream/50 text-forest placeholder:text-sage/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
          />
        </div>
      </form>

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-sage mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.category === cat.id}
                onChange={() => update({ category: filters.category === cat.id ? null : cat.id })}
                className="w-4 h-4 rounded border-sand text-primary focus:ring-primary/20 cursor-pointer accent-primary"
              />
              <span className="text-sm text-sage group-hover:text-forest transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Expertise Level */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-sage mb-3">
          Expertise Level
        </h4>
        <div className="space-y-2">
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <label key={level} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="level"
                checked={filters.level === level}
                onChange={() => update({ level: filters.level === level ? null : level })}
                className="w-4 h-4 border-sand text-primary focus:ring-primary/20 cursor-pointer accent-primary"
              />
              <span className="text-sm text-sage group-hover:text-forest transition-colors">
                {level}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Minimum Rating */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-sage mb-3">
          Minimum Rating
        </h4>
        <div className="space-y-2">
          {[4.5, 4.0].map((r) => (
            <label key={r} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="rating"
                checked={filters.minRating === r}
                onChange={() => update({ minRating: filters.minRating === r ? 0 : r })}
                className="w-4 h-4 border-sand text-primary focus:ring-primary/20 cursor-pointer accent-primary"
              />
              <span className="text-sm text-sage group-hover:text-forest transition-colors flex items-center gap-1">
                {r}
                <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                & Up
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-sage mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {[
            { label: 'All Prices', value: 'all' },
            { label: 'Free Courses', value: 'free' },
            { label: 'Under Rs. 10,000', value: 'under-10000' },
            { label: 'Rs. 10,000 – Rs. 20,000', value: '10000-20000' },
            { label: 'Above Rs. 20,000', value: 'above-20000' },
          ].map((option) => (
            <label key={option.value} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="price"
                value={option.value}
                checked={filters.priceRange === option.value}
                onChange={() => update({ priceRange: option.value })}
                className="w-4 h-4 border-sand text-primary focus:ring-primary/20 cursor-pointer accent-primary"
              />
              <span className="text-sm text-sage group-hover:text-forest transition-colors">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
