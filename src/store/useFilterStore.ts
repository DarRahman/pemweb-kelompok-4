import { create } from 'zustand';

interface FilterState {
  searchQuery: string;
  sortOrder: 'asc' | 'desc' | 'none';
  setSearchQuery: (query: string) => void;
  setSortOrder: (order: 'asc' | 'desc' | 'none') => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  searchQuery: '',
  sortOrder: 'none',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSortOrder: (order) => set({ sortOrder: order }),
}));