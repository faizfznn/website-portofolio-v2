import React, { useState, useEffect } from 'react';
import workData from '../data/workData';
import { supabase } from '../lib/supabaseClient';
import { sortTimelineItems } from '../lib/dateUtils';
import FastworkTimelineItem from './FastworkTimelineItem';

const TimelineItem = ({ date, institution, position, isActive = false }) => (
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
      <p className="text-sm text-zinc-600 mt-0.5">{position}</p>
    </div>
  </div>
);

function WorkSection() {
  const [dbWork, setDbWork] = useState(() => sortTimelineItems(workData));

  useEffect(() => {
    async function loadDynamicWork() {
      try {
        const { data, error } = await supabase
          .from('work')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;

        if (data && data.length > 0) {
          const mappedWork = data.map(item => ({
            date: item.date,
            institution: item.institution,
            position: item.position,
            isActive: item.is_active,
            created_at: item.created_at,
            id: item.id
          }));
          setDbWork(sortTimelineItems(mappedWork));
        }
      } catch (err) {
        console.warn('Could not load dynamic work from Supabase. Falling back to local static array.', err);
      }
    }
    loadDynamicWork();
  }, []);

  return (
    <section id="work" className="py-20 w-full scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Work</h2>
      <div className="relative border-l-2 border-gray-200 pl-4">
        <div className="space-y-10">
          {dbWork.map((item, index) => {
            const isFastwork = (item.institution || '').toLowerCase().includes('fastwork');
            if (isFastwork) {
              return (
                <FastworkTimelineItem
                  key={item.id || index}
                  date={item.date}
                  institution={item.institution}
                  position={item.position}
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

export default WorkSection;

