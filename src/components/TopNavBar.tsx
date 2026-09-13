import React, { useState } from 'react';
import { ViewMode } from '../types';

interface TopNavBarProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onOpenSettings: () => void;
  onOpenARScan: () => void;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({
  currentView,
  onViewChange,
  onOpenSettings,
  onOpenARScan
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Clean Electric Transit Active",
      desc: "Abu Dhabi DoT Route A1 & Saadiyat Autonomous Pods on schedule (99.4% on-time).",
      time: "2m ago",
      icon: "electric_bus"
    },
    {
      id: 2,
      title: "Midday Thermal Advisory",
      desc: "Ambient temperature reaching 34°C at 12:30 PM. Heat shield protocols active at Qasr Al Watan.",
      time: "15m ago",
      icon: "wb_sunny"
    },
    {
      id: 3,
      title: "Grand Mosque Sunset Prayer Window",
      desc: "Maghrib prayer scheduled for 06:18 PM. Reflective pools illuminated in golden lunar tones.",
      time: "1h ago",
      icon: "mosque"
    }
  ];

  return (
    <header className="bg-[#0b0e13] sticky top-0 z-50 flex justify-between items-center w-full px-4 lg:px-6 py-3 border-b border-[#504535]/50 transition-all duration-200 backdrop-blur-md">
      {/* Brand Anchor & Live AI Status */}
      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={() => onViewChange('chatbot')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#272a2f] border border-[#504535] flex items-center justify-center text-[#ffc665] shadow-sm group-hover:border-[#ffc665] transition-colors">
            <span className="material-symbols-outlined text-[#ffc665] text-xl" data-icon="travel_explore">
              travel_explore
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] text-[17px] leading-tight font-bold text-[#ffc665] tracking-tight">
              Smart UAE AI Portal
            </span>
            <span className="font-['Space_Grotesk'] text-[10px] uppercase font-semibold text-[#9d8f7c] tracking-wider -mt-0.5">
              EMIRATES MULTIMODAL CONCIERGE
            </span>
          </div>
        </button>

        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1d2025] border border-[#504535]/40">
          <span className="w-2 h-2 rounded-full bg-[#ffc665] animate-ping" />
          <span className="font-['Space_Grotesk'] text-[10px] font-bold text-[#ffc665] tracking-wide">
            Live AI Assistant
          </span>
        </div>
      </div>

      {/* Center Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        <button
          onClick={() => onViewChange('academic')}
          className={`font-['Space_Grotesk'] text-xs font-semibold tracking-wide transition-all pb-0.5 ${
            currentView === 'academic'
              ? 'text-[#ffc665] border-b-2 border-[#ffc665] font-bold'
              : 'text-[#d4c4b0] hover:text-[#e1e2e9]'
          }`}
        >
          Project Overview (Grade 9)
        </button>

        <button
          onClick={() => onViewChange('chatbot')}
          className={`font-['Space_Grotesk'] text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 pb-0.5 ${
            currentView === 'chatbot'
              ? 'text-[#ffc665] border-b-2 border-[#ffc665] font-bold'
              : 'text-[#d4c4b0] hover:text-[#e1e2e9]'
          }`}
        >
          <span className="material-symbols-outlined text-sm" data-icon="chat">
            chat
          </span>
          Interactive Chatbot
        </button>

        <button
          onClick={() => onViewChange('itineraries')}
          className={`font-['Space_Grotesk'] text-xs font-semibold tracking-wide transition-all pb-0.5 ${
            currentView === 'itineraries'
              ? 'text-[#ffc665] border-b-2 border-[#ffc665] font-bold'
              : 'text-[#d4c4b0] hover:text-[#e1e2e9]'
          }`}
        >
          Itineraries
        </button>

        <button
          onClick={() => onViewChange('landmarks')}
          className={`font-['Space_Grotesk'] text-xs font-semibold tracking-wide transition-all pb-0.5 ${
            currentView === 'landmarks'
              ? 'text-[#ffc665] border-b-2 border-[#ffc665] font-bold'
              : 'text-[#d4c4b0] hover:text-[#e1e2e9]'
          }`}
        >
          Landmarks
        </button>

        <button
          onClick={() => onViewChange('cultural')}
          className={`font-['Space_Grotesk'] text-xs font-semibold tracking-wide transition-all pb-0.5 ${
            currentView === 'cultural'
              ? 'text-[#ffc665] border-b-2 border-[#ffc665] font-bold'
              : 'text-[#d4c4b0] hover:text-[#e1e2e9]'
          }`}
        >
          Cultural Guide
        </button>
      </nav>

      {/* Trailing Action Badges & User Meta */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Gemini 1.5 Chip */}
        <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#272a2f] border border-[#504535] shadow-inner">
          <span className="material-symbols-outlined text-[#e9c349] text-base" data-icon="auto_awesome">
            auto_awesome
          </span>
          <span className="font-['Space_Grotesk'] text-[11px] font-semibold text-[#e1e2e9]">
            Powered by Gemini 1.5 Pro
          </span>
        </div>

        {/* Student Author Badge Required Token */}
        <button
          onClick={() => onViewChange('academic')}
          title="View Student Project Presentation"
          className="flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-lg bg-[#1d2025] border border-[#e5a93c]/50 hover:border-[#ffc665] transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="font-['Space_Grotesk'] text-xs text-[#ffc665] font-semibold">
            Sanath.C-9C
          </span>
          <span className="hidden sm:inline font-['Space_Grotesk'] text-[10px] text-[#9d8f7c] border-l border-[#504535] pl-2">
            Grade 9 AI
          </span>
        </button>

        {/* AR Scanner Quick Trigger */}
        <button
          onClick={onOpenARScan}
          aria-label="AR Vision Scanner"
          title="Open AR Landmark Scanner"
          className="hidden md:flex p-2 rounded-lg text-[#ffc665] bg-[#272a2f] border border-[#504535] hover:bg-[#32353a] hover:border-[#ffc665] transition-all items-center gap-1.5 text-xs font-['Space_Grotesk'] font-semibold"
        >
          <span className="material-symbols-outlined text-base" data-icon="camera">
            camera
          </span>
          <span className="hidden xl:inline">AR Scan</span>
        </button>

        {/* Trailing Action Icons */}
        <div className="flex items-center gap-1 relative">
          <button
            onClick={onOpenSettings}
            aria-label="Settings"
            title="Concierge & Transit Settings"
            className="p-2 rounded-lg text-[#d4c4b0] hover:text-[#e1e2e9] hover:bg-[#272a2f] transition-colors"
          >
            <span className="material-symbols-outlined text-lg" data-icon="tune">
              tune
            </span>
          </button>

          <button
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
            title="Real-time Transit & Tourism Alerts"
            className="p-2 rounded-lg text-[#d4c4b0] hover:text-[#e1e2e9] hover:bg-[#272a2f] transition-colors relative"
          >
            <span className="material-symbols-outlined text-lg" data-icon="notifications">
              notifications
            </span>
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#e5a93c]" />
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 sm:w-96 rounded-xl bg-[#191c21] border border-[#504535] shadow-2xl p-3 z-50 text-left animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#504535]/60 mb-2">
                <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#ffc665]">
                  Real-time UAE Alerts
                </span>
                <span className="text-[10px] text-[#9d8f7c]">3 Active</span>
              </div>
              <div className="space-y-2">
                {notifications.map((n) => (
                  <div key={n.id} className="p-2.5 rounded-lg bg-[#272a2f]/70 border border-[#504535]/40 text-xs">
                    <div className="flex items-center justify-between text-[#e1e2e9] font-medium mb-0.5">
                      <span className="font-semibold text-[#ffc665]">{n.title}</span>
                      <span className="text-[10px] text-[#9d8f7c]">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-[#d4c4b0] leading-relaxed">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg text-[#ffc665] hover:bg-[#272a2f]"
          >
            <span className="material-symbols-outlined text-xl" data-icon="menu">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#101418] border-b border-[#504535] p-4 flex flex-col gap-3 lg:hidden z-50">
          <button
            onClick={() => {
              onViewChange('academic');
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg hover:bg-[#272a2f] text-sm text-[#ffc665]"
          >
            Project Overview (Presentation)
          </button>
          <button
            onClick={() => {
              onViewChange('chatbot');
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg hover:bg-[#272a2f] text-sm text-[#e1e2e9]"
          >
            Interactive Chatbot & Itinerary
          </button>
          <button
            onClick={() => {
              onViewChange('landmarks');
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg hover:bg-[#272a2f] text-sm text-[#e1e2e9]"
          >
            Landmarks Explorer
          </button>
          <button
            onClick={() => {
              onViewChange('cultural');
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg hover:bg-[#272a2f] text-sm text-[#e1e2e9]"
          >
            Cultural Guide & Dialect
          </button>
          <button
            onClick={() => {
              onOpenARScan();
              setMobileMenuOpen(false);
            }}
            className="text-left py-2 px-3 rounded-lg hover:bg-[#272a2f] text-sm text-[#e9c349] font-semibold"
          >
            AR Camera Scanner
          </button>
        </div>
      )}
    </header>
  );
};
