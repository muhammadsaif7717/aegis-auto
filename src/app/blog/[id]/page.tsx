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
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Blog Top Minimal Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <AegisLogo />
          <Link
            href="/#journal"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-amber-700 transition-colors px-3 py-1.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-slate-100"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Studio</span>
          </Link>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-700 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#journal" className="hover:text-amber-700 transition-colors">
            Journal
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-amber-800 font-bold truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Category & Title Header */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-wider text-amber-800 bg-amber-100 border border-amber-300 rounded-full mb-4 uppercase">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>

          {/* Meta Info Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 font-bold">
                {post.author[0]}
              </div>
              <div>
                <span className="text-slate-900 font-bold block">{post.author}</span>
                <span className="text-[11px] text-slate-500">{post.authorRole}</span>
              </div>
            </div>

            <div className="h-4 w-px bg-slate-300 hidden sm:block" />

            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              <span>{post.date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[280px] sm:h-[420px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl mb-12 bg-slate-100">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover object-center filter brightness-[0.95]"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>

        {/* Article Body */}
        <article className="space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
          {/* Intro Paragraph */}
          <p className="text-lg sm:text-xl font-medium text-slate-900 leading-relaxed border-l-4 border-amber-500 pl-4 py-1">
            {post.content.intro}
          </p>

          {/* Sections */}
          {post.content.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {section.heading}
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">{section.body}</p>

              {section.technicalTip && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-sm text-amber-950 flex items-start gap-3 my-4">
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-900 block mb-0.5">
                      Atelier Technical Tip:
                    </span>
                    <span>{section.technicalTip}</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Key Takeaways Box (Light Mode Pristine) */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border-2 border-amber-400 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-bold text-slate-900 font-mono uppercase tracking-wider">
                Key Technical Takeaways
              </h3>
            </div>
            <ul className="space-y-3">
              {post.content.takeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Bottom Consultation Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-slate-200 text-center max-w-2xl mx-auto shadow-md">
          <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mx-auto mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
            Schedule an Inspection for Your Vehicle
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Consult with our master certified film architect in our Manhattan cleanroom studio. We provide digital paint depth analysis and custom CAD plot previews.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#configurator"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md"
            >
              Configure Your Build
            </Link>
            <a
              href="tel:+18005899727"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-300 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call +1 (800) 589-WRAP</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-500 bg-white">
        <p>© 2026 Aegis Auto. All rights reserved. Cleanroom Supercar Atelier.</p>
      </footer>
    </div>
  );
}
