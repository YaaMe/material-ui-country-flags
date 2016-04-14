import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Ag = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-79.698 0h682.67v512h-682.67z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" fill-rule="evenodd" transform="translate(74.717) scale(.9375)">
    <path d="M-120 0h763.27v511.49H-120z"/>
    <path d="M-118.31.617h760.88v216.09h-760.88z"/>
    <path d="M21.3 203.23h505.01v113.82H21.3z"/>
    <path d="M642.75 1.753v510.25H262.03L642.75 1.753z"/>
    <path d="M-118.69 1.753v510.25h380.72L-118.69 1.753z"/>
    <path d="M440.37 203.34l-76.31-19.363L428.98 135l-79.726 11.39 41.003-69.475-70.616 41.003 12.53-80.867-47.837 63.783L264.97 26.8l-21.64 76.31-47.837-64.92 13.667 83.145-70.615-43.282 41.003 69.476-77.45-12.53 63.783 47.838-79.727 20.5h354.22z"/>
  </g>

  </SvgIcon>
);
Ag = pure(Ag);
Ag.displayName = 'Ag';

export default Ag;