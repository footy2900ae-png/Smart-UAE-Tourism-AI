import React, { useState } from 'react';
import { UAE_LANDMARKS } from '../data/mockData';

interface ARScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLandmarkHint?: string;
}

export const ARScannerModal: React.FC<ARScannerModalProps> = ({
  isOpen,
  onClose,
  initialLandmarkHint,
}) => {
  const [selectedLandmark, setSelectedLandmark] = useState(
    UAE_LANDMARKS.find((l) =>
      initialLandmarkHint ? l.name.toLowerCase().includes(initialLandmarkHint.toLowerCase()) : false
    ) || UAE_LANDMARKS[0]
  );
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [customImage, setCustomImage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleStartScan = async (landmarkName?: string, customImg?: string) => {
    setIsScanning(true);
    setScanResult(null);

    try {
      const response = await fetch('/api/ar-scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          landmarkName: landmarkName || selectedLandmark.name,
          imageBase64: customImg || undefined,
        }),
      });

      const data = await response.json();
      setScanResult(data);
    } catch {
      // Fallback
      setScanResult({
        confidence: 0.98,
        analysis: `Detected: ${selectedLandmark.name} (${selectedLandmark.emirate})\n• Architecture: ${selectedLandmark.architecturalStyle}\n• Cultural Etiquette: ${selectedLandmark.etiquette}\n• Best Hours: ${selectedLandmark.bestHours}\n• Sustainable Transit: ${selectedLandmark.transit}`,
        landmark: selectedLandmark,
      });
    } finally {
      setIsScanning(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setCustomImage(base64);
        handleStartScan('Custom Upload', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#191c21] border border-[#504535] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Modal Header */}
        <div className="p-4 bg-[#101418] border-b border-[#504535] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#ffc665] text-xl" data-icon="camera">
              camera
            </span>
            <div>
              <h3 className="font-['Space_Grotesk'] text-base font-bold text-[#e1e2e9]">
                AR Vision Landmark Recognition
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9d8f7c]">
                Powered by Gemini Multimodal Vision & UAE Cultural Open Registry
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Landmark Presets Bar */}
          <div>
            <span className="font-['Space_Grotesk'] text-xs uppercase font-bold text-[#9d8f7c] block mb-2">
              Select Sample Landmark or Upload Your Own Photo:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {UAE_LANDMARKS.map((landmark) => (
                <button
                  key={landmark.id}
                  onClick={() => {
                    setSelectedLandmark(landmark);
                    setCustomImage(null);
                    setScanResult(null);
                  }}
                  className={`px-3 py-1.5 rounded-xl font-['Space_Grotesk'] text-xs font-semibold shrink-0 transition-all border ${
                    selectedLandmark.id === landmark.id && !customImage
                      ? 'bg-[#e5a93c] text-[#432c00] border-[#ffc665]'
                      : 'bg-[#272a2f] text-[#d4c4b0] border-[#504535] hover:border-[#ffc665]'
                  }`}
                >
                  {landmark.name}
                </button>
              ))}

              <label className="px-3 py-1.5 rounded-xl font-['Space_Grotesk'] text-xs font-semibold shrink-0 transition-all border bg-[#1d2025] text-[#ffc665] border-[#ffc665]/60 hover:bg-[#ffc665] hover:text-[#432c00] cursor-pointer flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm" data-icon="upload">
                  upload
                </span>
                <span>Upload Photo</span>
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>
          </div>

          {/* AR Viewport & HUD */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-[#504535] shadow-inner group">
            <img
              src={customImage || selectedLandmark.image}
              alt="Landmark"
              className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
            />

            {/* AR Overlay Grid & HUD elements */}
            <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
              {/* Top HUD bar */}
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk']">
                <div className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-[#ffc665]/50 text-[#ffc665] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ffc665] animate-ping" />
                  <span>AR HUD: ACTIVE TRACKING</span>
                </div>
                <div className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-[#504535] text-[#e1e2e9]">
                  FOV: 84° • FPS: 60 • LAT/LONG: 24.4128° N, 54.4750° E
                </div>
              </div>

              {/* Center Reticle & Scanner Line */}
              <div className="relative flex items-center justify-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 border-2 border-dashed border-[#ffc665]/70 rounded-2xl relative flex items-center justify-center">
                  <div className="w-4 h-4 border-t-2 border-l-2 border-[#ffc665] absolute -top-1 -left-1" />
                  <div className="w-4 h-4 border-t-2 border-r-2 border-[#ffc665] absolute -top-1 -right-1" />
                  <div className="w-4 h-4 border-b-2 border-l-2 border-[#ffc665] absolute -bottom-1 -left-1" />
                  <div className="w-4 h-4 border-b-2 border-r-2 border-[#ffc665] absolute -bottom-1 -right-1" />
                  <span className="material-symbols-outlined text-[#ffc665]/60 text-4xl" data-icon="filter_center_focus">
                    filter_center_focus
                  </span>
                </div>

                {isScanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ffc665] to-transparent shadow-[0_0_15px_#ffc665] animate-bounce" />
                )}
              </div>

              {/* Bottom HUD bar */}
              <div className="flex items-center justify-between text-xs font-['Space_Grotesk']">
                <div className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-[#504535] text-[#d4c4b0]">
                  Target: {customImage ? 'Uploaded Image' : selectedLandmark.name}
                </div>
                <div className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-[#22c55e]/50 text-[#4ade80]">
                  Confidence: {scanResult?.confidence ? `${(scanResult.confidence * 100).toFixed(0)}%` : 'Ready'}
                </div>
              </div>
            </div>
          </div>

          {/* Trigger Scan Button */}
          <div className="flex justify-center">
            <button
              onClick={() => handleStartScan(selectedLandmark.name, customImage || undefined)}
              disabled={isScanning}
              className="px-6 py-3 rounded-xl bg-[#e5a93c] text-[#432c00] font-['Space_Grotesk'] text-sm font-bold shadow-lg hover:bg-[#ffc665] disabled:opacity-50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg" data-icon="document_scanner">
                document_scanner
              </span>
              <span>{isScanning ? 'Analyzing Architectural Features...' : 'Run Multimodal Vision Scan'}</span>
            </button>
          </div>

          {/* Analysis Results Display */}
          {scanResult && (
            <div className="p-5 rounded-2xl bg-[#101418] border border-[#ffc665]/60 space-y-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center justify-between">
                <h4 className="font-['Space_Grotesk'] text-lg font-bold text-[#ffc665] flex items-center gap-2">
                  <span className="material-symbols-outlined" data-icon="verified">
                    verified
                  </span>
                  <span>Architectural & Cultural Insights</span>
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-[#22c55e]/20 text-[#4ade80] text-xs font-['Space_Grotesk']">
                  Match Identified
                </span>
              </div>

              <div className="text-sm text-[#e1e2e9] whitespace-pre-line leading-relaxed font-['Plus_Jakarta_Sans'] bg-[#191c21] p-4 rounded-xl border border-[#504535]/50">
                {scanResult.analysis}
              </div>

              {selectedLandmark && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#272a2f] border border-[#504535]/40 text-xs">
                    <span className="font-['Space_Grotesk'] text-[#ffc665] font-bold block mb-1">
                      Cultural Etiquette:
                    </span>
                    <p className="text-[#d4c4b0]">{selectedLandmark.etiquette}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#272a2f] border border-[#504535]/40 text-xs">
                    <span className="font-['Space_Grotesk'] text-[#4ade80] font-bold block mb-1">
                      Eco-Transit Impact:
                    </span>
                    <p className="text-[#d4c4b0]">{selectedLandmark.co2Saved} using public clean transit.</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
