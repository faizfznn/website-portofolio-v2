import React from 'react';


const BentoGrid = ({ items = [] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, idx) => {
        const rowSpan = item.rowSpan ? `row-span-${item.rowSpan}` : '';
        const colSpan = item.colSpan ? `col-span-${item.colSpan}` : '';
        return (
          <div
            key={idx}
            className={`overflow-hidden rounded-xl shadow-sm bg-gray-100 dark:bg-gray-800 hover:scale-[1.02] transform transition-all ${rowSpan} ${colSpan}`}
          >
            <img
              src={item.image}
              alt={item.alt || ''}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BentoGrid;
