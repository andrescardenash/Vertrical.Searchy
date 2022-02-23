import React from 'react';
import Styles from './Section.module.css';

const Section = ({ imgSrc, title }) => {
  return (
    <div>
      <h5>
        {imgSrc && (
          <span>
            <img alt="imgSection" className={Styles.imgSection} src={imgSrc} />
          </span>
        )}
        {title}
      </h5>
      <hr className={Styles.hrSection} />
    </div>
  );
};

export default Section;
