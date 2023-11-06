// import { localFont } from "./fonts";

// const myFont = localFont({
//   src: "../fonts/AlongSanss2-Regular.woff2",
// });

import { Lexend } from "next/font/google";

const inter = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export function Dix31Logo() {
  return (
    <svg width='100%' height='100%' viewBox='0 0 500 500'>
      <defs>
        <style>
          {`
        .chevronGauche{fill:none;stroke:#000;stroke-linejoin:bevel;stroke-width:6px; opacity: 0}
        .slash{fill:none;stroke:#000;stroke-linejoin:bevel;stroke-width:6px; opacity: 0}
        .chevronDroite{fill:none;stroke:#000;stroke-linejoin:bevel;stroke-width:6px; opacity: 0}
        .pointePinceau{stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:3px; opacity: 0}
        .pinceau{fill:none;stroke-linejoin:bevel;stroke-width:15px;opacity:0}
        .pinceauManche{fill:none;stroke-linejoin:bevel;stroke-width:15px;}
        .pinceauManche,.pinceauBrosse{stroke:#000; opacity: 0}
        .pinceauBrosse{stroke-linecap:square;stroke-miterlimit:10;stroke-width:3px;}
        .letters {font-size:4em;font-family:${inter.style.fontFamily}; opacity: 0}
        .ligneBas, .ligneGauche, .ligneHaut, .ligneDroite {stroke-width:5px; stroke:#000; opacity: 0}
        .rectangle{fill:#bababa;opacity:.43; opacity: 0}
        .sousTitre{font-family:${inter.style.fontFamily};font-size:0.6em; letter-spacing:-.03em; opacity: 0}
        `}
        </style>
      </defs>
      <polyline
        className='chevronGauche'
        points='21.35 2.48 1.49 16 21.35 27.31'
      />
      <polyline
        className='chevronGauche'
        points='21.35 2.48 1.49 16 21.35 27.31'
      />
      <line className='slash' x1='31.3' y1='0' x2='26.78' y2='35' />
      <polyline
        className='chevronDroite'
        points='1.69 2.48 21.55 16 1.69 27.31'
      />
      <polyline
        className='chevronDroite'
        points='1.69 2.48 21.55 16 1.69 27.31'
      />
      <g className='pinceau'>
        <line
          className='pinceauManche'
          x1='25.95'
          y1='3.02'
          x2='10.91'
          y2='37.18'
        />
        <polygon
          className='pinceauBrosse'
          points='1.5 39.44 13.91 45.23 1.5 53.92 1.5 39.44'
        />
      </g>

      <text className='letters'>DIX31</text>

      <line className='ligneBas' x1='170' y1='293' x2='50' y2='293' />

      <line className='ligneGauche' x1='52' y1='295 ' x2='52' y2='78' />

      <line className='ligneHaut' x1='50' y1='80' x2='400' y2='80' />

      <line className='ligneDroite' x1='398' y1='78 ' x2='398' y2='185' />

      <text className='sousTitre' x='203' y='292'>
        DÉVELOPPEUR INDÉPENDANT XAVIER
      </text>
      <rect
        className='rectangle'
        width='193.66'
        height='15.83'
        x='193'
        y='280'
      />
    </svg>
  );
}
