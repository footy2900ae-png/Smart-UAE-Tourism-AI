import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, SavedSession, ItineraryStop } from '../types';

interface InteractiveChatViewProps {
  currentSession: SavedSession;
  onSendMessage: (text: string) => Promise<void>;
  isLoading: boolean;
  onOpenARScan: (landmarkHint?: string) => void;
  onOpenCulturalGuide: (topic?: string) => void;
  onOpenMapModal: () => void;
  onSaveItinerary: (title: string, stops: ItineraryStop[]) => void;
}

export const InteractiveChatView: React.FC<InteractiveChatViewProps> = ({
  currentSession,
  onSendMessage,
  isLoading,
  onOpenARScan,
  onOpenCulturalGuide,
  onOpenMapModal,
  onSaveItinerary
}) => {
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentSession.messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isLoading) return;
    const text = inputText;
    setInputText('');
    await onSendMessage(text);
  };

  const handlePromptClick = async (promptText: string) => {
    if (isLoading) return;
    await onSendMessage(promptText);
  };

  // Web Speech API for voice dictation
  const toggleSpeechRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Please type your message.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-AE';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText((prev) => (prev ? `${prev} ${transcript}` : transcript));
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  // Web Speech Synthesis for audio narration
  const handleListenAudio = (audioText?: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech audio is not supported in this browser.');
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const textToSpeak =
      audioText ||
      "Ahlan wa sahlan! Welcome to Abu Dhabi. We have engineered a climate-conscious 24 hour journey starting at Sheikh Zayed Grand Mosque, leading to Qasr Al Watan, the Louvre dome, and sunset at Jubail Mangroves.";

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleSaveClick = (stops: ItineraryStop[]) => {
    onSaveItinerary(currentSession.title, stops);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#101418] relative overflow-hidden">
      {/* Workspace Header Strip */}
      <div className="bg-[#101418]/90 border-b border-[#504535]/40 px-4 sm:px-6 py-3 flex items-center justify-between z-10 shrink-0">
        <div>
          <h1 className="font-['Space_Grotesk'] text-base sm:text-lg font-bold text-[#e1e2e9] flex items-center gap-2">
            <span>Ahlan, Explorer!</span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#e5a93c]/20 text-[#ffc665] font-normal hidden sm:inline">
              UAE 2071 Aligned
            </span>
          </h1>
          <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
            Active Corridor: Abu Dhabi Cultural District & Saadiyat Eco-Zone
          </p>
        </div>

        {/* Telemetry Pills */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#191c21] border border-[#504535]/50 text-xs">
            <span className="material-symbols-outlined text-[#ffc665] text-sm" data-icon="partly_cloudy_day">
              partly_cloudy_day
            </span>
            <span className="font-['Space_Grotesk'] font-medium text-[#e1e2e9]">Abu Dhabi: 26°C Breezy</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#191c21] border border-[#504535]/50 text-xs">
            <span className="material-symbols-outlined text-[#22c55e] text-sm" data-icon="electric_bus">
              electric_bus
            </span>
            <span className="font-['Space_Grotesk'] font-medium text-[#e1e2e9]">Clean Bus: On Time</span>
          </div>
        </div>
      </div>

      {/* Main Chat Scroll Container */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6">
        {currentSession.messages.map((msg) => (
          <div key={msg.id} className="w-full max-w-5xl mx-auto space-y-4">
            {msg.sender === 'user' ? (
              /* User Query Card */
              <div className="flex justify-end">
                <div className="max-w-2xl bg-[#272a2f] border border-[#504535] rounded-2xl rounded-tr-sm p-4 text-[#e1e2e9] shadow-md">
                  <p className="font-['Plus_Jakarta_Sans'] text-sm leading-relaxed">{msg.text}</p>
                  <div className="flex justify-end items-center gap-2 mt-2">
                    <span className="font-['Space_Grotesk'] text-[10px] text-[#9d8f7c]">{msg.timestamp}</span>
                    <span className="material-symbols-outlined text-xs text-[#9d8f7c]" data-icon="done_all">
                      done_all
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Gemini Concierge Synthesis Card */
              <div className="flex flex-col gap-4">
                {/* AI Header & Grounding Source Tag */}
                {msg.groundingTag && (
                  <div className="flex items-center gap-2 text-xs text-[#9d8f7c]">
                    <span className="material-symbols-outlined text-[#ffc665] text-sm" data-icon="auto_awesome">
                      auto_awesome
                    </span>
                    <span className="font-['Space_Grotesk'] font-medium text-[#e9c349]">
                      {msg.groundingTag}
                    </span>
                  </div>
                )}

                {/* Introductory AI Text */}
                <div className="p-4 rounded-xl bg-[#191c21] border border-[#504535]/60 text-sm text-[#e1e2e9] leading-relaxed shadow-sm">
                  {msg.text}
                </div>

                {/* 4-Card Bento Itinerary Grid */}
                {msg.itineraryStops && msg.itineraryStops.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {msg.itineraryStops.map((stop) => (
                      <div
                        key={stop.id}
                        className="p-4 rounded-xl bg-[#191c21] border border-[#504535]/60 hover:border-[#ffc665]/60 transition-all flex flex-col justify-between group shadow-sm"
                      >
                        <div>
                          {/* Header: Time & Badge */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffc665]">
                              {stop.timeSlot}
                            </span>
                            <span
                              className={`font-['Space_Grotesk'] text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                                stop.badgeType === 'heat-shield'
                                  ? 'bg-[#af8d11]/20 text-[#e9c349] border border-[#af8d11]/40'
                                  : stop.badgeType === 'architecture'
                                  ? 'bg-[#89b5fc]/20 text-[#b7d0ff] border border-[#89b5fc]/40'
                                  : stop.badgeType === 'eco'
                                  ? 'bg-[#22c55e]/20 text-[#4ade80] border border-[#22c55e]/40'
                                  : 'bg-[#272a2f] text-[#d4c4b0] border border-[#504535]'
                              }`}
                            >
                              {stop.badge}
                            </span>
                          </div>

                          {/* Stop Title */}
                          <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#e1e2e9] group-hover:text-[#ffc665] transition-colors mb-1.5">
                            {stop.title}
                          </h3>

                          {/* Stop Description */}
                          <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#d4c4b0] leading-relaxed mb-3">
                            {stop.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {stop.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="font-['Plus_Jakarta_Sans'] text-[10px] px-2 py-0.5 rounded bg-[#272a2f] text-[#9d8f7c]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Transfer & Quick Action */}
                        <div className="pt-2 border-t border-[#504535]/40 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1 text-[11px] text-[#9d8f7c]">
                            <span className="material-symbols-outlined text-xs text-[#ffc665]" data-icon="electric_bus">
                              electric_bus
                            </span>
                            <span className="truncate max-w-[220px]">{stop.transfer}</span>
                          </div>

                          <button
                            onClick={() => onOpenARScan(stop.title)}
                            title="Preview AR Landmark Scan"
                            className="p-1 rounded text-[#9d8f7c] hover:text-[#ffc665] hover:bg-[#272a2f] transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm" data-icon="visibility">
                              visibility
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sustainability Impact Card (UAE Vision 2071) */}
                {msg.reductionPercentage && (
                  <div className="p-4 rounded-xl bg-[#191c21] border border-[#504535]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#e5a93c]/20 border border-[#e5a93c] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#ffc665] text-xl" data-icon="eco">
                          eco
                        </span>
                      </div>
                      <div>
                        <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-wider text-[#9d8f7c] font-bold block">
                          UAE Net Zero 2050 / UAE Centennial 2071
                        </span>
                        <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#d4c4b0]">
                          {msg.sustainabilityNote}
                        </p>
                      </div>
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto border-t sm:border-t-0 border-[#504535]/40 pt-2 sm:pt-0 shrink-0">
                      <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#ffc665]">
                        {msg.reductionPercentage}%
                      </span>
                      <span className="font-['Space_Grotesk'] text-[10px] text-[#9d8f7c] uppercase">
                        CO₂ Reduction
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Buttons Toolbar */}
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  {msg.itineraryStops && (
                    <button
                      onClick={() => handleSaveClick(msg.itineraryStops!)}
                      className="px-3.5 py-2 rounded-lg bg-[#272a2f] border border-[#504535] hover:border-[#ffc665] text-xs font-['Space_Grotesk'] font-semibold text-[#e1e2e9] hover:text-[#ffc665] transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm" data-icon="bookmark">
                        {savedSuccess ? 'check_circle' : 'bookmark'}
                      </span>
                      <span>{savedSuccess ? 'Saved to Itinerary!' : 'Save to My Itinerary'}</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleListenAudio(msg.audioText)}
                    className={`px-3.5 py-2 rounded-lg border text-xs font-['Space_Grotesk'] font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isPlayingAudio
                        ? 'bg-[#ffc665] text-[#432c00] border-[#ffc665]'
                        : 'bg-[#272a2f] border-[#504535] text-[#e1e2e9] hover:border-[#ffc665] hover:text-[#ffc665]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm" data-icon="volume_up">
                      {isPlayingAudio ? 'stop' : 'volume_up'}
                    </span>
                    <span>{isPlayingAudio ? 'Stop Audio' : 'Listen Audio (Emirati Arabic / English)'}</span>
                  </button>

                  <button
                    onClick={onOpenMapModal}
                    className="px-3.5 py-2 rounded-lg bg-[#272a2f] border border-[#504535] hover:border-[#ffc665] text-xs font-['Space_Grotesk'] font-semibold text-[#e1e2e9] hover:text-[#ffc665] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm" data-icon="map">
                      map
                    </span>
                    <span>View AR Navigation Map</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="w-full max-w-5xl mx-auto flex items-center gap-3 p-4 rounded-xl bg-[#191c21] border border-[#504535]/60 animate-pulse">
            <span className="material-symbols-outlined text-[#ffc665] animate-spin text-xl" data-icon="sync">
              sync
            </span>
            <div className="flex-1 space-y-2">
              <div className="h-3.5 bg-[#272a2f] rounded w-1/3" />
              <div className="h-3 bg-[#272a2f] rounded w-2/3" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Explore Related Topics Pills */}
      <div className="px-4 sm:px-6 py-2 bg-[#101418] border-t border-[#504535]/30">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-5xl mx-auto scrollbar-none">
          <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#9d8f7c] shrink-0">
            Suggested:
          </span>
          <button
            onClick={() => handlePromptClick("Explain cultural etiquette for Ramadan and mosque visits in Abu Dhabi")}
            className="px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]/60 hover:border-[#ffc665] text-xs text-[#d4c4b0] hover:text-[#ffc665] shrink-0 transition-colors cursor-pointer"
          >
            Cultural Etiquette for Ramadan
          </button>
          <button
            onClick={() => handlePromptClick("How do I take the Dubai Metro to Al Fahidi and use the electric abra?")}
            className="px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]/60 hover:border-[#ffc665] text-xs text-[#d4c4b0] hover:text-[#ffc665] shrink-0 transition-colors cursor-pointer"
          >
            Dubai Metro Route Transfer
          </button>
          <button
            onClick={() => onOpenCulturalGuide("Gahwa")}
            className="px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]/60 hover:border-[#ffc665] text-xs text-[#d4c4b0] hover:text-[#ffc665] shrink-0 transition-colors cursor-pointer"
          >
            Ceremonial Gahwa Coffee Etiquette
          </button>
          <button
            onClick={() => handlePromptClick("Recommend shaded pedestrian corridors and indoor cultural spots in Dubai")}
            className="px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]/60 hover:border-[#ffc665] text-xs text-[#d4c4b0] hover:text-[#ffc665] shrink-0 transition-colors cursor-pointer"
          >
            Shaded Pedestrian Corridors
          </button>
        </div>
      </div>

      {/* Docked Rich Bottom Input Bar */}
      <div className="p-4 bg-[#191c21] border-t border-[#504535] z-10 shrink-0">
        <form onSubmit={handleSend} className="max-w-5xl mx-auto flex items-center gap-2">
          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  onOpenARScan(file.name);
                };
                reader.readAsDataURL(file);
              }
            }}
          />

          {/* Camera / AR Scan Button */}
          <button
            type="button"
            onClick={() => onOpenARScan()}
            title="Upload Photo for AR Landmark Analysis"
            aria-label="Upload Photo for AR Landmark Analysis"
            className="p-2.5 rounded-lg text-[#9d8f7c] hover:text-[#ffc665] hover:bg-[#272a2f] transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-xl" data-icon="photo_camera">
              photo_camera
            </span>
          </button>

          {/* Attach Document Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Attach Travel Document / Pass"
            aria-label="Attach Travel Document / Pass"
            className="p-2.5 rounded-lg text-[#9d8f7c] hover:text-[#ffc665] hover:bg-[#272a2f] transition-colors shrink-0"
          >
            <span className="material-symbols-outlined text-xl" data-icon="attach_file">
              attach_file
            </span>
          </button>

          {/* Microphone Dictation Button */}
          <button
            type="button"
            onClick={toggleSpeechRecognition}
            title={isListening ? "Listening... Click to stop" : "Voice Input (Speech-to-Text)"}
            aria-label={isListening ? "Listening... Click to stop" : "Voice Input (Speech-to-Text)"}
            className={`p-2.5 rounded-lg transition-colors shrink-0 ${
              isListening
                ? 'bg-[#ffc665] text-[#432c00] animate-pulse'
                : 'text-[#9d8f7c] hover:text-[#ffc665] hover:bg-[#272a2f]'
            }`}
          >
            <span className="material-symbols-outlined text-xl" data-icon="mic">
              mic
            </span>
          </button>

          {/* Text Input Box */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Gemini about UAE landmarks, cultural etiquette, or eco-transit..."
              className="w-full bg-[#101418] border border-[#504535] rounded-xl px-4 py-2.5 text-sm text-[#e1e2e9] placeholder-[#9d8f7c] focus:outline-none focus:border-[#ffc665] transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            aria-label="Send message"
            className="p-2.5 rounded-xl bg-[#e5a93c] text-[#432c00] hover:bg-[#ffc665] disabled:opacity-50 disabled:cursor-not-allowed transition-all shrink-0 font-bold shadow cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl" data-icon="send">
              send
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};
