import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Kn = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-80.109 0h682.67v512h-682.67z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(75.102) scale(.9375)">
    <path d="M-107.85.239H629.8v511.29h-737.65z"/>
    <path d="M-108.24.239l.86 368.58L466.6-.001l-574.84.238z"/>
    <path d="M630.69 511.53l-1.347-383.25-578.98 383.54 580.33-.283z"/>
    <path d="M-107.87 396.61l.49 115.39 125.25-.16L629.63 101.7l-.69-100.32L505.18.239l-613.05 396.37z"/>
    <path d="M380.455 156.62l-9.913-42.245 33.354 27.075 38.014-24.636-17.437 41.311 33.404 27.021-44.132-1.541-17.37 41.333-9.835-42.265-44.138-1.48zM105.21 335.53l-9.913-42.245 33.354 27.075 38.014-24.636-17.437 41.311 33.404 27.021-44.132-1.541-17.37 41.333-9.835-42.265-44.138-1.48z"/>
  </g>

  </SvgIcon>
);
Kn = pure(Kn);
Kn.displayName = 'Kn';

export default Kn;