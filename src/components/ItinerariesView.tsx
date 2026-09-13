import React from 'react';
import { SavedSession, ItineraryStop } from '../types';

interface ItinerariesViewProps {
  sessions: SavedSession[];
  activeSessionId: string;
  onSelectSession: (id: string) => void;
  onSwitchToChat: () => void;
  savedCustomItineraries: { title: string; stops: ItineraryStop[]; date: string }[];
}

export const ItinerariesView: React.FC<ItinerariesViewProps> = ({
  sessions,
  activeSessionId,
  onSelectSession,
  onSwitchToChat,
  savedCustomItineraries,
}) => {
  return (
    <div className="flex-1 overflow-y-auto bg-[#101418] text-[#e1e2e9] p-6 lg:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#504535]/50 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191c21] border border-[#504535] text-xs font-['Space_Grotesk'] text-[#ffc665] mb-2">
            <span className="material-symbols-outlined text-sm" data-icon="route">
              route
            </span>
            <span>Intelligent Dynamic Route Planner</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[#e1e2e9]">
            Curated UAE Itineraries
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#9d8f7c]">
            Climate-optimized, zero-emission transit routes crafted for maximum cultural immersion.
          </p>
        </div>

        <button
          onClick={onSwitchToChat}
          className="px-4 py-2.5 rounded-xl bg-[#e5a93c] text-[#432c00] font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffc665] transition-all flex items-center gap-2 shadow cursor-pointer shrink-0"
        >
          <span className="material-symbols-outlined text-base" data-icon="add">
            add
          </span>
          <span>Generate New Custom Route</span>
        </button>
      </div>

      {/* Pre-curated Itinerary Packages */}
      <div className="space-y-6">
        <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#ffc665]">
          Curated Smart Experiences
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sessions.map((session) => {
            const botMsg = session.messages.find((m) => m.sender === 'gemini' && m.itineraryStops);
            const stops = botMsg?.itineraryStops || [];
            const isActive = session.id === activeSessionId;

            return (
              <div
                key={session.id}
                className={`p-6 rounded-2xl bg-[#191c21] border transition-all flex flex-col justify-between ${
                  isActive ? 'border-[#ffc665] shadow-xl' : 'border-[#504535]/60 hover:border-[#ffc665]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#272a2f] border border-[#504535] flex items-center justify-center text-[#ffc665]">
                        <span className="material-symbols-outlined text-xl" data-icon={session.icon}>
                          {session.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#e1e2e9]">
                          {session.title}
                        </h4>
                        <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                          {session.subtitle}
                        </span>
                      </div>
                    </div>

                    {botMsg?.reductionPercentage && (
                      <div className="px-3 py-1 rounded-full bg-[#22c55e]/20 text-[#4ade80] border border-[#22c55e]/30 font-['Space_Grotesk'] text-xs font-bold">
                        {botMsg.reductionPercentage}% Eco-Reduction
                      </div>
                    )}
                  </div>

                  {/* Stop-by-stop Timeline preview */}
                  <div className="space-y-3 py-3 border-y border-[#504535]/40 my-4">
                    {stops.slice(0, 4).map((stop, idx) => (
                      <div key={stop.id} className="flex items-start gap-3 text-xs">
                        <div className="w-5 h-5 rounded-full bg-[#272a2f] border border-[#504535] text-[#ffc665] font-['Space_Grotesk'] font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-['Space_Grotesk'] font-bold text-[#e1e2e9]">
                              {stop.title}
                            </span>
                            <span className="text-[10px] text-[#ffc665]">{stop.timeSlot}</span>
                          </div>
                          <p className="text-[11px] text-[#9d8f7c] line-clamp-1">{stop.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-['Space_Grotesk'] text-xs text-[#9d8f7c]">
                    {stops.length} Planned Coordinates
                  </span>
                  <button
                    onClick={() => {
                      onSelectSession(session.id);
                      onSwitchToChat();
                    }}
                    className="px-4 py-2 rounded-xl bg-[#272a2f] hover:bg-[#e5a93c] text-[#ffc665] hover:text-[#432c00] font-['Space_Grotesk'] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Open in Concierge Chat</span>
                    <span className="material-symbols-outlined text-sm" data-icon="chat">
                      chat
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* User Custom Saved Itineraries */}
      {savedCustomItineraries.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-[#504535]/50">
          <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#4ade80] flex items-center gap-2">
            <span className="material-symbols-outlined text-base" data-icon="bookmark">
              bookmark
            </span>
            <span>My Bookmarked Schedules ({savedCustomItineraries.length})</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedCustomItineraries.map((saved, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#191c21] border border-[#504535] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Grotesk'] text-sm font-bold text-[#e1e2e9]">
                    {saved.title}
                  </span>
                  <span className="text-[10px] text-[#9d8f7c]">{saved.date}</span>
                </div>
                <p className="text-xs text-[#d4c4b0]">
                  {saved.stops.length} stops saved. Ready for offline or autonomous navigation.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
