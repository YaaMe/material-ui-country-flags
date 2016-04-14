import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ml = (props) => (
  <SvgIcon {...props}>
    
  <g fill-rule="evenodd" fillOpacity="1">
    <path d="M425.75 0H640v480H425.75z"/>
    <path d="M0 0h212.88v480H0z"/>
    <path d="M212.88 0h213.95v480H212.88z"/>
  </g>

  </SvgIcon>
);
Ml = pure(Ml);
Ml.displayName = 'Ml';

export default Ml;