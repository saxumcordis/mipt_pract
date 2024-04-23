import React from 'react';

export const Button = ({ children, onClick, className, type }) => {
  if (type === 'share') {
    return <button className='button-share' onClick={onClick}>share</button>
  }

  return <button className={className} onClick={onClick}>{children}</button>
}
