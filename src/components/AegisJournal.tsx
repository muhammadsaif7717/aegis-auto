import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/aegisData";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export const AegisJournal: React.FC = () => {
  return (
    <section id="journal" className="py-20 sm:py-28 bg-[#070A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                Atelier Technical Journal
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Automotive Protection &{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Care Insights
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-md">
            Authoritative technical guides written by our certified master film architects on clearcoat physics, thermal polymer healing, and cleanroom standards.
          </p>
        </div>

        {/* 4 Technical Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl bg-[#0F172A] border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 overflow-hidden hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {/* Post Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.75]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0B0F17]/85 border border-white/[0.1] text-amber-300 backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-amber-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                  <span>Read Technical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
