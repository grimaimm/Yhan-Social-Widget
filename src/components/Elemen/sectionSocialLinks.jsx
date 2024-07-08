import React from 'react';
import ButtonArrow from './buttonArrow';

const SectionSocialLinks = ({ link  }) => {
  return (
    <div className={link.classGrid}>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        <div className="widgetBlack flex flex-col justify-between gap-4 p-4 rounded-2xl transition-all duration-500 hover:scale-95">
          <div className="flex justify-between">
            <div className="widgetBlack-logo flex items-center">
              <div dangerouslySetInnerHTML={{ __html: link.svgIcon }}></div>
            </div>
            <div className="flex items-start">
              <ButtonArrow />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-neutral-50 text-[16px] font-bold">{link.linkTitle}</span>
              <span className="font-light text-[12px] text-neutral-300">{link.username}</span>
            </div>
            {link.buttonFollow && (
              <div className="items-end flex">
                <button className="btn flex btn-follow-widgetBlack px-2 py-1 rounded-full">{link.buttonFollow}</button>
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

export default SectionSocialLinks;