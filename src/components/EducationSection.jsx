import React, { useState, useEffect } from 'react';
import educationData from '../data/educationData';
import { supabase } from '../lib/supabaseClient';
import { sortTimelineItems } from '../lib/dateUtils';
import BrawijayaTimelineItem from './BrawijayaTimelineItem';

const TimelineItem = ({ date, institution, degree, isActive = false }) => (
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
        {institution}
      </h3>
      <p className="text-sm text-zinc-600 mt-0.5">{degree}</p>
    </div>
  </div>
);

function EducationSection() {
  const [dbEducation, setDbEducation] = useState(() => sortTimelineItems(educationData));

  useEffect(() => {
    async function loadDynamicEducation() {
      try {
        const { data, error } = await supabase
          .from('education')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;

        if (data && data.length > 0) {
          const mappedEdu = data.map(item => ({
            date: item.date,
            institution: item.institution,
            degree: item.degree,
            isActive: item.is_active,
            created_at: item.created_at,
            id: item.id
          }));
          setDbEducation(sortTimelineItems(mappedEdu));
        }
      } catch (err) {
        console.warn('Could not load dynamic education from Supabase. Falling back to local static array.', err);
      }
    }
    loadDynamicEducation();
  }, []);

  return (
    <section id="education" className="py-20 w-full scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Education</h2>
      <div className="relative border-l-2 border-gray-200 pl-4">
        <div className="space-y-10">
          {dbEducation.map((item, index) => {
            const isBrawijaya = (item.institution || '').toLowerCase().includes('brawijaya');
            if (isBrawijaya) {
              return (
                <BrawijayaTimelineItem
                  key={item.id || index}
                  date={item.date}
                  institution={item.institution}
                  degree={item.degree}
                  isActive={item.isActive}
                />
              );
            }
            return <TimelineItem key={item.id || index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
