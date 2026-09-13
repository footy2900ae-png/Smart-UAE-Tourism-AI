import React from 'react';

interface TravelProtocolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TravelProtocolModal: React.FC<TravelProtocolModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#191c21] border border-[#504535] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-[#101418] border-b border-[#504535] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#ffc665] text-xl" data-icon="verified_user">
              verified_user
            </span>
            <div>
              <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#e1e2e9]">
                UAE Travel Protocol & Centennial 2071 Standards
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                Official Visitor Guidelines for Sustainability, Climate Safety, & Cultural Etiquette
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

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* Pillar 1: Thermal & Heat Shield */}
          <div className="p-4 rounded-xl bg-[#101418] border border-[#504535]/60 space-y-2">
            <div className="flex items-center gap-2 text-[#ffc665]">
              <span className="material-symbols-outlined text-lg" data-icon="wb_sunny">
                wb_sunny
              </span>
              <h4 className="font-['Space_Grotesk'] text-sm font-bold">
                1. Thermal Comfort & Heat Shield Protocol
              </h4>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[#d4c4b0] leading-relaxed">
              Between 11:30 AM and 03:00 PM, outdoor desert temperatures peak. The AI Assistant actively routes travelers into naturally cooled or geothermal architectural structures (such as Louvre Abu Dhabi's shaded microclimate dome or Qasr Al Watan interior galleries). Stay hydrated with complimentary chilled water stations available across public transit interchanges.
            </p>
          </div>

          {/* Pillar 2: Clean Zero-Emission Transit */}
          <div className="p-4 rounded-xl bg-[#101418] border border-[#504535]/60 space-y-2">
            <div className="flex items-center gap-2 text-[#4ade80]">
              <span className="material-symbols-outlined text-lg" data-icon="electric_bus">
                electric_bus
              </span>
              <h4 className="font-['Space_Grotesk'] text-sm font-bold">
                2. Zero-Emission Transit & Net Zero 2050 Alignment
              </h4>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[#d4c4b0] leading-relaxed">
              All routes favor 100% electric bus corridors, the driverless Dubai Metro, electric water abras, and the Saadiyat Island autonomous shuttle network. Riders achieve an average of 64% CO₂ emission reduction per traveler-kilometer compared to private fossil-fuel combustion car hire.
            </p>
          </div>

          {/* Pillar 3: Cultural Harmony & Photography Code */}
          <div className="p-4 rounded-xl bg-[#101418] border border-[#504535]/60 space-y-2">
            <div className="flex items-center gap-2 text-[#b7d0ff]">
              <span className="material-symbols-outlined text-lg" data-icon="policy">
                policy
              </span>
              <h4 className="font-['Space_Grotesk'] text-sm font-bold">
                3. Cultural Respect & Photography Code
              </h4>
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-[#d4c4b0] leading-relaxed">
              Photography of public architectural landmarks is widely celebrated. However, always seek permission before photographing local individuals, particularly families and women. Government, military, and diplomatic installations are strictly restricted from visual capture. Dress conservatively when entering mosques and heritage quarters.
            </p>
          </div>

          {/* UAE 2071 Pledge */}
          <div className="p-4 rounded-xl bg-[#272a2f] border border-[#e5a93c]/50 text-center space-y-1">
            <span className="font-['Space_Grotesk'] text-xs font-bold text-[#ffc665] block">
              UAE CENTENNIAL 2071 VISITOR PLEDGE
            </span>
            <p className="font-['Plus_Jakarta_Sans'] text-[#e1e2e9]">
              “To travel with respect, tread lightly upon our environment, and celebrate the timeless heritage of the Emirates.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
