import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS, BlogPost } from "@/data/aegisData";
import { AegisLogo } from "@/components/AegisLogo";
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ChevronRight,
  Shield,
  CheckCircle2,
  Sparkles,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === id);

  if (!post) {
    return {
      title: "Article Not Found | Aegis Auto Journal",
    };
  }

  return {
    title: `${post.title} | Aegis Auto Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.imageUrl }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#070A0F] text-[#F8FAFC]">
      {/* Blog Top Minimal Header */}
      <header className="sticky top-0 z-40 bg-[#0B0F17]/90 backdrop-blur-md border-b border-white/[0.08] py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <AegisLogo />
          <Link
            href="/#journal"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-800/60"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Studio</span>
          </Link>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <Link href="/#journal" className="hover:text-amber-400 transition-colors">
            Journal
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span className="text-amber-400 font-medium truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Category & Title Header */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4 uppercase">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          {/* Meta Info Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                {post.author[0]}
              </div>
              <div>
                <span className="text-white font-semibold block">{post.author}</span>
                <span className="text-[11px] text-slate-400">{post.authorRole}</span>
              </div>
            </div>

            <div className="h-4 w-px bg-slate-800 hidden sm:block" />

            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[280px] sm:h-[420px] w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl mb-12 bg-slate-900">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover object-center filter brightness-[0.85]"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/60 via-transparent to-transparent" />
        </div>

        {/* Article Body */}
        <article className="space-y-8 text-slate-300 leading-relaxed text-base sm:text-lg">
          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed border-l-2 border-amber-500 pl-4 py-1">
            {post.content.intro}
          </p>

          {/* Sections */}
          {post.content.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {section.heading}
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">{section.body}</p>

              {section.technicalTip && (
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/30 text-sm text-amber-200/90 flex items-start gap-3 my-4">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-400 block mb-0.5">
                      Atelier Technical Tip:
                    </span>
                    <span>{section.technicalTip}</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Key Takeaways Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-amber-500/30 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white font-mono uppercase tracking-wider">
                Key Technical Takeaways
              </h3>
            </div>
            <ul className="space-y-3">
              {post.content.takeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Bottom Consultation Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#070A0F] border border-white/[0.1] text-center max-w-2xl mx-auto shadow-2xl">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-white mb-2">
            Schedule an Inspection for Your Vehicle
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            Consult with our master certified film architect in our Manhattan cleanroom studio. We provide digital paint depth analysis and custom CAD plot previews.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#configurator"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            >
              Configure Your Build
            </Link>
            <a
              href="tel:+18005899727"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +1 (800) 589-WRAP</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500 bg-[#070A0F]">
        <p>© 2026 Aegis Auto. All rights reserved. Cleanroom Supercar Atelier.</p>
      </footer>
    </div>
  );
}
