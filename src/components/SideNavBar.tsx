import React from 'react';
import { SavedSession } from '../types';

interface SideNavBarProps {
  sessions: SavedSession[];
  activeSessionId: string;
  onSelectSession: (id: string) => void;
  onNewConsultation: () => void;
  onOpenARScan: () => void;
  onOpenCulturalGuide: () => void;
  onOpenTransitProtocol: () => void;
  onOpenSettings: () => void;
}

export const SideNavBar: React.FC<SideNavBarProps> = ({
  sessions,
  activeSessionId,
  onSelectSession,
  onNewConsultation,
  onOpenARScan,
  onOpenCulturalGuide,
  onOpenTransitProtocol,
  onOpenSettings
}) => {
  return (
    <aside className="w-72 bg-[#191c21] border-r border-[#504535] flex flex-col justify-between shrink-0 p-4 transition-all duration-150 ease-in-out hidden md:flex h-full overflow-y-auto">
      <div className="flex flex-col gap-6">
        {/* New Consultation Button (Luxury Gold CTA) */}
        <button
          onClick={onNewConsultation}
          className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#e5a93c] text-[#432c00] font-['Space_Grotesk'] text-xs font-bold shadow-md hover:bg-[#e9c349] transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg" data-icon="add_circle">
            add_circle
          </span>
          <span>+ New UAE Consultation</span>
        </button>

        {/* Saved Travel Sessions Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-2 mb-1">
            <span className="font-['Space_Grotesk'] text-[10px] text-[#9d8f7c] uppercase tracking-wider font-bold">
              Saved Itineraries
            </span>
            <span className="font-['Space_Grotesk'] text-[10px] text-[#504535]">
              {sessions.length} Sessions
            </span>
          </div>

          {sessions.map((session) => {
            const isActive = session.id === activeSessionId;
            return (
              <button
                key={session.id}
                onClick={() => onSelectSession(session.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-['Space_Grotesk'] text-xs text-left transition-all group ${
                  isActive
                    ? 'bg-[#32353a] text-[#ffc665] border border-[#e5a93c]/40 font-semibold shadow-sm'
                    : 'text-[#d4c4b0] hover:bg-[#1d2025] hover:text-[#e1e2e9]'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-base ${
                    isActive ? 'text-[#ffc665]' : 'text-[#9d8f7c] group-hover:text-[#ffc665]'
                  }`}
                  data-icon={session.icon}
                >
                  {session.icon}
                </span>
                <div className="flex-1 truncate">
                  <span className="block truncate font-medium">{session.title}</span>
                  <span className="block font-['Plus_Jakarta_Sans'] text-[11px] text-[#9d8f7c] truncate">
                    {session.subtitle}
                  </span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#ffc665] shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* AI Capabilities Section */}
        <div className="flex flex-col gap-2 pt-4 border-t border-[#504535]/60">
          <span className="font-['Space_Grotesk'] text-[10px] text-[#9d8f7c] uppercase tracking-wider px-2 font-bold mb-1">
            AI Engine Capabilities
          </span>

          {/* Multimodal Visual AR */}
          <button
            onClick={onOpenARScan}
            className="w-full p-2.5 rounded-lg bg-[#1d2025] border border-[#504535]/40 hover:border-[#ffc665]/60 flex items-center gap-3 text-left transition-all group"
          >
            <div className="p-1.5 rounded-md bg-[#272a2f] text-[#ffc665] group-hover:bg-[#ffc665] group-hover:text-[#432c00] transition-colors">
              <span className="material-symbols-outlined text-base" data-icon="camera">
                camera
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#e1e2e9] group-hover:text-[#ffc665] transition-colors">
                Multimodal Visual AR
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#9d8f7c]">
                Landmark Recognition
              </span>
            </div>
          </button>

          {/* Emirati Dialect NLP */}
          <button
            onClick={onOpenCulturalGuide}
            className="w-full p-2.5 rounded-lg bg-[#1d2025] border border-[#504535]/40 hover:border-[#e9c349]/60 flex items-center gap-3 text-left transition-all group"
          >
            <div className="p-1.5 rounded-md bg-[#272a2f] text-[#e9c349] group-hover:bg-[#e9c349] group-hover:text-[#432c00] transition-colors">
              <span className="material-symbols-outlined text-base" data-icon="record_voice_over">
                record_voice_over
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#e1e2e9] group-hover:text-[#e9c349] transition-colors">
                Emirati Dialect NLP
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#9d8f7c]">
                Local Etiquette & Slang
              </span>
            </div>
          </button>

          {/* Autonomous Transit */}
          <button
            onClick={onOpenTransitProtocol}
            className="w-full p-2.5 rounded-lg bg-[#1d2025] border border-[#504535]/40 hover:border-[#b7d0ff]/60 flex items-center gap-3 text-left transition-all group"
          >
            <div className="p-1.5 rounded-md bg-[#272a2f] text-[#b7d0ff] group-hover:bg-[#b7d0ff] group-hover:text-[#003062] transition-colors">
              <span className="material-symbols-outlined text-base" data-icon="electric_car">
                electric_car
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#e1e2e9] group-hover:text-[#b7d0ff] transition-colors">
                Autonomous Transit
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#9d8f7c]">
                Zero-Emission Routing
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Left Sidebar Footer */}
      <div className="pt-4 border-t border-[#504535] flex flex-col gap-3">
        <div className="flex items-center justify-between text-[#d4c4b0] font-['Space_Grotesk'] text-xs">
          <button
            onClick={onOpenTransitProtocol}
            className="flex items-center gap-1.5 hover:text-[#ffc665] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-[#ffc665]" data-icon="verified_user">
              verified_user
            </span>
            <span>Travel Protocol</span>
          </button>

          <button
            onClick={onOpenSettings}
            className="flex items-center gap-1.5 hover:text-[#ffc665] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-[#9d8f7c]" data-icon="settings">
              settings
            </span>
            <span>Settings</span>
          </button>
        </div>

        <div className="px-3 py-2 rounded bg-[#0b0e13] border border-[#504535]/50 text-center">
          <span className="font-['Space_Grotesk'] text-[10px] font-bold text-[#ffc665] block">
            UAE Vision 2071 Aligned • Grade 9 AI
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[#9d8f7c] text-[10px] block">
            Curated with Dubai & Abu Dhabi Open Data
          </span>
        </div>
      </div>
    </aside>
  );
};
