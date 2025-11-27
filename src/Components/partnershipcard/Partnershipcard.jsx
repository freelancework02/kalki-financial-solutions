import React, { useState } from "react";
import {
  Handshake,
  Notebook,
  BookOpenText,
  ChartNoAxesCombined,
  X,
  ChevronRight,
  Calendar,
  CheckCircle
} from "lucide-react";

const cardData = [
  {
    title: "Professional Responsibilities",
    description: [
      "Embrace the system, follow it, and align with your leaders.",
      "Allow your leaders to guide you while you earn and learn simultaneously.",
      "Invite anyone and everyone to sessions and workshops.",
      "Schedule follow-up sessions with your leader to enhance growth.",
    ],
    Icon: Handshake,
  },
  {
    title: "Financial Education Mission",
    description: [
      "“An investment in knowledge pays the best interest.” We help families secure future needs while enjoying life fully.",
    ],
    Icon: Notebook,
  },
  {
    title: "Required Qualifications",
    description: ["Energetic self-starter", "Coachable", "18+ with valid SSN"],
    Icon: BookOpenText,
  },
  {
    title: "Career Development",
    description: [
      "Craft tailored plans across:",
      "Retirement planning",
      "Tax savings",
      "College savings",
      "Asset protection",
      "Risk management",
      "Estate planning",
    ],
    Icon: ChartNoAxesCombined,
  },
];

export default function PartnerProgramCorporate() {
  const [selectedCard, setSelectedCard] = useState(null);

  const primaryColor = "#0050A0";
  const secondaryColor = "#00B0FF";
  const borderColor = "#e2e8f0";

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/gobluelifellc/30min" });
    } else {
      window.open("https://calendly.com/gobluelifellc/30min", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="py-28 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border shadow-sm mb-8"
            style={{ borderColor }}>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: primaryColor }}>
              Professional Partnership
            </span>
            <div className="w-2 h-2 rounded-full bg-[#00B0FF]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-gray-900">
            Partner <span style={{ color: primaryColor }}>Program</span>
          </h2>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mt-10 p-8 rounded-2xl bg-white shadow-lg border-l-[6px] text-gray-700 text-md leading-relaxed"
            style={{ borderColor: primaryColor }}>
            BlueLife Financial Solutions LLC was born from a real struggle. Our founders spent six years
            without proper financial education, guidance, or the right insurance coverage for their own
            family—simply because nobody ever sat them down to explain how things work here.
            Like so many immigrant families, they were focused on visas, kids, careers, and survival, not
            navigating complicated financial systems. That experience shaped our mission: to make sure
            other families don’t spend years feeling confused or unprotected. Today, instead of pouring
            money into high-risk businesses like restaurants or shops, you can build a low-cost, flexible
            business backed by mentorship, education, and a proven system. We teach you how to protect
            families, grow wealth, and create long-term security—while building a career that actually fits
            your life. At BlueLife Financial Solutions LLC, we’re here so your family doesn’t go through
            what ours did.
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((card, idx) => (
            <div key={idx} onClick={() => setSelectedCard(card)}
              className="bg-white rounded-2xl p-6 border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer"
              style={{ borderColor }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border flex items-center justify-center"
                  style={{ borderColor: "rgba(0,80,160,0.2)" }}>
                  <card.Icon className="w-6 h-6" style={{ color: primaryColor }} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>

                  <ul className="space-y-2 mb-4">
                    {card.description.slice(0, 2).map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5" style={{ color: primaryColor }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center pt-3 border-t"
                    style={{ borderColor }}>
                    <span className="text-sm font-semibold flex items-center gap-1"
                      style={{ color: primaryColor }}>
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs text-gray-500">{card.description.length} points</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border shadow-lg" style={{ borderColor }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join BlueLife Financial Solutions LLC Today</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Start your journey toward a rewarding career in financial services with comprehensive training and mentorship.
            </p>

            <button
              onClick={openCalendly}
              className="w-full max-w-md mx-auto py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
              <Calendar className="w-5 h-5" />
              Schedule Discovery Call
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal Fixed */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}>
          <div className="bg-white rounded-2xl w-full max-w-xl border shadow-2xl overflow-hidden animate-fadeInUp"
            style={{ borderColor }}
            onClick={(e) => e.stopPropagation()}>
            
            <div className="flex items-center justify-between p-5 border-b"
              style={{ borderColor }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border"
                  style={{ borderColor: "rgba(0,80,160,0.2)" }}>
                  <selectedCard.Icon className="w-6 h-6" style={{ color: primaryColor }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{selectedCard.title}</h3>
              </div>
              <button onClick={() => setSelectedCard(null)}
                className="p-2 rounded-lg hover:bg-gray-100 transition">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-5 space-y-3">
              {selectedCard.description.map((item, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl border text-sm text-gray-700"
                  style={{ borderColor }}>
                  {item}
                </div>
              ))}
            </div>

            <div className="flex gap-3 p-5 border-t" style={{ borderColor }}>
              <button
                onClick={openCalendly}
                className="flex-1 py-3 rounded-xl font-semibold text-white transition hover:shadow-lg flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
                <Calendar className="w-4 h-4" />
                Book Call
              </button>

              <button onClick={() => setSelectedCard(null)}
                className="flex-1 py-3 rounded-xl font-semibold border transition hover:bg-gray-50"
                style={{ borderColor: primaryColor, color: primaryColor }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
