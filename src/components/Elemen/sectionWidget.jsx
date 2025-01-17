import React from 'react';

const SectionWidget = () => (
  <section className="space-y-4">
    <div
      className="flex items-center gap-2 px-2 flip-in-hor-bottom"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 256 256"
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M196.28,116.28l-80,80a40,40,0,0,1-56.56-56.56l80-80a40,40,0,0,1,56.56,56.56Z"
          opacity="0.2"
        />
        <path d="M190.63,65.37a32,32,0,0,0-45.19-.06L133.79,77.52a8,8,0,0,1-11.58-11l11.72-12.29a1.59,1.59,0,0,1,.13-.13,48,48,0,0,1,67.88,67.88,1.59,1.59,0,0,1-.13.13l-12.29,11.72a8,8,0,0,1-11-11.58l12.21-11.65A32,32,0,0,0,190.63,65.37ZM122.21,178.48l-11.65,12.21a32,32,0,0,1-45.25-45.25l12.21-11.65a8,8,0,0,0-11-11.58L54.19,133.93a1.59,1.59,0,0,0-.13.13,48,48,0,0,0,67.88,67.88,1.59,1.59,0,0,0,.13-.13l11.72-12.29a8,8,0,1,0-11.58-11ZM208,152H184a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM48,104H72a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm112,72a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V184A8,8,0,0,0,160,176ZM96,80a8,8,0,0,0,8-8V48a8,8,0,0,0-16,0V72A8,8,0,0,0,96,80Z" />
      </svg>
      <h2 className="font-medium text-neutral-600">Social Widget</h2>
    </div>
  </section>
);

export default SectionWidget;