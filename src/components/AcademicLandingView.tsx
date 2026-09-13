import React from 'react';
import { ViewMode } from '../types';

interface AcademicLandingViewProps {
  onSwitchToChat: () => void;
  onOpenARScan: () => void;
  onOpenCulturalGuide: () => void;
  onOpenLandmarks: () => void;
}

export const AcademicLandingView: React.FC<AcademicLandingViewProps> = ({
  onSwitchToChat,
  onOpenARScan,
  onOpenCulturalGuide,
  onOpenLandmarks,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#101418] text-[#e1e2e9] scroll-smooth">
      {/* Sub-header Navigation Bar for Section Anchors */}
      <div className="bg-[#191c21]/80 backdrop-blur-md border-b border-[#504535]/40 py-2.5 px-6 sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none text-xs font-['Space_Grotesk']">
          <button
            onClick={() => scrollToSection('hero-section')}
            className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors whitespace-nowrap"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about-ai-section')}
            className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors whitespace-nowrap"
          >
            About AI
          </button>
          <button
            onClick={() => scrollToSection('problem-statement-section')}
            className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors whitespace-nowrap"
          >
            Problem Statement
          </button>
          <button
            onClick={() => scrollToSection('ai-solution-section')}
            className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors whitespace-nowrap"
          >
            AI Solution
          </button>
          <button
            onClick={() => scrollToSection('uae-impact-section')}
            className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors whitespace-nowrap"
          >
            UAE Impact
          </button>
          <button
            onClick={() => scrollToSection('conclusion-section')}
            className="text-[#d4c4b0] hover:text-[#ffc665] transition-colors whitespace-nowrap"
          >
            Conclusion
          </button>
        </div>

        <button
          onClick={onSwitchToChat}
          className="px-3 py-1.5 rounded-lg bg-[#e5a93c] text-[#432c00] font-['Space_Grotesk'] text-xs font-bold hover:bg-[#ffc665] transition-all flex items-center gap-1.5 shadow shrink-0 cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm" data-icon="rocket_launch">
            rocket_launch
          </span>
          <span>Launch Interactive Concierge</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        {/* ========================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================= */}
        <section id="hero-section" className="text-center space-y-6 pt-4">
          {/* Academic Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#191c21] border border-[#504535] text-xs font-['Space_Grotesk'] text-[#ffc665] shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
            <span>Developed by Sanath. C-9C | Grade 9 AI • Subject Enrichment Activity</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#e1e2e9] leading-[1.1]">
            Smart UAE AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc665] via-[#e5a93c] to-[#e9c349]">
              Tourism Assistant
            </span>
          </h1>

          {/* Subtitle / Quote */}
          <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-xl text-[#d4c4b0] max-w-3xl mx-auto leading-relaxed italic">
            “Empowering visitors with real-time AI guidance and seamless cultural exploration across UAE landmarks.”
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('ai-solution-section')}
              className="px-6 py-3 rounded-xl bg-[#e5a93c] text-[#432c00] font-['Space_Grotesk'] text-sm font-bold shadow-lg hover:bg-[#ffc665] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore AI Capabilities</span>
              <span className="material-symbols-outlined text-base" data-icon="arrow_downward">
                arrow_downward
              </span>
            </button>

            <button
              onClick={() => scrollToSection('uae-impact-section')}
              className="px-6 py-3 rounded-xl bg-[#272a2f] border border-[#504535] text-[#e1e2e9] font-['Space_Grotesk'] text-sm font-semibold hover:border-[#ffc665] hover:text-[#ffc665] transition-all cursor-pointer"
            >
              UAE Vision 2071 Alignment
            </button>

            <button
              onClick={onSwitchToChat}
              className="px-6 py-3 rounded-xl bg-[#191c21] border border-[#ffc665]/60 text-[#ffc665] font-['Space_Grotesk'] text-sm font-bold hover:bg-[#ffc665] hover:text-[#432c00] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-base" data-icon="chat">
                chat
              </span>
              <span>Launch Interactive Chatbot</span>
            </button>
          </div>

          {/* Four Metric Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-xl bg-[#191c21] border border-[#504535]/60 text-center">
              <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#ffc665] block">
                100%
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                Real-time Insights
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#191c21] border border-[#504535]/60 text-center">
              <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#e9c349] block">
                50+
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                Global Languages
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#191c21] border border-[#504535]/60 text-center">
              <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#b7d0ff] block">
                AR
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                Landmark Recognition
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#191c21] border border-[#504535]/60 text-center">
              <span className="font-['Space_Grotesk'] text-3xl font-bold text-[#4ade80] block">
                Vision 2071
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                Smart Eco-Transit
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. ABOUT AI SECTION */}
        {/* ========================================================= */}
        <section id="about-ai-section" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#ffc665] px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]">
              Technology Foundation
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e1e2e9]">
              About AI Section
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#d4c4b0] max-w-2xl mx-auto">
              Harnessing cutting-edge Artificial Intelligence subfields to revolutionize how international visitors connect with Emirati heritage and futuristic cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: NLP */}
            <div className="p-6 rounded-2xl bg-[#191c21] border border-[#504535]/60 hover:border-[#ffc665]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#272a2f] border border-[#504535] flex items-center justify-center text-[#ffc665] mb-4">
                  <span className="material-symbols-outlined text-2xl" data-icon="forum">
                    forum
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e1e2e9] mb-3">
                  Natural Language Processing (NLP)
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed mb-6">
                  Powers instant cross-linguistic communication through state-of-the-art neural translation and conversational interfaces. NLP enables the assistant to comprehend multilingual visitor questions, decode local Emirati cultural idioms, and converse seamlessly in voice and text.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#504535]/40 text-xs text-[#9d8f7c]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#22c55e] text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>Real-time speech-to-text and contextual translation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#22c55e] text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>Sentiment analysis for tourist satisfaction tracking</span>
                </div>
              </div>
            </div>

            {/* Card 2: Computer Vision */}
            <div className="p-6 rounded-2xl bg-[#191c21] border border-[#504535]/60 hover:border-[#b7d0ff]/60 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#272a2f] border border-[#504535] flex items-center justify-center text-[#b7d0ff] mb-4">
                  <span className="material-symbols-outlined text-2xl" data-icon="visibility">
                    visibility
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e1e2e9] mb-3">
                  Computer Vision & Predictive Analytics
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed mb-6">
                  Combines visual feature extraction with mathematical forecasting. Deep Convolutional Neural Networks identify historical architecture and monuments via camera feed, while predictive algorithms compute optimal transit pathways considering real-time footfall and environmental sensors.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#504535]/40 text-xs text-[#9d8f7c]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#22c55e] text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>Point-and-discover landmark classification</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#22c55e] text-base" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>Dynamic crowd and temperature-aware route optimization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. PROBLEM STATEMENT SECTION */}
        {/* ========================================================= */}
        <section id="problem-statement-section" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#e9c349] px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]">
              Challenge Assessment
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e1e2e9]">
              Problem Statement Section
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#d4c4b0] max-w-2xl mx-auto">
              Identifying key obstacles experienced by international travelers visiting the UAE's rapidly expanding cultural and urban attractions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: The Core Dilemma (7 cols) */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#191c21] border border-[#504535]/60 space-y-5 flex flex-col justify-between">
              <div>
                <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#ffc665]">
                  The Core Dilemma
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#e1e2e9] mt-1 mb-3">
                  Fragmented Navigation, Language Hurdles, and Cultural Inaccessibility
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed">
                  Millions of international tourists arrive annually across Abu Dhabi, Dubai, Sharjah, and northern emirates. However, visitors face three critical friction points:
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#272a2f] border border-[#504535]/50 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#ffc665] text-xl shrink-0 mt-0.5" data-icon="route">
                    route
                  </span>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#e1e2e9]">
                      Choice Overload & Dynamic Planning
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                      Vast destination catalogs make manual schedule creation time-consuming and inefficient during peak seasonal weather.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#272a2f] border border-[#504535]/50 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#e9c349] text-xl shrink-0 mt-0.5" data-icon="translate">
                    translate
                  </span>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#e1e2e9]">
                      Multilingual Communication Barriers
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                      Difficulty interacting with local transportation, markets, and traditional souqs without specialized linguistic assistance.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#272a2f] border border-[#504535]/50 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#b7d0ff] text-xl shrink-0 mt-0.5" data-icon="museum">
                    museum
                  </span>
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-sm font-bold text-[#e1e2e9]">
                      Shallow Cultural Engagement
                    </h4>
                    <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                      Tourists often miss the deep historical narratives and significance of architectural heritage due to the lack of on-demand curated guides.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Why Smart AI is Needed (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#191c21] border border-[#e5a93c]/50 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#e5a93c]/20 border border-[#e5a93c] flex items-center justify-center text-[#ffc665]">
                  <span className="material-symbols-outlined text-2xl" data-icon="explore">
                    explore
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#e1e2e9]">
                  Why Smart AI is Needed
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed">
                  Traditional static map apps cannot adapt to real-time desert heat alerts, ongoing metro extensions, or customized cultural learning preferences. An integrated AI assistant closes this gap completely.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#272a2f] border border-[#504535] mt-6">
                <span className="font-['Space_Grotesk'] text-[10px] text-[#ffc665] uppercase font-bold tracking-wider block mb-1">
                  Target Milestone
                </span>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#e1e2e9] font-medium">
                  Seamless 1-click personalized experiences for over 25+ million expected annual UAE tourists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. AI SOLUTION SECTION */}
        {/* ========================================================= */}
        <section id="ai-solution-section" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#ffc665] px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]">
              Core Features
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e1e2e9]">
              AI Solution Section
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#d4c4b0] max-w-2xl mx-auto">
              A comprehensive, unified mobile and web platform powered by three intelligent pillars tailored for UAE exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 01 */}
            <div className="p-6 rounded-2xl bg-[#191c21] border border-[#504535]/60 hover:border-[#ffc665] transition-all flex flex-col justify-between group">
              <div>
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffc665] uppercase tracking-wider block mb-2">
                  Feature 01
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e1e2e9] group-hover:text-[#ffc665] transition-colors mb-3">
                  Smart Itinerary Generator
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed mb-6">
                  Real-time path optimization calculating optimal travel schedules based on live Dubai RTA & Abu Dhabi DoT traffic, climate/weather sensors, opening hours, and individual visitor interests.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#504535]/40">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#272a2f] text-[11px] font-['Space_Grotesk'] text-[#9d8f7c]">
                  Updates dynamically in under 2 seconds
                </span>
                <button
                  onClick={onSwitchToChat}
                  className="w-full py-2 px-3 rounded-lg bg-[#272a2f] hover:bg-[#e5a93c] hover:text-[#432c00] text-[#ffc665] font-['Space_Grotesk'] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Try Itinerary Generator</span>
                  <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Feature 02 */}
            <div className="p-6 rounded-2xl bg-[#191c21] border border-[#504535]/60 hover:border-[#e9c349] transition-all flex flex-col justify-between group">
              <div>
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#e9c349] uppercase tracking-wider block mb-2">
                  Feature 02
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e1e2e9] group-hover:text-[#e9c349] transition-colors mb-3">
                  AR Cultural Visual Guide
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed mb-6">
                  Instant audio narration and visual historical overlays delivered upon pointing a smartphone camera at any iconic landmark, such as the Burj Khalifa, Sheikh Zayed Grand Mosque, or Al Fahidi Fort.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#504535]/40">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#272a2f] text-[11px] font-['Space_Grotesk'] text-[#9d8f7c]">
                  High-accuracy computer vision recognition
                </span>
                <button
                  onClick={onOpenARScan}
                  className="w-full py-2 px-3 rounded-lg bg-[#272a2f] hover:bg-[#e9c349] hover:text-[#432c00] text-[#e9c349] font-['Space_Grotesk'] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Open AR Scanner</span>
                  <span className="material-symbols-outlined text-sm" data-icon="photo_camera">
                    photo_camera
                  </span>
                </button>
              </div>
            </div>

            {/* Feature 03 */}
            <div className="p-6 rounded-2xl bg-[#191c21] border border-[#504535]/60 hover:border-[#b7d0ff] transition-all flex flex-col justify-between group">
              <div>
                <span className="font-['Space_Grotesk'] text-xs font-bold text-[#b7d0ff] uppercase tracking-wider block mb-2">
                  Feature 03
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e1e2e9] group-hover:text-[#b7d0ff] transition-colors mb-3">
                  Multilingual Support
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed mb-6">
                  Instant bidirectional voice and text translation between international tourists and local service providers, taxi drivers, hospitality teams, and traditional bazaar artisans across 50+ languages.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#504535]/40">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#272a2f] text-[11px] font-['Space_Grotesk'] text-[#9d8f7c]">
                  Latency &lt; 300ms conversational audio
                </span>
                <button
                  onClick={onOpenCulturalGuide}
                  className="w-full py-2 px-3 rounded-lg bg-[#272a2f] hover:bg-[#b7d0ff] hover:text-[#003062] text-[#b7d0ff] font-['Space_Grotesk'] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Emirati Dialect Guide</span>
                  <span className="material-symbols-outlined text-sm" data-icon="translate">
                    translate
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. UAE IMPACT SECTION */}
        {/* ========================================================= */}
        <section id="uae-impact-section" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#4ade80] px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]">
              Strategic Vision
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e1e2e9]">
              UAE Impact Section
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#d4c4b0] max-w-2xl mx-auto">
              Directly advancing the UAE's long-term national agenda for sustainable digital transformation and global leadership.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#191c21] border border-[#504535]/60 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#22c55e]/20 text-[#4ade80] border border-[#22c55e]/40 font-['Space_Grotesk'] text-xs font-bold uppercase">
                UAE Vision 2071 & National AI Strategy
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#e1e2e9]">
              Pioneering Sustainable Mobility, Smart Hospitality, & Cultural Immersion
            </h3>

            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#d4c4b0] leading-relaxed">
              The Smart UAE AI Tourism Assistant directly champions the foundational tenets of UAE Centennial 2071 and the UAE National Artificial Intelligence Strategy 2031. By coordinating traveler distribution and offering intelligent multimodal navigation, the solution eliminates urban transit congestion and boosts eco-friendly public transportation ridership across the Dubai Metro, Abu Dhabi Smart Bus network, and green maritime ferries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#272a2f] border border-[#504535]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#ffc665]">
                  <span className="material-symbols-outlined text-lg" data-icon="trending_up">
                    trending_up
                  </span>
                  <h4 className="font-['Space_Grotesk'] text-sm font-bold">
                    Economic Diversification
                  </h4>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c] leading-relaxed">
                  Stimulates local heritage trade, traditional artisan souqs, and cultural micro-businesses through intelligent discovery recommendations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#272a2f] border border-[#504535]/40 space-y-2">
                <div className="flex items-center gap-2 text-[#4ade80]">
                  <span className="material-symbols-outlined text-lg" data-icon="eco">
                    eco
                  </span>
                  <h4 className="font-['Space_Grotesk'] text-sm font-bold">
                    Sustainable Tourism Goals
                  </h4>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c] leading-relaxed">
                  Curbs carbon footprint by dynamically routing travelers to shaded, climate-controlled pedestrian pathways and zero-emission public transport.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. CONCLUSION SECTION */}
        {/* ========================================================= */}
        <section id="conclusion-section" className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#ffc665] px-3 py-1 rounded-full bg-[#191c21] border border-[#504535]">
              Project Wrap-Up
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e1e2e9]">
              Conclusion Section
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#d4c4b0] max-w-2xl mx-auto">
              Summary of demonstrated project outcomes and visionary expansions for autonomous, zero-carbon future travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Summary of Outcomes */}
            <div className="p-6 rounded-2xl bg-[#191c21] border border-[#504535]/60 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e1e2e9] mb-3">
                  Summary of Outcomes
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed mb-4">
                  This Grade 9 AI enrichment project successfully illustrates how machine learning architectures—specifically NLP and computer vision—can be deployed practically to solve tangible tourism dilemmas in the UAE.
                </p>

                <div className="space-y-2 text-xs text-[#9d8f7c]">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#22c55e] text-base shrink-0" data-icon="check_circle">
                      check_circle
                    </span>
                    <span>Proved the viability of real-time multi-criteria itinerary recalculation for desert climates.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#22c55e] text-base shrink-0" data-icon="check_circle">
                      check_circle
                    </span>
                    <span>Bridged communication divides between guests from over 190 nationalities and Emirati hosts.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#22c55e] text-base shrink-0" data-icon="check_circle">
                      check_circle
                    </span>
                    <span>Constructed clean, responsive web architecture compliant with modern digital design rubrics.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Future Possibilities */}
            <div className="p-6 rounded-2xl bg-[#191c21] border border-[#504535]/60 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e1e2e9] mb-3">
                  Future Possibilities
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-sm text-[#d4c4b0] leading-relaxed mb-4">
                  Looking ahead toward further prototype iterations and higher grade levels, the system can expand into autonomous infrastructure integration:
                </p>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#272a2f] border border-[#504535]/40">
                    <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffc665] block mb-0.5">
                      Eco-Friendly Carbon-Footprint Tracking
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                      Gamified tourist dashboards rewarding carbon offsets and green hotel bookings with national cultural passes.
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#272a2f] border border-[#504535]/40">
                    <span className="font-['Space_Grotesk'] text-xs font-bold text-[#b7d0ff] block mb-0.5">
                      Integration with Autonomous Transit
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                      Direct synchronization with UAE self-driving taxis, autonomous aerial mobility (sky taxis), and driverless metro lines.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. PROJECT FOOTER */}
        {/* ========================================================= */}
        <footer className="pt-12 pb-6 border-t border-[#504535]/60 text-center space-y-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#191c21] border border-[#504535] text-[#ffc665]">
            <span className="material-symbols-outlined text-xl" data-icon="school">
              school
            </span>
          </div>

          <div className="space-y-1">
            <p className="font-['Space_Grotesk'] text-sm font-bold text-[#e1e2e9]">
              Sanath. C-9C | Grade 9 AI Subject Enrichment Activity | Academic Year 2026–2027
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
              Designed for Web Designing Activity submission • In alignment with UAE Vision 2071
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
