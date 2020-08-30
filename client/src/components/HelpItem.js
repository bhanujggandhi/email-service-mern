import React from 'react';

import '../styles/HelpItem.scss';

const HelpItem = ({ number, title, subtitle }) => {
  return (
    <li className='process__item'>
      <span className='process__number'>{number}</span>
      <span className='process__title'>{title}</span>
      <span className='process__subtitle'>{subtitle}</span>
    </li>
  );
};

export default HelpItem;
