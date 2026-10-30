export default function Ship() {
  return (
    <svg viewBox="0 0 430 330" className="ship-svg" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hullG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7a4426" />
          <stop offset="1" stopColor="#3b1d0e" />
        </linearGradient>
        <linearGradient id="sailG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f7ff" />
          <stop offset="1" stopColor="#b7c6e6" />
        </linearGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#ffd98a" stopOpacity=".95" />
          <stop offset="1" stopColor="#ffd98a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* rigging */}
      <g stroke="#3b1d0e" strokeOpacity=".55" strokeWidth="1.4" fill="none">
        <path d="M205 40 L40 205" />
        <path d="M205 40 L392 205" />
        <path d="M300 84 L205 44" />
        <path d="M112 100 L205 44" />
        <path d="M392 200 L300 84" />
      </g>

      {/* masts */}
      <g fill="#3b1d0e">
        <rect x="201.500" y="38" width="7" height="170" rx="2" />
        <rect x="296.500" y="82" width="7" height="126" rx="2" />
        <rect x="108.500" y="100" width="7" height="108" rx="2" />
        <rect x="170" y="62" width="70" height="5" rx="2" />
        <rect x="270" y="100" width="64" height="5" rx="2" />
        <rect x="90" y="116" width="50" height="5" rx="2" />
      </g>

      {/* sails */}
      <g fill="url(#sailG)" stroke="#d9c79c" strokeWidth="1.2">
        <path className="sail" d="M212 67 C 272 76 292 118 212 150 Z" />
        <path className="sail s2" d="M212 158 C 268 168 282 198 212 204 Z" />
        <path className="sail s3" d="M307 105 C 352 112 362 138 307 166 Z" />
        <path className="sail s4" d="M119 121 C 160 128 166 154 119 176 Z" />
        <path className="sail s2" d="M418 190 L378 128 L378 200 Z" />
      </g>

      {/* flag */}
      <path d="M205 40 L205 8" stroke="#3b1d0e" strokeWidth="3" />
      <g className="flag">
        <path d="M205 6 L286 12 L276 31 L286 52 L205 56 Z" fill="#0b1420" stroke="#f6c453" strokeWidth="1.4" strokeLinejoin="round" />
        {/* original skull and crossbones */}
        <g stroke="#fff" strokeWidth="3" strokeLinecap="round">
          <line x1="226" y1="38" x2="256" y2="51" />
          <line x1="256" y1="38" x2="226" y2="51" />
        </g>
        <circle cx="241" cy="23" r="10" fill="#fff" />
        <rect x="235" y="28" width="12" height="8" rx="2.500" fill="#fff" />
        <circle cx="237" cy="22" r="2.600" fill="#0b1420" />
        <circle cx="245" cy="22" r="2.600" fill="#0b1420" />
        <path d="M241 25 L239.500 29 L242.500 29 Z" fill="#0b1420" />
      </g>

      {/* hull */}
      <path d="M26 205 L400 205 C 392 252, 350 288, 276 296 L 150 296 C 78 288, 40 254, 26 205 Z" fill="url(#hullG)" />
      <path d="M26 205 L400 205 L396 218 L30 218 Z" fill="#c99a3c" />
      <path d="M44 244 C 90 262 330 262 384 244" stroke="#c99a3c" strokeWidth="3" fill="none" opacity=".8" />
      <g fill="#f6c453">
        <circle cx="96" cy="234" r="5" />
        <circle cx="140" cy="240" r="5" />
        <circle cx="184" cy="243" r="5" />
        <circle cx="228" cy="243" r="5" />
        <circle cx="272" cy="240" r="5" />
        <circle cx="316" cy="234" r="5" />
      </g>
      <rect x="22" y="198" width="384" height="8" rx="3" fill="#2a140a" />
      {/* lanterns */}
      <g className="lantern">
        <circle cx="184" cy="186" r="22" fill="url(#glow)" />
        <circle cx="184" cy="190" r="4" fill="#fff3c4" />
        <circle cx="330" cy="186" r="22" fill="url(#glow)" />
        <circle cx="330" cy="190" r="4" fill="#fff3c4" />
      </g>
      <g className="lantern l2">
        <circle cx="62" cy="186" r="22" fill="url(#glow)" />
        <circle cx="62" cy="190" r="4" fill="#fff3c4" />
        <circle cx="205" cy="40" r="16" fill="url(#glow)" />
      </g>
      {/* bowsprit */}
      <path d="M392 202 L424 186" stroke="#3b1d0e" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
