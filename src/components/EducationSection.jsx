
const educationData = [
  {
    date: "2023 - 2027",
    institution: "Universitas Brawijaya",
    degree: "Bachelor's Degree, Computer Science",
    isActive: true,
  },
  {
    date: "2020 - 2023",
    institution: "SMAN 91 Jakarta",
    degree: "High School Diploma",
  },
];

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
      <p className="text-sm text-gray-500">{date}</p>
      <h3 className="text-lg font-semibold text-black">{institution}</h3>
      <p className="text-base text-gray-600">{degree}</p>
    </div>
  </div>
);

function EducationSection() {
  return (
    <section id="education" className="py-20 w-full scroll-mt-24">
      <h2 className="text-4xl font-bold mb-12">Education</h2>
      <div className="relative border-l-2 border-gray-200 pl-4">
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <TimelineItem key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;