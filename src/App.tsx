/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode, SavedSession, ChatMessage, ItineraryStop } from './types';
import { SAVED_SESSIONS } from './data/mockData';
import { TopNavBar } from './components/TopNavBar';
import { SideNavBar } from './components/SideNavBar';
import { InteractiveChatView } from './components/InteractiveChatView';
import { AcademicLandingView } from './components/AcademicLandingView';
import { LandmarksView } from './components/LandmarksView';
import { ItinerariesView } from './components/ItinerariesView';
import { ARScannerModal } from './components/ARScannerModal';
import { CulturalGuideModal } from './components/CulturalGuideModal';
import { NavigationMapModal } from './components/NavigationMapModal';
import { TravelProtocolModal } from './components/TravelProtocolModal';
import { SettingsModal } from './components/SettingsModal';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('chatbot');
  const [sessions, setSessions] = useState<SavedSession[]>(SAVED_SESSIONS);
  const [activeSessionId, setActiveSessionId] = useState<string>('abu-dhabi-eco');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [savedCustomItineraries, setSavedCustomItineraries] = useState<
    { title: string; stops: ItineraryStop[]; date: string }[]
  >([]);

  // Modals state
  const [arModalOpen, setArModalOpen] = useState(false);
  const [arLandmarkHint, setArLandmarkHint] = useState<string | undefined>(undefined);
  const [culturalModalOpen, setCulturalModalOpen] = useState(false);
  const [culturalTopicHint, setCulturalTopicHint] = useState<string | undefined>(undefined);
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [protocolModalOpen, setProtocolModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  // Active session helper
  const activeSession = sessions.find((s) => s.id === activeSessionId) || sessions[0];

  const handleSelectSession = (id: string) => {
    setActiveSessionId(id);
    if (currentView !== 'chatbot') {
      setCurrentView('chatbot');
    }
  };

  const handleNewConsultation = () => {
    const newId = `session-${Date.now()}`;
    const newSession: SavedSession = {
      id: newId,
      title: 'New UAE Consultation',
      subtitle: 'Personalized Emirates Discovery',
      icon: 'chat',
      messages: [
        {
          id: `welcome-${Date.now()}`,
          sender: 'gemini',
          groundingTag: 'Synthesized via Gemini Multimodal Travel Graph & UAE Centennial 2071 Guidelines',
          text: 'Ahlan wa sahlan! Welcome to your personalized UAE AI Concierge. Ask me anything about planning your stay across Abu Dhabi, Dubai, or the Northern Emirates—from heat-shielded cultural itineraries to local Gahwa coffee etiquette and zero-emission transit.',
          timestamp: 'Just now',
          audioText:
            'Ahlan wa sahlan! Welcome to your personalized UAE AI Concierge. How may I assist your Emirates travel today?',
        },
      ],
    };

    setSessions([newSession, ...sessions]);
    setActiveSessionId(newId);
    setCurrentView('chatbot');
  };

  const handleSendMessage = async (text: string) => {
    const userMessage: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...activeSession.messages, userMessage];

    // Update session with user message immediately
    setSessions((prev) =>
      prev.map((s) => (s.id === activeSessionId ? { ...s, messages: updatedMessages } : s))
    );

    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          conversationHistory: updatedMessages.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            text: m.text,
          })),
        }),
      });

      const data = await response.json();

      const aiReply: ChatMessage = {
        id: `msg-ai-${Date.now()}`,
        sender: 'gemini',
        text: data.reply || 'Ahlan! I am ready to assist with your Emirates exploration.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        groundingTag: 'Synthesized via Gemini Multimodal Travel Graph & RTA / DoT Real-time Sustainable APIs',
        audioText: data.reply,
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId ? { ...s, messages: [...updatedMessages, aiReply] } : s
        )
      );
    } catch {
      const fallbackAi: ChatMessage = {
        id: `msg-ai-${Date.now()}`,
        sender: 'gemini',
        text: 'Ahlan wa sahlan! Here is expert cultural guidance for your UAE journey. Avoid peak midday heat between 11:30 AM and 3:00 PM by exploring climate-controlled architectural marvels like Louvre Abu Dhabi and Qasr Al Watan, and utilize the clean electric bus network for optimal environmental sustainability.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        groundingTag: 'Synthesized via Emirates Cultural Registry & Sustainable Transit Network',
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId ? { ...s, messages: [...updatedMessages, fallbackAi] } : s
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenARScan = (hint?: string) => {
    setArLandmarkHint(hint);
    setArModalOpen(true);
  };

  const handleOpenCulturalGuide = (topic?: string) => {
    setCulturalTopicHint(topic);
    setCulturalModalOpen(true);
  };

  const handleSaveItinerary = (title: string, stops: ItineraryStop[]) => {
    setSavedCustomItineraries((prev) => [
      {
        title,
        stops,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      },
      ...prev,
    ]);
  };

  const handlePlanLandmarkInChat = async (landmarkName: string) => {
    setCurrentView('chatbot');
    await handleSendMessage(
      `Plan a heat-optimized sustainable visit to ${landmarkName} including cultural etiquette, prayer windows, and eco-friendly transit.`
    );
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#101418] text-[#e1e2e9] font-['Plus_Jakarta_Sans'] overflow-hidden">
      {/* Top Universal Navbar */}
      <TopNavBar
        currentView={currentView}
        onViewChange={setCurrentView}
        onOpenSettings={() => setSettingsModalOpen(true)}
        onOpenARScan={() => handleOpenARScan()}
      />

      {/* Main Workspace Frame */}
      <div className="flex-1 flex overflow-hidden">
        {/* Conditional Side Navigation (Image 3 Left Sidebar) */}
        {currentView !== 'academic' && (
          <SideNavBar
            sessions={sessions}
            activeSessionId={activeSessionId}
            onSelectSession={handleSelectSession}
            onNewConsultation={handleNewConsultation}
            onOpenARScan={() => handleOpenARScan()}
            onOpenCulturalGuide={() => handleOpenCulturalGuide()}
            onOpenTransitProtocol={() => setProtocolModalOpen(true)}
            onOpenSettings={() => setSettingsModalOpen(true)}
          />
        )}

        {/* Dynamic View Panels */}
        {currentView === 'academic' && (
          <AcademicLandingView
            onSwitchToChat={() => setCurrentView('chatbot')}
            onOpenARScan={() => handleOpenARScan()}
            onOpenCulturalGuide={() => handleOpenCulturalGuide()}
            onOpenLandmarks={() => setCurrentView('landmarks')}
          />
        )}

        {currentView === 'chatbot' && (
          <InteractiveChatView
            currentSession={activeSession}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            onOpenARScan={handleOpenARScan}
            onOpenCulturalGuide={handleOpenCulturalGuide}
            onOpenMapModal={() => setMapModalOpen(true)}
            onSaveItinerary={handleSaveItinerary}
          />
        )}

        {currentView === 'landmarks' && (
          <LandmarksView
            onPlanLandmarkInChat={handlePlanLandmarkInChat}
            onOpenARScan={handleOpenARScan}
          />
        )}

        {currentView === 'itineraries' && (
          <ItinerariesView
            sessions={sessions}
            activeSessionId={activeSessionId}
            onSelectSession={handleSelectSession}
            onSwitchToChat={() => setCurrentView('chatbot')}
            savedCustomItineraries={savedCustomItineraries}
          />
        )}

        {currentView === 'cultural' && (
          <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-[#101418]">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center justify-between border-b border-[#504535]/50 pb-4">
                <div>
                  <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-[#e1e2e9]">
                    Emirati Dialect & Cultural Heritage Center
                  </h2>
                  <p className="text-xs text-[#9d8f7c]">
                    Explore authentic customs, the Gahwa coffee ceremony, and local dialect phrases.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenCulturalGuide()}
                  className="px-4 py-2 rounded-xl bg-[#e5a93c] text-[#432c00] font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffc665] cursor-pointer"
                >
                  Open Audio Phrasebook
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#191c21] border border-[#504535]/60 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#272a2f] flex items-center justify-center text-[#ffc665]">
                    <span className="material-symbols-outlined text-xl" data-icon="local_cafe">
                      local_cafe
                    </span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#e1e2e9]">
                    The Gahwa Coffee Ritual
                  </h3>
                  <p className="text-xs text-[#d4c4b0] leading-relaxed">
                    Emirati Gahwa is prepared with lightly roasted green coffee beans infused with crushed cardamom, saffron, and rose water. Always receive with your right hand. When satisfied, shake your wrist gently before returning the finjan.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#191c21] border border-[#504535]/60 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#272a2f] flex items-center justify-center text-[#b7d0ff]">
                    <span className="material-symbols-outlined text-xl" data-icon="chair">
                      chair
                    </span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#e1e2e9]">
                    The Majlis Protocol
                  </h3>
                  <p className="text-xs text-[#d4c4b0] leading-relaxed">
                    Remove footwear at the entrance threshold. Greet from right to left with a warm handshake. Sit cross-legged without pointing shoe soles toward hosts or fellow guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Modals */}
      <ARScannerModal
        isOpen={arModalOpen}
        onClose={() => setArModalOpen(false)}
        initialLandmarkHint={arLandmarkHint}
      />

      <CulturalGuideModal
        isOpen={culturalModalOpen}
        onClose={() => setCulturalModalOpen(false)}
        initialTopic={culturalTopicHint}
      />

      <NavigationMapModal
        isOpen={mapModalOpen}
        onClose={() => setMapModalOpen(false)}
      />

      <TravelProtocolModal
        isOpen={protocolModalOpen}
        onClose={() => setProtocolModalOpen(false)}
      />

      <SettingsModal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
      />
    </div>
  );
}
