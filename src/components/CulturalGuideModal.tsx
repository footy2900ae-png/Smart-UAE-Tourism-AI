import React, { useState } from 'react';
import { EMIRATI_DIALECT_PHRASES } from '../data/mockData';

interface CulturalGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const CulturalGuideModal: React.FC<CulturalGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'dialect' | 'etiquette' | 'majlis'>('dialect');
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const playAudio = (text: string, index: number) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech audio not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    setPlayingIndex(index);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.onend = () => setPlayingIndex(null);
    utterance.onerror = () => setPlayingIndex(null);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#191c21] border border-[#504535] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-[#101418] border-b border-[#504535] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#e9c349] text-xl" data-icon="translate">
              translate
            </span>
            <div>
              <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#e1e2e9]">
                Emirati Dialect & Cultural Heritage Guide
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                Curated in alignment with UNESCO Intangible Cultural Heritage of UAE
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

        {/* Tab Switcher */}
        <div className="flex border-b border-[#504535]/50 px-6 bg-[#101418]/60">
          <button
            onClick={() => setActiveTab('dialect')}
            className={`py-3 px-4 font-['Space_Grotesk'] text-xs font-bold transition-all border-b-2 ${
              activeTab === 'dialect'
                ? 'border-[#ffc665] text-[#ffc665]'
                : 'border-transparent text-[#9d8f7c] hover:text-[#e1e2e9]'
            }`}
          >
            Emirati Dialect Lexicon
          </button>
          <button
            onClick={() => setActiveTab('etiquette')}
            className={`py-3 px-4 font-['Space_Grotesk'] text-xs font-bold transition-all border-b-2 ${
              activeTab === 'etiquette'
                ? 'border-[#ffc665] text-[#ffc665]'
                : 'border-transparent text-[#9d8f7c] hover:text-[#e1e2e9]'
            }`}
          >
            Gahwa & Coffee Ritual
          </button>
          <button
            onClick={() => setActiveTab('majlis')}
            className={`py-3 px-4 font-['Space_Grotesk'] text-xs font-bold transition-all border-b-2 ${
              activeTab === 'majlis'
                ? 'border-[#ffc665] text-[#ffc665]'
                : 'border-transparent text-[#9d8f7c] hover:text-[#e1e2e9]'
            }`}
          >
            Majlis & Social Protocol
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'dialect' && (
            <div className="space-y-4">
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#d4c4b0] leading-relaxed">
                Connect deeply with Emirati hosts, taxi captains, and souq merchants by speaking authentic local phrases. Click the audio button to hear pronunciation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {EMIRATI_DIALECT_PHRASES.map((phrase, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#101418] border border-[#504535]/50 hover:border-[#ffc665]/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl font-bold text-[#ffc665] font-sans" dir="rtl">
                          {phrase.arabic}
                        </span>
                        <span className="font-['Space_Grotesk'] text-[10px] px-2 py-0.5 rounded-full bg-[#272a2f] text-[#e9c349]">
                          {phrase.category}
                        </span>
                      </div>

                      <div className="font-['Space_Grotesk'] text-sm font-bold text-[#e1e2e9]">
                        {phrase.transliteration}
                      </div>
                      <div className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c] mb-2">
                        “{phrase.english}”
                      </div>

                      <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#d4c4b0] leading-relaxed">
                        {phrase.context}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-[#504535]/30 flex items-center justify-between">
                      <span className="text-[11px] text-[#9d8f7c] font-mono">
                        Say: {phrase.audioPronunciation}
                      </span>
                      <button
                        onClick={() => playAudio(`${phrase.transliteration}. ${phrase.english}`, idx)}
                        className={`p-1.5 rounded-lg border text-xs transition-colors flex items-center gap-1 ${
                          playingIndex === idx
                            ? 'bg-[#ffc665] text-[#432c00] border-[#ffc665]'
                            : 'bg-[#272a2f] text-[#ffc665] border-[#504535] hover:bg-[#32353a]'
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm" data-icon="volume_up">
                          {playingIndex === idx ? 'graphic_eq' : 'volume_up'}
                        </span>
                        <span>Listen</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'etiquette' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#101418] border border-[#ffc665]/50 space-y-3">
                <div className="flex items-center gap-2 text-[#ffc665]">
                  <span className="material-symbols-outlined text-2xl" data-icon="local_cafe">
                    local_cafe
                  </span>
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold">
                    The Art of Gahwa (Emirati Spiced Coffee)
                  </h4>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed">
                  Gahwa is the heartbeat of Emirati hospitality, inscribed on the UNESCO Intangible Cultural Heritage List. It is traditionally brewed in a tall dallah (brass or silver coffee pot) with freshly roasted beans, cardamom pods, saffron threads, and cloves.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#272a2f] border border-[#504535]/50 space-y-2">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffc665] block">
                    1. Right Hand Always
                  </span>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#d4c4b0] leading-relaxed">
                    Always accept and hold the finjan (handleless cup) with your right hand. The host pours holding the dallah with their left hand and the finjan in their right.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#272a2f] border border-[#504535]/50 space-y-2">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#e9c349] block">
                    2. Serving Quantity
                  </span>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#d4c4b0] leading-relaxed">
                    The finjan is filled only one-third full. Filling it completely is considered a subtle signal that you should hurry; filling it a third means "stay, drink leisurely, and converse."
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#272a2f] border border-[#504535]/50 space-y-2">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-[#4ade80] block">
                    3. Shaking the Finjan
                  </span>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#d4c4b0] leading-relaxed">
                    When you have enjoyed enough (usually 2-3 cups), gently shake your wrist from side to side before handing the cup back. If you hand it back without shaking, the host will graciously pour another cup.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'majlis' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-[#101418] border border-[#b7d0ff]/50 space-y-3">
                <div className="flex items-center gap-2 text-[#b7d0ff]">
                  <span className="material-symbols-outlined text-2xl" data-icon="chair">
                    chair
                  </span>
                  <h4 className="font-['Space_Grotesk'] text-lg font-bold">
                    Majlis Seating & Social Etiquette
                  </h4>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed">
                  The Majlis ('place of sitting') is the cornerstone of Emirati social life where community leaders, elders, and neighbors gather to discuss affairs, share poetry, and welcome guests.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#272a2f] border border-[#504535]/50 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffc665] text-xl shrink-0 mt-0.5" data-icon="do_not_step">
                    do_not_step
                  </span>
                  <div>
                    <h5 className="font-['Space_Grotesk'] text-sm font-bold text-[#e1e2e9]">
                      Footwear Removal at Threshold
                    </h5>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                      Always take off your shoes before stepping onto the traditional carpets or majlis cushions.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#272a2f] border border-[#504535]/50 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#e9c349] text-xl shrink-0 mt-0.5" data-icon="pan_tool">
                    pan_tool
                  </span>
                  <div>
                    <h5 className="font-['Space_Grotesk'] text-sm font-bold text-[#e1e2e9]">
                      Greeting Order & Handshakes
                    </h5>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                      Move around the room counter-clockwise or start from the right, greeting elders first. Traditional men greet with light nose-to-nose touches or right-hand shakes.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#272a2f] border border-[#504535]/50 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#b7d0ff] text-xl shrink-0 mt-0.5" data-icon="airline_seat_recline_normal">
                    airline_seat_recline_normal
                  </span>
                  <div>
                    <h5 className="font-['Space_Grotesk'] text-sm font-bold text-[#e1e2e9]">
                      Foot Posture
                    </h5>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                      Sit cross-legged or tuck your legs beneath you. Avoid pointing the soles of your feet directly at another guest or host.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
