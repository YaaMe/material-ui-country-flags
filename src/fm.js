import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Fm = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-81.333 0h682.67v512h-682.67z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(76.25) scale(.94)" stroke-width="1pt">
    <path d="M-252 0H772v512H-252z"/>
    <path d="M259.787 122.985l-32.44 22.214 12.433-35.9-32.475-22.177 40.122.038 12.366-35.92 12.366 35.92 40.12-.026L279.8 109.3l12.43 35.905m-32.443 244.847l-32.44-22.214 12.433 35.9-32.475 22.176 40.122-.038 12.366 35.92 12.366-35.92 40.12.027-32.48-22.166 12.43-35.905m-188.384-92.465l-24.53 30.73 1.395-37.967-37.54-11.713 38.38-11.695 1.324-37.966 22.328 30.735 38.36-11.755-24.58 30.694 22.383 30.7m274.28-11.763l24.53 30.73-1.395-37.967 37.54-11.713-38.38-11.695-1.324-37.966-22.328 30.735-38.36-11.755 24.58 30.694-22.383 30.7"/>
  </g>

  </SvgIcon>
);
Fm = pure(Fm);
Fm.displayName = 'Fm';

export default Fm;