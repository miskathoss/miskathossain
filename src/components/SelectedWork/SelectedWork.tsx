"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function SelectedWork() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>(".project-scene");

      scenes.forEach((scene) => {
        const visual = scene.querySelector(".project-visual");
        const details = scene.querySelector(".project-details");

        // Subtle entrance scale & parallax
        if (visual) {
          gsap.fromTo(
            visual,
            { y: 60, scale: 0.94, opacity: 0.6 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: scene,
                start: "top 80%",
                end: "top 30%",
                scrub: 0.6,
              },
            }
          );
        }

        if (details) {
          gsap.fromTo(
            details,
            { y: 40, opacity: 0.3 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: scene,
                start: "top 75%",
                end: "top 35%",
                scrub: 0.5,
              },
            }
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative w-full bg-dark text-cream py-16 sm:py-24 px-6 sm:px-12 lg:px-24 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-8 h-[1px] bg-rose" />
              <span>02 / SELECTED WORK</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.04em] leading-[1.05] text-cream">
              WORK THAT <br />
              <span className="font-semibold text-white">DOES THE TALKING.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-cream/70 font-light leading-relaxed mb-3">
              Real commercial results for coaches, leaders, and ambitious platforms.
              Every project is an end-to-end bespoke partnership.
            </p>
            <div className="text-xs uppercase tracking-[0.18em] text-cream/40 font-mono">
              FEATURED CLIENT ARCHIVE &bull; 2022–2026
            </div>
          </div>
        </div>

        {/* Scene-Based Projects Presentation (Top 5 Featured) */}
        <div className="space-y-16 sm:space-y-24">
          {projects.slice(0, 5).map((project, idx) => (
            <article
              key={project.id}
              className="project-scene relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 border-b border-white/[0.08] pb-16 sm:pb-24 last:border-b-0"
            >
              {/* Scene Details */}
              <div
                className={`project-details w-full lg:w-5/12 flex flex-col justify-center order-2 ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Project Number & Category */}
                <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.2em] uppercase text-rose mb-4 sm:mb-6">
                  <span>PROJECT {project.number}</span>
                  <span className="w-4 h-[1px] bg-white/20" />
                  <span className="text-cream/60 font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-3xl sm:text-5xl font-light tracking-[-0.03em] text-white mb-4 sm:mb-6">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-base sm:text-lg text-rose/90 font-medium mb-4 leading-snug">
                  &ldquo;{project.tagline}&rdquo;
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-cream/70 font-light leading-relaxed mb-8 max-w-lg">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.14em] font-medium bg-white/[0.05] border border-white/[0.1] text-cream/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Link to Case Study */}
                <div>
                  <Link
                    href={`/work/${project.slug}`}
                    data-cursor-text="CASE STUDY"
                    className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-cream hover:text-rose transition-colors"
                  >
                    <span className="relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-rose group-hover:after:h-[2px] after:transition-all">
                      VIEW CASE STUDY
                    </span>
                    <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-rose group-hover:bg-rose group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Large Project Visual Scene */}
              <div
                className={`project-visual w-full lg:w-7/12 order-1 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor-text="VIEW"
                  className="group relative block w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/[0.12] bg-dark-surface shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category}`}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                      priority={idx === 0}
                    />
                    {/* Subtle gradient vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3.5 py-1.5 rounded-full backdrop-blur-xl bg-dark/70 border border-white/[0.16] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] font-mono text-cream/90 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose" />
                    <span>{project.client}</span>
                  </div>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View ALL PROJECTS CTA Button */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center">
          <Link
            href="/work"
            data-cursor-text="ALL WORK"
            className="group relative inline-flex items-center gap-3.5 px-8 sm:px-12 py-4.5 sm:py-5 rounded-full border border-white/[0.18] bg-white/[0.04] hover:bg-rose hover:border-rose text-white text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(224,40,79,0.35)] active:scale-95"
          >
            <span>View ALL PROJECTS</span>
            <span className="w-8 h-8 rounded-full bg-white/[0.08] group-hover:bg-white/20 flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
