import React, { useState, useEffect } from 'react';
import educationData from '../data/educationData';
import { supabase } from '../lib/supabaseClient';

const TimelineItem = ({ date, institution, degree, isActive = false }) => (
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

    <div className="transition-opacity duration-300 group-hover:opacity-70">
      <p className="text-sm md:text-base text-gray-500">{date}</p>
      <h3 className="text-lg md:text-xl font-bold text-black">{institution}</h3>
      <p className="text-base md:text-lg text-gray-600">{degree}</p>
    </div>
  </div>
);

function EducationSection() {
  const [dbEducation, setDbEducation] = useState(educationData);

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
            isActive: item.is_active
          }));
          setDbEducation(mappedEdu);
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
          {dbEducation.map((edu, index) => (
            <TimelineItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;