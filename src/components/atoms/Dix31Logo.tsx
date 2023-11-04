export function Dix31Logo() {
  return (
    <svg>
      <defs>
        <style>
          {`
        .chevronGauche{fill:none;stroke:#000;stroke-linejoin:bevel;stroke-width:6px;}
        .slash{fill:none;stroke:#000;stroke-linejoin:bevel;stroke-width:6px;}
        .chevronDroite{fill:none;stroke:#000;stroke-linejoin:bevel;stroke-width:6px;}
        .pointePinceau{stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:3px;}
        .pinceau-1{fill:none;stroke-linejoin:bevel;stroke-width:15px;}.pinceau-1,.pinceau-2{stroke:#000;}.pinceau-2{stroke-linecap:square;stroke-miterlimit:10;stroke-width:3px;}
        `}
        </style>
      </defs>
      <polyline
        className='chevronGauche logoTest'
        points='21.35 2.48 1.49 16 21.35 27.31'
      />
      <polyline
        className='chevronGauche logoTest'
        points='21.35 2.48 1.49 16 21.35 27.31'
      />
      <line className='slash logoTest' x1='31.3' y1='0' x2='26.78' y2='35' />
      <polyline
        className='chevronDroite logoTest'
        points='1.69 2.48 21.55 16 1.69 27.31'
      />
      <polyline
        className='chevronDroite logoTest'
        points='1.69 2.48 21.55 16 1.69 27.31'
      />
      <polygon
        className='pointePinceau logoTest'
        points='1.5 2.35 13.91 8.15 1.5 16.84 1.5 2.35'
      />
      <line
        className='pinceau-1 logoTest'
        x1='25.95'
        y1='3.02'
        x2='10.91'
        y2='37.18'
      />
      <polygon
        className='pinceau-2 logoTest'
        points='1.5 39.44 13.91 45.23 1.5 53.92 1.5 39.44'
      />
    </svg>
  );
}
