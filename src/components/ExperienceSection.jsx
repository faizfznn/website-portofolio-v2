import React, { useState, useEffect } from 'react';
import organizationalExperience from '../data/organizationalExperience';
import achievements from '../data/achievementsExperience';
import { supabase } from '../lib/supabaseClient';
import { sortTimelineItems } from '../lib/dateUtils';
import FastworkTimelineItem from './FastworkTimelineItem';

const TimelineItem = ({ date, company, role, isActive = false }) => (
  <div className="relative pl-7 group">
    <div className="absolute left-[-4.5px] top-1.5 flex items-center justify-center">
      {isActive ? (
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
        </span>
      ) : (
        <div className="w-2 h-2 bg-zinc-300 rounded-full transition-transform duration-200 group-hover:scale-125 group-hover:bg-zinc-500" />
      )}
    </div>

    <div className="transition-opacity duration-200 group-hover:opacity-90">
      <p className="font-mono text-xs text-zinc-500 tabular-nums mb-0.5">{date}</p>
      <h3 className="text-base sm:text-lg font-semibold text-zinc-950 group-hover:text-black">
        {company}
      </h3>
      <p className="text-sm text-zinc-600 mt-0.5">{role}</p>
    </div>
  </div>
);

function ExperienceSection() {
  const [dbExperiences, setDbExperiences] = useState(() => sortTimelineItems(organizationalExperience));
  const [dbAchievements, setDbAchievements] = useState(() => sortTimelineItems(achievements));

  useEffect(() => {
    async function loadDynamicExpAndAch() {
      try {
        const [expRes, achRes] = await Promise.all([
          supabase
            .from('experiences')
            .select('*')
            .order('created_at', { ascending: false }),
          supabase
            .from('achievements')
            .select('*')
            .order('created_at', { ascending: false })
        ]);

        if (expRes.error) throw expRes.error;
        if (achRes.error) throw achRes.error;

        if (expRes.data && expRes.data.length > 0) {
          const mappedExp = expRes.data.map(item => ({
            date: item.date,
            company: item.company,
            role: item.role,
            isActive: item.is_active,
            created_at: item.created_at,
            id: item.id
          }));
          setDbExperiences(sortTimelineItems(mappedExp));
        }

        if (achRes.data && achRes.data.length > 0) {
          const mappedAch = achRes.data.map(item => ({
            date: item.date,
            company: item.company,
            role: item.role,
            isActive: Boolean(item.is_active || (typeof item.date === 'string' && /present|saat ini|sekarang|aktif/i.test(item.date))),
            created_at: item.created_at,
            id: item.id
          }));
          setDbAchievements(sortTimelineItems(mappedAch));
        }
      } catch (err) {
        console.warn('Could not load dynamic organizational experiences or achievements from Supabase.', err);
      }
    }
    loadDynamicExpAndAch();
  }, []);

  return (
    <section id="experience" className="py-20 w-full scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Kolom Kiri: Organizational */}
        <div className="relative border-l-2 border-gray-200 pl-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-500 mb-8">
            Organizational
          </h3>
          <div className="space-y-10">
            {dbExperiences.map((exp, index) => {
              const isFastwork = (exp.company || '').toLowerCase().includes('fastwork');
              if (isFastwork) {
                return (
                  <FastworkTimelineItem
                    key={exp.id || index}
                    date={exp.date}
                    institution={exp.company}
                    position={exp.role}
                    isActive={exp.isActive}
                  />
                );
              }
              return <TimelineItem key={exp.id || index} {...exp} />;
            })}
          </div>
        </div>

        {/* Kolom Kanan: Achievements */}
        <div className="relative border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-500">
              Achievements
            </h3>
            <div className='flex flex-row gap-2 items-center border border-gray-300 px-2 py-1 rounded'>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <p className='text-xs text-gray-500'> Still Active / LFT
              </p>
            </div>
          </div>
          <div className="space-y-10">
            {dbAchievements.map((exp, index) => {
              const isFastwork = (exp.company || '').toLowerCase().includes('fastwork');
              if (isFastwork) {
                return (
                  <FastworkTimelineItem
                    key={exp.id || index}
                    date={exp.date}
                    institution={exp.company}
                    position={exp.role}
                    isActive={exp.isActive}
                  />
                );
              }
              return <TimelineItem key={exp.id || index} {...exp} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;