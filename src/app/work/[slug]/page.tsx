import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navigation/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case Study by Miskat Hossain`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.category}`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const cs = project.caseStudy;

  return (
    <main className="relative bg-dark min-h-screen text-cream selection:bg-rose selection:text-white">
      <Navbar />

      {/* 1. HERO */}
      <section className="pt-28 sm:pt-36 pb-12 px-6 sm:px-12 lg:px-24 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#work"
            data-cursor-text="BACK"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-cream/60 hover:text-rose transition-colors mb-8 sm:mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </Link>

          <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-4">
            <span>PROJECT {project.number}</span>
            <span className="w-6 h-[1px] bg-white/20" />
            <span className="text-cream/70">{project.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-[-0.04em] text-cream mb-6 leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl font-light text-rose/90 max-w-3xl leading-relaxed mb-12">
            &ldquo;{project.tagline}&rdquo;
          </p>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/[0.08] pt-8 mb-16 text-xs uppercase tracking-wider">
            <div>
              <span className="block text-cream/40 font-mono mb-1">Client</span>
              <span className="font-semibold text-white">{project.client}</span>
            </div>
            <div>
              <span className="block text-cream/40 font-mono mb-1">Discipline</span>
              <span className="font-semibold text-white">{project.category}</span>
            </div>
            <div>
              <span className="block text-cream/40 font-mono mb-1">Year</span>
              <span className="font-semibold text-white">{project.year}</span>
            </div>
            <div>
              <span className="block text-cream/40 font-mono mb-1">Deliverables</span>
              <span className="font-semibold text-white">
                {cs.deliverables.length} Core Assets
              </span>
            </div>
          </div>

          {/* Hero Showcase Visual */}
          <div className="relative aspect-[16/10] w-full rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/[0.14] bg-dark-surface shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 lg:px-24 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-6 h-[1px] bg-rose" />
              <span>01 / CONTEXT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              THE CHALLENGE.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base sm:text-xl text-cream/80 font-light leading-relaxed">
              {cs.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE THINKING */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 lg:px-24 bg-dark-pure border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-6 h-[1px] bg-rose" />
              <span>02 / STRATEGY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              THE THINKING.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base sm:text-xl text-cream/80 font-light leading-relaxed">
              {cs.thinking}
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE DIRECTION */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 lg:px-24 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-3">
              <span className="w-6 h-[1px] bg-rose" />
              <span>03 / ART DIRECTION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              THE DIRECTION.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base sm:text-xl text-cream/80 font-light leading-relaxed">
              {cs.direction}
            </p>
          </div>
        </div>
      </section>

      {/* 5. THE IDENTITY */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 lg:px-24 bg-dark-pure border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-4">
            <span className="w-6 h-[1px] bg-rose" />
            <span>04 / SYSTEM DESIGN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-12">
            THE IDENTITY.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {cs.identityDetails.map((detail, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/[0.1] bg-white/[0.03] flex flex-col justify-between"
              >
                <span className="text-xs font-mono text-rose mb-4 font-semibold">
                  0{idx + 1}
                </span>
                <p className="text-sm text-cream/85 leading-relaxed font-light">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* 6. THE WEBSITE / DIGITAL EXPERIENCE */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 lg:px-24 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-4">
            <span className="w-8 h-[1px] bg-rose" />
            <span>05 / DIGITAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-8 sm:mb-10">
            THE WEBSITE &amp; INTERACTION.
          </h2>

          <div className="space-y-4 mb-10 sm:mb-12">
            {cs.webDetails.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
              >
                <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-cream/85 font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. THE RESULT */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 lg:px-24 bg-dark-pure border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-4">
            <span className="w-8 h-[1px] bg-rose" />
            <span>06 / COMMERCIAL IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-6">
            THE RESULT.
          </h2>

          <p className="text-lg sm:text-2xl font-light text-cream/90 leading-relaxed mb-10 sm:mb-12 max-w-3xl">
            {cs.result}
          </p>

          {/* Metrics highlights */}
          {cs.metrics && cs.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-6 rounded-2xl border border-white/[0.1] bg-white/[0.03]"
                >
                  <div className="text-3xl sm:text-4xl font-semibold text-white mb-1 tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-rose font-mono">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 8. COMPLETE DESIGN SHOWCASE */}
      {(project.fullImage || (project.gallery && project.gallery.length > 0)) && (
        <section className="py-14 sm:py-20 px-6 sm:px-12 lg:px-24 border-b border-white/[0.08]">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] uppercase text-rose mb-4">
              <span className="w-8 h-[1px] bg-rose" />
              <span>07 / DESIGN SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-8">
              FULL SYSTEM PRESENTATION.
            </h2>
            {project.fullImage && (
              <div className="relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/[0.12] bg-dark-surface shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.fullImage}
                  alt={`${project.title} Full Showcase`}
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                />
              </div>
            )}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-8 space-y-8">
                {project.gallery.map((gImg, idx) => (
                  <div
                    key={idx}
                    className="relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/[0.12] bg-dark-surface shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={gImg}
                      alt={`${project.title} Detail ${idx + 1}`}
                      className="w-full h-auto object-contain block"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 9. NEXT PROJECT */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.24em] text-cream/40 font-mono mb-4">
            NEXT CASE STUDY
          </div>

          <Link
            href={`/work/${nextProject.slug}`}
            data-cursor-text="NEXT"
            className="group inline-block"
          >
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.04em] text-white group-hover:text-rose transition-colors duration-300 mb-6">
              {nextProject.title}
              <ArrowUpRight className="inline-block w-8 h-8 sm:w-12 sm:h-12 ml-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
            </h3>
            <p className="text-base sm:text-lg text-cream/60 font-light">
              {nextProject.category}
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
