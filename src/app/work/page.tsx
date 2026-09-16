import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navigation/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { IntakeModal } from "@/components/Common/IntakeModal";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | Miskat Hossain",
  description:
    "Explore selected brand identity, web design, and digital experience case studies by Miskat Hossain.",
};

export default function WorkIndexPage() {
  return (
    <main className="relative bg-dark min-h-screen text-cream">
      <Navbar />

      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-4 sm:mb-6">
            <span className="w-8 h-[1px] bg-rose" />
            <span>ARCHIVE &bull; SELECTED WORK</span>
          </div>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-light tracking-[-0.04em] text-cream mb-6 sm:mb-8">
            ALL <span className="font-semibold text-white">PROJECTS.</span>
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-cream/70 font-light leading-relaxed mb-12 sm:mb-14">
            A curated collection of commercial identities, responsive web platforms,
            and bespoke digital experiences built for ambitious leaders and coaches.
          </p>

          {/* Project List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between rounded-[28px] overflow-hidden border border-white/[0.1] bg-dark-surface p-6 sm:p-8 hover:border-white/[0.25] transition-all duration-500"
              >
                <div>
                  <Link
                    href={`/work/${project.slug}`}
                    data-cursor-text="VIEW"
                    className="relative block aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </Link>

                  <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-rose uppercase mb-2">
                    <span>PROJECT {project.number}</span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm text-cream/60 font-light mb-6">
                    {project.category}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-cream/50 px-2.5 py-0.5 rounded-full bg-white/[0.04]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${project.slug}`}
                    data-cursor-text="EXPLORE"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-rose hover:text-white transition-colors"
                  >
                    <span>CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <IntakeModal />
    </main>
  );
}
