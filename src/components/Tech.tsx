import React from 'react';
import { BallCanvas } from './canvas';
import SectionWrapper from './SectionWrapper';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-14 h-14 md:w-28 md:h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
