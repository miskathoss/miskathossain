"use client";

import React from "react";

const clientRoster = [
  { name: "TeamsOfMen", role: "Athletic Character & Leadership" },
  { name: "Christopher Miller", role: "Executive & Relationship Coaching" },
  { name: "Cara Walker", role: "Learning & Organizational Culture" },
  { name: "Midwest Crochet Society", role: "Creative Community Platform" },
  { name: "Tamika Leadership", role: "C-Suite Executive Advisory" },
];

export function SocialProof() {
  return (
    <section className="relative w-full bg-dark-pure text-cream py-24 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-4">
            <span className="w-6 h-[1px] bg-rose" />
            <span>SELECTED CLIENTS</span>
            <span className="w-6 h-[1px] bg-rose" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-cream leading-tight">
            TRUSTED TO TURN <br />
            <span className="font-semibold text-white">IDEAS INTO DESIGN.</span>
          </h2>
        </div>

        {/* Minimal Editorial Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {clientRoster.map((client) => (
            <div
              key={client.name}
              className="flex flex-col justify-center items-center text-center p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.16] transition-all duration-300"
            >
              <span className="text-sm sm:text-base font-medium text-white mb-1 tracking-tight">
                {client.name}
              </span>
              <span className="text-[11px] font-mono text-cream/50 uppercase tracking-wider">
                {client.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
