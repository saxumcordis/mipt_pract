import React from 'react';

export const Tooltip = (props) => {
  const { text, link } = props;


  /**
   * onclick => onClick
   * class => className
   * onfocus => onFocus
   * style => style
        min-width => minWidth
        min-height => minHeight
   */

  /** MUST RETURN ONLY ONE PARENT ELEMENT */

  return <React.Fragment key={123}>
    <span style={{ minWidth: 200, minHeight: '50px', backgroundColor: 'pink' }}>{text}</span><a href={link}>{link}</a>
  </React.Fragment>

}
