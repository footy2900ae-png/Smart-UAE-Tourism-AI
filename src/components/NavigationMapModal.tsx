import React, { useState } from 'react';
import { INITIAL_ITINERARY_STOPS } from '../data/mockData';

interface NavigationMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationMapModal: React.FC<NavigationMapModalProps> = ({ isOpen, onClose }) => {
  const [activeStopIndex, setActiveStopIndex] = useState(0);

  if (!isOpen) return null;

  const currentStop = INITIAL_ITINERARY_STOPS[activeStopIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#191c21] border border-[#504535] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-[#101418] border-b border-[#504535] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#ffc665] text-xl" data-icon="map">
              map
            </span>
            <div>
              <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#e1e2e9]">
                AR Navigation Map & Cultural Corridor
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                Abu Dhabi Mainland & Saadiyat Eco-Transit Route • Zero Emission Bus & Pod Network
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9d8f7c] hover:text-[#e1e2e9] hover:bg-[#272a2f] transition-colors"
          >
            <span className="material-symbols-outlined text-xl" data-icon="close">
              close
            </span>
          </button>
        </div>

        {/* Map Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Visual Interactive Route Canvas */}
          <div className="relative w-full aspect-[16/9] bg-[#0b0e13] rounded-2xl border border-[#504535] overflow-hidden p-6 flex flex-col justify-between">
            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'radial-gradient(#ffc665 1px, transparent 1px), radial-gradient(#9d8f7c 1px, #0b0e13 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Top Map HUD */}
            <div className="relative z-10 flex items-center justify-between text-xs font-['Space_Grotesk']">
              <div className="px-3 py-1.5 rounded-lg bg-[#191c21]/90 backdrop-blur border border-[#504535] text-[#ffc665] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                <span>CLEAN TRANSIT CORRIDOR: OPTIMAL FLOW</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#191c21]/90 backdrop-blur border border-[#504535] text-[#d4c4b0]">
                TOTAL DISTANCE: 38.4 KM • CO₂ REDUCTION: 64%
              </div>
            </div>

            {/* Interactive Nodes and Route Line SVG */}
            <div className="relative z-10 my-auto py-6">
              <svg className="w-full h-32" viewBox="0 0 800 120" fill="none">
                {/* Connecting Transit Line */}
                <path
                  d="M 100 60 C 250 20, 350 100, 500 50 C 600 20, 680 70, 720 60"
                  stroke="#504535"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M 100 60 C 250 20, 350 100, 500 50 C 600 20, 680 70, 720 60"
                  stroke="#e5a93c"
                  strokeWidth="3"
                  strokeDasharray="8 6"
                  strokeLinecap="round"
                  className="animate-pulse"
                />

                {/* Node 1: Grand Mosque */}
                <g onClick={() => setActiveStopIndex(0)} className="cursor-pointer">
                  <circle cx="100" cy="60" r={activeStopIndex === 0 ? '16' : '12'} fill="#191c21" stroke="#ffc665" strokeWidth="3" />
                  <text x="100" y="65" fill="#ffc665" fontSize="12" fontWeight="bold" textAnchor="middle">1</text>
                  <text x="100" y="95" fill="#e1e2e9" fontSize="11" fontFamily="Space Grotesk" fontWeight="bold" textAnchor="middle">Grand Mosque</text>
                </g>

                {/* Node 2: Qasr Al Watan */}
                <g onClick={() => setActiveStopIndex(1)} className="cursor-pointer">
                  <circle cx="320" cy="75" r={activeStopIndex === 1 ? '16' : '12'} fill="#191c21" stroke="#e9c349" strokeWidth="3" />
                  <text x="320" y="80" fill="#e9c349" fontSize="12" fontWeight="bold" textAnchor="middle">2</text>
                  <text x="320" y="110" fill="#e1e2e9" fontSize="11" fontFamily="Space Grotesk" fontWeight="bold" textAnchor="middle">Qasr Al Watan</text>
                </g>

                {/* Node 3: Louvre */}
                <g onClick={() => setActiveStopIndex(2)} className="cursor-pointer">
                  <circle cx="520" cy="45" r={activeStopIndex === 2 ? '16' : '12'} fill="#191c21" stroke="#89b5fc" strokeWidth="3" />
                  <text x="520" y="50" fill="#89b5fc" fontSize="12" fontWeight="bold" textAnchor="middle">3</text>
                  <text x="520" y="25" fill="#e1e2e9" fontSize="11" fontFamily="Space Grotesk" fontWeight="bold" textAnchor="middle">Louvre Dome</text>
                </g>

                {/* Node 4: Jubail Mangroves */}
                <g onClick={() => setActiveStopIndex(3)} className="cursor-pointer">
                  <circle cx="720" cy="60" r={activeStopIndex === 3 ? '16' : '12'} fill="#191c21" stroke="#4ade80" strokeWidth="3" />
                  <text x="720" y="65" fill="#4ade80" fontSize="12" fontWeight="bold" textAnchor="middle">4</text>
                  <text x="720" y="95" fill="#e1e2e9" fontSize="11" fontFamily="Space Grotesk" fontWeight="bold" textAnchor="middle">Jubail Mangroves</text>
                </g>
              </svg>
            </div>

            {/* Bottom Status bar */}
            <div className="relative z-10 flex items-center justify-between text-xs text-[#9d8f7c]">
              <span>Click nodes to inspect stop specifications</span>
              <span className="text-[#ffc665]">Active: Stop {activeStopIndex + 1} of 4</span>
            </div>
          </div>

          {/* Active Stop Detail Card */}
          <div className="p-5 rounded-2xl bg-[#101418] border border-[#ffc665]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffc665]">
                  {currentStop.timeSlot}
                </span>
                <span className="px-2 py-0.5 rounded bg-[#272a2f] text-[10px] text-[#9d8f7c]">
                  {currentStop.badge}
                </span>
              </div>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#e1e2e9]">
                {currentStop.title}
              </h4>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#d4c4b0] leading-relaxed">
                {currentStop.description}
              </p>
              <div className="pt-1 text-xs text-[#89b5fc] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm" data-icon="electric_bus">
                  electric_bus
                </span>
                <span>{currentStop.transfer}</span>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setActiveStopIndex((prev) => (prev > 0 ? prev - 1 : 3))}
                className="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-[#272a2f] border border-[#504535] text-xs font-['Space_Grotesk'] text-[#e1e2e9] hover:text-[#ffc665] cursor-pointer"
              >
                Previous Stop
              </button>
              <button
                onClick={() => setActiveStopIndex((prev) => (prev < 3 ? prev + 1 : 0))}
                className="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-[#e5a93c] text-[#432c00] text-xs font-['Space_Grotesk'] font-bold hover:bg-[#ffc665] cursor-pointer"
              >
                Next Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
