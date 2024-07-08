import React from 'react';

const CoverPicture = ({ src }) => (
  <div
    className="w-full h-44 md:h-48 md:rounded-t-xl bg-cover puff-in-hor"
    style={{
        backgroundImage: `url(${src}), url(${src})`,
        backgroundPosition: "center 5%"
    }}
  />
);

export default CoverPicture;