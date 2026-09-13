import React, { useState } from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [language, setLanguage] = useState('en');
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');
  const [transitPref, setTransitPref] = useState('electric_autonomous');
  const [heatSensitivity, setHeatSensitivity] = useState('balanced');
  const [audioSpeed, setAudioSpeed] = useState('1.0');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#191c21] border border-[#504535] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-[#101418] border-b border-[#504535] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#ffc665] text-xl" data-icon="tune">
              tune
            </span>
            <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#e1e2e9]">
              Concierge & Travel Preferences
            </h3>
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

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {/* AI Status */}
          <div className="p-3 rounded-xl bg-[#101418] border border-[#504535]/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#22c55e] text-lg" data-icon="bolt">
                bolt
              </span>
              <div>
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#e1e2e9] block">
                  Gemini Multimodal Neural Engine
                </span>
                <span className="text-[10px] text-[#9d8f7c]">
                  Server-side execution • Aligned with UAE AI Strategy
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#22c55e]/20 text-[#4ade80] text-[10px] font-bold">
              Online
            </span>
          </div>

          {/* Language Selection */}
          <div className="space-y-2">
            <label className="font-['Space_Grotesk'] font-bold text-[#ffc665] block">
              Concierge Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-[#101418] border border-[#504535] rounded-xl px-3 py-2 text-xs text-[#e1e2e9] focus:outline-none focus:border-[#ffc665]"
            >
              <option value="en">English (International)</option>
              <option value="ar">العربية (Emirati Arabic & Modern Standard)</option>
              <option value="fr">Français (French)</option>
              <option value="de">Deutsch (German)</option>
              <option value="zh">中文 (Mandarin)</option>
              <option value="ru">Русский (Russian)</option>
            </select>
          </div>

          {/* Temperature Units */}
          <div className="space-y-2">
            <label className="font-['Space_Grotesk'] font-bold text-[#ffc665] block">
              Temperature Display
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTempUnit('C')}
                className={`flex-1 py-2 rounded-xl border text-xs font-['Space_Grotesk'] font-bold transition-all ${
                  tempUnit === 'C'
                    ? 'bg-[#e5a93c] text-[#432c00] border-[#ffc665]'
                    : 'bg-[#101418] border-[#504535] text-[#d4c4b0]'
                }`}
              >
                Celsius (°C)
              </button>
              <button
                type="button"
                onClick={() => setTempUnit('F')}
                className={`flex-1 py-2 rounded-xl border text-xs font-['Space_Grotesk'] font-bold transition-all ${
                  tempUnit === 'F'
                    ? 'bg-[#e5a93c] text-[#432c00] border-[#ffc665]'
                    : 'bg-[#101418] border-[#504535] text-[#d4c4b0]'
                }`}
              >
                Fahrenheit (°F)
              </button>
            </div>
          </div>

          {/* Transit Priority */}
          <div className="space-y-2">
            <label className="font-['Space_Grotesk'] font-bold text-[#ffc665] block">
              Preferred Eco-Transit Mode
            </label>
            <select
              value={transitPref}
              onChange={(e) => setTransitPref(e.target.value)}
              className="w-full bg-[#101418] border border-[#504535] rounded-xl px-3 py-2 text-xs text-[#e1e2e9] focus:outline-none focus:border-[#ffc665]"
            >
              <option value="electric_autonomous">Autonomous Pods & Electric Buses (Highest CO₂ reduction)</option>
              <option value="metro_tram">Dubai Metro & Tram Rail Network</option>
              <option value="marine_abra">Solar & Electric Water Abras</option>
            </select>
          </div>

          {/* Heat-Shield Optimization */}
          <div className="space-y-2">
            <label className="font-['Space_Grotesk'] font-bold text-[#ffc665] block">
              Desert Heat Shield Routing
            </label>
            <select
              value={heatSensitivity}
              onChange={(e) => setHeatSensitivity(e.target.value)}
              className="w-full bg-[#101418] border border-[#504535] rounded-xl px-3 py-2 text-xs text-[#e1e2e9] focus:outline-none focus:border-[#ffc665]"
            >
              <option value="aggressive">Aggressive (Reroute indoor between 11 AM - 3 PM)</option>
              <option value="balanced">Balanced (Prioritize shaded & wind-tunnel architecture)</option>
              <option value="relaxed">Relaxed (Standard daytime routing)</option>
            </select>
          </div>

          {/* Audio Speech Rate */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="font-['Space_Grotesk'] font-bold text-[#ffc665]">
                Speech Narration Speed
              </label>
              <span className="text-[#9d8f7c]">{audioSpeed}x</span>
            </div>
            <input
              type="range"
              min="0.75"
              max="1.25"
              step="0.05"
              value={audioSpeed}
              onChange={(e) => setAudioSpeed(e.target.value)}
              className="w-full accent-[#ffc665]"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#101418] border-t border-[#504535] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#e5a93c] text-[#432c00] font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffc665] transition-all cursor-pointer"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
