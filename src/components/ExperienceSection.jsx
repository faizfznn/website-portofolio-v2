import React, { useState, useEffect } from 'react';
import organizationalExperience from '../data/organizationalExperience';
import achievements from '../data/achievementsExperience';
import { supabase } from '../lib/supabaseClient';

const TimelineItem = ({ date, company, role, isActive = false }) => (
  <div className="relative pl-8 group">
    <div className="absolute left-0 top-2">
      {isActive ? (
        <span className="relative flex h-2.5 w-2.5 -translate-x-px -translate-y-px">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2A9F47]"></span>
        </span>
      ) : (
        <div className="w-2 h-2 bg-gray-400 rounded-full transition-transform duration-300 group-hover:scale-125"></div>
      )}
    </div>

    {/* --- Konten Teks --- */}
    <div className="transition-opacity duration-300 group-hover:opacity-70">
      <p className="text-sm md:text-base text-gray-500">{date}</p>
      <h3 className="text-lg md:text-xl font-bold text-black">{company}</h3>
      <p className="text-base md:text-lg text-gray-600">{role}</p>
    </div>
  </div>
);

// --- Komponen Utama Experience ---
function ExperienceSection() {
  const [dbExperiences, setDbExperiences] = useState(organizationalExperience);
  const [dbAchievements, setDbAchievements] = useState(achievements);

  useEffect(() => {
    async function loadDynamicExpAndAch() {
      try {
        const { data: expData, error: expErr } = await supabase
          .from('experiences')
          .select('*')
          .order('created_at', { ascending: false });
        if (expErr) throw expErr;

        if (expData && expData.length > 0) {
          const mappedExp = expData.map(item => ({
            date: item.date,
            company: item.company,
            role: item.role,
            isActive: item.is_active
          }));
          setDbExperiences(mappedExp);
        }
      } catch (err) {
        console.warn('Could not load dynamic organizational experiences from Supabase. Falling back to local static array.', err);
      }

      try {
        const { data: achData, error: achErr } = await supabase
          .from('achievements')
          .select('*')
          .order('created_at', { ascending: false });
        if (achErr) throw achErr;

        if (achData && achData.length > 0) {
          const mappedAch = achData.map(item => ({
            date: item.date,
            company: item.company,
            role: item.role
          }));
          setDbAchievements(mappedAch);
        }
      } catch (err) {
        console.warn('Could not load dynamic achievements from Supabase. Falling back to local static array.', err);
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
            {dbExperiences.map((exp, index) => (
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Achievements */}
        <div className="relative border-l-2 border-gray-200 pl-4">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-500">
              Achievements
            </h3>
            <span className="text-xs text-gray-500 border border-gray-300 px-2 py-1 rounded">
              <span className="inline-block h-2 w-2 rounded-full bg-[#2A9F47] mr-1.5"></span>
              Still Active / LFT
            </span>
          </div>
          <div className="space-y-10">
            {dbAchievements.map((exp, index) => (
              <TimelineItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;