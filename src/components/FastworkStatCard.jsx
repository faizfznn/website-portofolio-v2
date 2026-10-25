import React from 'react';
import { Star, Clock, CheckCircle2, ExternalLink, Zap } from 'lucide-react';
import fotoFaiz from '../assets/formal.webp';
import fastworkGig from '../assets/fastwork-gig.jpg';
import fastworkLogo from '../assets/fastwork-logo.svg';

const FASTWORK_GIG_URL = 'https://fastwork.id/user/faizfzn/ui-ux-30359744';

export default function FastworkStatCard() {
  const ratings = [
    { label: 'Response Speed', score: '5.0' },
    { label: 'Skills & Expertise', score: '5.0' },
    { label: 'Service & Communication', score: '5.0' },
    { label: 'Value for Money', score: '5.0' },
  ];

  return (
    <div
      className="relative w-[340px] sm:w-[380px] max-w-[calc(100vw-2.5rem)] bg-white rounded-2xl shadow-lg border border-zinc-100 overflow-hidden text-left p-4 sm:p-5 select-none cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        window.open(FASTWORK_GIG_URL, '_blank', 'noopener,noreferrer');
      }}
      role="tooltip"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
        <div className="flex items-center gap-2">
          <img
            src={fastworkLogo}
            alt="Fastwork"
            className="h-4 sm:h-4.5 w-auto object-contain"
          />
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Verified Freelancer
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-zinc-400 group-hover:text-blue-600 transition-colors">
          <span>View Gig</span>
          <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
        </div>
      </div>

      {/* Profile & Account Stats */}
      <div className="flex items-center gap-3 pt-3.5 pb-3">
        <div className="relative shrink-0">
          <img
            src={fotoFaiz}
            alt="Faiz Fauzan"
            className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-50 border border-zinc-200"
          />
          <div className="absolute -bottom-0.5 -right-0.5 bg-[#0066FF] text-white rounded-full p-0.5 shadow-sm">
            <CheckCircle2 className="w-3 h-3 text-white" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-zinc-950 truncate tracking-tight">
              Faiz Fauzan
            </h4>
            <div className="flex items-center gap-1 text-xs font-semibold text-zinc-900 tabular-nums">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>5.0</span>
            </div>
          </div>
          <p className="text-[11px] text-zinc-500 truncate">
            @faizfzn • UI/UX Designer
          </p>
          <p className="text-[10px] text-zinc-400 font-medium">
            Overall Rating 5.0 (2 Reviews)
          </p>
        </div>
      </div>

      {/* Gig Highlight Banner */}
      <div className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-50/80 border border-zinc-200/60 mb-3 hover:bg-zinc-100/70 transition-colors">
        <img
          src={fastworkGig}
          alt="UI/UX Mobile App & Website Design"
          className="w-16 h-12 rounded-lg object-cover border border-zinc-200/80 shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-zinc-900 line-clamp-2 leading-snug">
            Jasa Desain UI/UX Mobile App &amp; Website Modern, Interaktif (Figma)
          </p>
          <div className="flex items-center justify-between mt-1">
            <span className="text-[10px] font-medium text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/60">
              UI &amp; UX Design
            </span>
            <span className="text-[11px] font-bold text-zinc-900 tabular-nums">
              Starts at IDR 100k
            </span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {/* Metric 1: Response */}
        <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100/80">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-600 mb-0.5">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            <span>Response Time</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-extrabold text-blue-700 tabular-nums">
              2 Mins
            </span>
            <span className="text-[10px] font-semibold text-emerald-600">
              (Fast)
            </span>
          </div>
        </div>

        {/* Metric 2: Completion */}
        <div className="p-2.5 rounded-xl bg-emerald-50/50 border border-emerald-100/80">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-600 mb-0.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Completion Rate</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-extrabold text-emerald-700 tabular-nums">
              100%
            </span>
            <span className="text-[10px] text-zinc-500 font-medium">
              (2 Orders)
            </span>
          </div>
        </div>
      </div>

      {/* Response Speed Meter */}
      <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/70 mb-3">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="font-semibold text-zinc-800">Response speed</span>
          <span className="font-bold text-blue-600 tabular-nums">
            2 mins <span className="font-normal text-emerald-600">(Fast response)</span>
          </span>
        </div>

        {/* Pointer Arrow */}
        <div className="relative h-2 w-full mb-0.5">
          <div
            className="absolute top-0 -translate-x-1/2 text-zinc-900 flex flex-col items-center"
            style={{ left: '96%' }}
          >
            <span className="text-[9px] leading-none">▼</span>
          </div>
        </div>

        {/* Tricolor Bar */}
        <div className="h-2 w-full rounded-full flex overflow-hidden">
          <div className="w-[32%] bg-[#EF4444]" title="Slow" />
          <div className="w-[34%] bg-[#F59E0B]" title="Moderate" />
          <div className="w-[34%] bg-[#00B074]" title="Fast" />
        </div>

        <p className="text-[10px] text-zinc-500 mt-1.5 flex items-center gap-1">
          <Zap className="w-3 h-3 text-amber-500 shrink-0" />
          <span>Target &lt;30 mins to maintain fast response status</span>
        </p>
      </div>

      {/* Review Ratings Breakdown */}
      <div className="space-y-1.5 pt-1 pb-3 text-xs border-b border-zinc-100">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-zinc-800 text-[11px]">
            Client Reviews
          </span>
          <span className="font-bold text-zinc-900 text-[11px] tabular-nums">
            5.0 out of 5 (2 Reviews)
          </span>
        </div>

        {ratings.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-[11px] text-zinc-600"
          >
            <span className="truncate pr-2">{item.label}</span>
            <div className="flex items-center gap-1 shrink-0">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="font-semibold text-zinc-800 tabular-nums text-[10px] ml-1">
                {item.score}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Button */}
      <div className="pt-3">
        <a
          href={FASTWORK_GIG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0066FF] hover:bg-[#0052CC] active:bg-[#0047B3] text-white text-xs font-semibold rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          <span>View Gig on Fastwork</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <p className="text-[10px] text-zinc-400 text-center mt-1.5">
          Click to start consultation or check verified reviews
        </p>
      </div>
    </div>
  );
}
