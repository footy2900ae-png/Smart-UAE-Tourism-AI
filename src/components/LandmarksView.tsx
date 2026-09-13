import React, { useState } from 'react';
import { UAE_LANDMARKS } from '../data/mockData';
import { Landmark } from '../types';

interface LandmarksViewProps {
  onPlanLandmarkInChat: (landmarkName: string) => void;
  onOpenARScan: (landmarkHint: string) => void;
}

export const LandmarksView: React.FC<LandmarksViewProps> = ({
  onPlanLandmarkInChat,
  onOpenARScan,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEmirate, setSelectedEmirate] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Heritage', 'Cultural', 'Modern', 'Nature'];
  const emirates = ['All', 'Abu Dhabi', 'Dubai'];

  const filteredLandmarks = UAE_LANDMARKS.filter((l) => {
    const matchesCategory = selectedCategory === 'All' || l.category === selectedCategory;
    const matchesEmirate =
      selectedEmirate === 'All' || l.emirate.toLowerCase().includes(selectedEmirate.toLowerCase());
    const matchesSearch =
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.architecturalStyle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesEmirate && matchesSearch;
  });

  return (
    <div className="flex-1 overflow-y-auto bg-[#101418] text-[#e1e2e9] p-6 lg:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#504535]/50 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191c21] border border-[#504535] text-xs font-['Space_Grotesk'] text-[#ffc665] mb-2">
            <span className="material-symbols-outlined text-sm" data-icon="travel_explore">
              travel_explore
            </span>
            <span>Emirates Heritage & Modern Marvels Catalog</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[#e1e2e9]">
            UAE Iconic Landmarks
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#9d8f7c]">
            Explore architectural mastery, visitor etiquette, and sustainable transit connections.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#9d8f7c] text-lg" data-icon="search">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search landmarks or styles..."
            className="w-full bg-[#191c21] border border-[#504535] rounded-xl pl-10 pr-4 py-2 text-xs text-[#e1e2e9] placeholder-[#9d8f7c] focus:outline-none focus:border-[#ffc665]"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-['Space_Grotesk'] text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#e5a93c] text-[#432c00]'
                  : 'bg-[#191c21] border border-[#504535] text-[#d4c4b0] hover:text-[#e1e2e9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Emirate Filter */}
        <div className="flex items-center gap-2">
          <span className="font-['Space_Grotesk'] text-xs text-[#9d8f7c]">Emirate:</span>
          {emirates.map((em) => (
            <button
              key={em}
              onClick={() => setSelectedEmirate(em)}
              className={`px-3 py-1 rounded-lg font-['Space_Grotesk'] text-xs font-medium transition-all cursor-pointer ${
                selectedEmirate === em
                  ? 'bg-[#272a2f] border border-[#ffc665] text-[#ffc665]'
                  : 'text-[#9d8f7c] hover:text-[#e1e2e9]'
              }`}
            >
              {em}
            </button>
          ))}
        </div>
      </div>

      {/* Landmarks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLandmarks.map((landmark) => (
          <div
            key={landmark.id}
            className="rounded-2xl bg-[#191c21] border border-[#504535]/60 overflow-hidden hover:border-[#ffc665] transition-all flex flex-col justify-between group shadow-lg"
          >
            <div>
              {/* Image with Tag Overlay */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={landmark.image}
                  alt={landmark.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#504535] text-[11px] font-['Space_Grotesk'] font-bold text-[#ffc665]">
                  {landmark.emirate}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#272a2f]/90 backdrop-blur-md text-[10px] font-['Space_Grotesk'] text-[#e1e2e9]">
                  {landmark.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 space-y-3">
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#e1e2e9] group-hover:text-[#ffc665] transition-colors">
                  {landmark.name}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#d4c4b0] leading-relaxed line-clamp-3">
                  {landmark.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#504535]/40 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#e9c349] text-base shrink-0 mt-0.5" data-icon="architecture">
                      architecture
                    </span>
                    <span className="text-[#9d8f7c] font-['Plus_Jakarta_Sans']">
                      <strong className="text-[#e1e2e9]">Style:</strong> {landmark.architecturalStyle}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#22c55e] text-base shrink-0 mt-0.5" data-icon="schedule">
                      schedule
                    </span>
                    <span className="text-[#9d8f7c] font-['Plus_Jakarta_Sans']">
                      <strong className="text-[#e1e2e9]">Best Time:</strong> {landmark.bestHours}
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#89b5fc] text-base shrink-0 mt-0.5" data-icon="electric_bus">
                      electric_bus
                    </span>
                    <span className="text-[#9d8f7c] font-['Plus_Jakarta_Sans']">
                      <strong className="text-[#e1e2e9]">Transit:</strong> {landmark.transit}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="p-4 bg-[#101418] border-t border-[#504535]/50 flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenARScan(landmark.name)}
                className="px-3 py-1.5 rounded-lg bg-[#272a2f] border border-[#504535] hover:border-[#ffc665] text-xs font-['Space_Grotesk'] font-semibold text-[#ffc665] transition-all flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm" data-icon="camera">
                  camera
                </span>
                <span>AR Scan</span>
              </button>

              <button
                onClick={() => onPlanLandmarkInChat(landmark.name)}
                className="px-3 py-1.5 rounded-lg bg-[#e5a93c] text-[#432c00] hover:bg-[#ffc665] text-xs font-['Space_Grotesk'] font-bold transition-all flex items-center gap-1 cursor-pointer shadow"
              >
                <span>Plan in Chat</span>
                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
