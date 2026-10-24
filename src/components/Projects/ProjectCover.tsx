// components/Projects/ProjectCover.tsx
// Hand-drawn SVG covers: one consistent visual system for every project,
// so the page never depends on stock photos.
import { useId } from 'react';
import type { ProjectCoverArt } from '@/data/projects';

const C = {
  line: 'rgba(255,255,255,0.78)',
  dim: 'rgba(255,255,255,0.38)',
  faint: 'rgba(255,255,255,0.16)',
  panel: 'rgba(8,8,8,0.55)',
  accent: '#FF7300',
  accentSoft: 'rgba(255,115,0,0.16)',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  serif: 'Georgia, "Times New Roman", serif',
};

// Where the orange glow sits, as a fraction of the cover (x, y)
const glowPosition: Record<ProjectCoverArt, [number, number]> = {
  terminal: [0.2, 0.15],
  mri: [0.65, 0.35],
  coffee: [0.5, 0.85],
  tea: [0.3, 0.25],
  pipeline: [0.75, 0.6],
  scoreboard: [0.5, 0.2],
  cnn: [0.85, 0.5],
  chat: [0.8, 0.65],
  wordmark: [0.5, 0.0],
  ar: [0.5, 0.65],
  fingerprint: [0.5, 0.5],
  pizza: [0.7, 0.3],
  platforms: [0.25, 0.7],
  dashboard: [0.15, 0.2],
  cuda: [0.5, 0.45],
};

const mono = { fontFamily: C.mono } as const;

/* ---------- small shared shapes ---------- */

// A cloud whose base runs from (0, 30) to (40, 30)
const Cloud = ({ transform, stroke }: { transform: string; stroke: string }) => (
  <path
    transform={transform}
    d="M0 30 h40 a12 12 0 0 0 0 -24 a16 16 0 0 0 -30 -6 a12 12 0 0 0 -10 30 z"
    fill="rgba(255,255,255,0.04)"
    stroke={stroke}
    strokeWidth={1.2}
    vectorEffect="non-scaling-stroke"
  />
);

const point = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
};

/* ---------- motifs (viewBox 400 x 250) ---------- */

function Terminal() {
  return (
    <g>
      <rect x={92} y={46} width={216} height={158} rx={12} fill={C.panel} stroke={C.faint} />
      <line x1={92} y1={72} x2={308} y2={72} stroke={C.faint} />
      <circle cx={108} cy={59} r={3.5} fill={C.accent} />
      <circle cx={120} cy={59} r={3.5} fill={C.faint} />
      <circle cx={132} cy={59} r={3.5} fill={C.faint} />
      <text x={200} y={63} textAnchor="middle" fontSize={9} fill={C.dim} style={mono}>
        rhel9 — bash
      </text>
      <g fontSize={11} style={mono}>
        <text x={108} y={98} fill={C.line}>
          <tspan fill={C.accent}>$ </tspan>./user-audit.sh --all
        </text>
        <text x={108} y={118} fill={C.dim}>
          [ok] permissions verified
        </text>
        <text x={108} y={142} fill={C.line}>
          <tspan fill={C.accent}>$ </tspan>bats tests/
        </text>
        <text x={108} y={162} fill={C.dim}>
          ✓ all tests passed
        </text>
        <text x={108} y={186} fill={C.accent}>
          $
        </text>
      </g>
      <rect className="cover-blink" x={120} y={176} width={7} height={13} fill={C.accent} />
    </g>
  );
}

function Mri() {
  const slices = [70, 125, 180];
  return (
    <g fill="none">
      {slices.map((y) => (
        <ellipse key={y} cx={84} cy={y} rx={17} ry={21} stroke={C.faint} />
      ))}
      <ellipse cx={200} cy={125} rx={64} ry={80} stroke={C.dim} />
      <ellipse cx={200} cy={125} rx={53} ry={68} stroke={C.line} strokeWidth={1.2} />
      <path d="M200 60 C196 90 204 160 200 192" stroke={C.faint} />
      <g stroke={C.faint}>
        <path d="M168 84 q14 9 0 20 q-12 9 4 19" />
        <path d="M160 128 q16 6 4 18 q-10 10 8 18" />
        <path d="M232 84 q-14 9 0 20 q12 9 -4 19" />
        <path d="M240 128 q-16 6 -4 18 q10 10 -8 18" />
        <path d="M180 170 q20 8 40 0" />
      </g>
      <line x1={120} y1={140} x2={280} y2={140} stroke={C.accent} strokeOpacity={0.45} />
      <circle cx={226} cy={102} r={11} fill={C.accentSoft} stroke={C.accent} />
      <rect x={208} y={84} width={36} height={36} stroke={C.accent} strokeDasharray="3 3" />
      <path d="M244 84 L272 64 H300" stroke={C.accent} />
      <text x={276} y={59} fontSize={10} fill={C.accent} style={mono}>
        ROI
      </text>
    </g>
  );
}

function Coffee({ id }: { id: string }) {
  const glass = 'M150 70 L250 70 L238 200 Q237 208 229 208 L171 208 Q163 208 162 200 Z';
  const layers = [
    { y: 92, h: 26, fill: 'rgba(240,228,214,0.92)', label: 'foam', ly: 105 },
    { y: 118, h: 42, fill: 'rgba(198,156,114,0.85)', label: 'milk', ly: 139 },
    { y: 160, h: 50, fill: '#3b2416', label: 'espresso', ly: 185 },
  ];
  return (
    <g>
      <defs>
        <clipPath id={`${id}-glass`}>
          <path d={glass} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-glass)`}>
        {layers.map((l) => (
          <rect key={l.label} x={140} y={l.y} width={120} height={l.h} fill={l.fill} />
        ))}
        {[168, 184, 203, 221, 236].map((x, i) => (
          <circle key={x} cx={x} cy={i % 2 ? 100 : 106} r={1.6} fill="#8a5a33" />
        ))}
      </g>
      <path d={glass} fill="none" stroke={C.line} strokeWidth={1.4} />
      <line x1={136} y1={216} x2={264} y2={216} stroke={C.faint} />
      <g fill="none" stroke={C.dim} strokeLinecap="round">
        <path d="M184 60 q-8 -10 0 -20 q8 -10 0 -20" />
        <path d="M200 58 q-8 -10 0 -20 q8 -10 0 -20" />
        <path d="M216 60 q-8 -10 0 -20 q8 -10 0 -20" />
      </g>
      {layers.map((l) => (
        <g key={l.label}>
          <line x1={252} y1={l.ly} x2={286} y2={l.ly} stroke={C.faint} />
          <circle cx={252} cy={l.ly} r={2} fill={C.accent} />
          <text x={292} y={l.ly + 3.5} fontSize={10} fill={C.dim} style={mono}>
            {l.label}
          </text>
        </g>
      ))}
    </g>
  );
}

function Tea() {
  const rows = [0, 1, 2, 3, 4];
  return (
    <g>
      <Cloud transform="translate(70 52) scale(1.1)" stroke={C.dim} />
      <path d="M128 80 C140 80 140 100 148 100" fill="none" stroke={C.accent} strokeDasharray="3 4" />
      <rect x={148} y={28} width={104} height={194} rx={18} fill={C.panel} stroke={C.line} strokeWidth={1.2} />
      <rect x={185} y={36} width={30} height={5} rx={2.5} fill={C.faint} />
      <path d="M166 70 C166 62 174 56 182 56 C182 64 176 71 166 70 Z" fill={C.accent} />
      <path d="M166 70 L177 61" stroke="rgba(0,0,0,0.45)" />
      <text x={190} y={68} fontSize={11} fill={C.line} style={mono}>
        Today
      </text>
      {rows.map((i) => {
        const y = 92 + i * 24;
        return (
          <g key={i}>
            <circle cx={168} cy={y} r={6} fill="none" stroke={C.dim} />
            <rect x={180} y={y - 5} width={38} height={4} rx={2} fill={C.dim} />
            <rect x={180} y={y + 2} width={22} height={3} rx={1.5} fill={C.faint} />
            <rect x={224} y={y - 4} width={16} height={7} rx={3.5} fill={C.accent} opacity={i === 0 ? 1 : 0.45} />
          </g>
        );
      })}
      <circle cx={268} cy={54} r={14} fill="#0c0b0b" stroke={C.accent} />
      <g fill="none" stroke={C.accent} strokeLinecap="round">
        <path d="M261 52 a7 7 0 0 1 13 -2" />
        <path d="M275 56 a7 7 0 0 1 -13 2" />
      </g>
    </g>
  );
}

function Pipeline() {
  const stages = [
    { x: 64, label: 'build' },
    { x: 170, label: 'test' },
    { x: 276, label: 'deploy' },
  ];
  return (
    <g>
      <Cloud transform="translate(166 30) scale(1.6)" stroke={C.line} />
      <text x={200} y={100} textAnchor="middle" fontSize={10} fill={C.dim} style={mono}>
        azure
      </text>
      {stages.map((s, i) => {
        const isLast = i === stages.length - 1;
        return (
          <g key={s.label}>
            <rect
              x={s.x}
              y={150}
              width={60}
              height={34}
              rx={8}
              fill={isLast ? C.accentSoft : C.panel}
              stroke={isLast ? C.accent : C.dim}
            />
            <text x={s.x + 30} y={171} textAnchor="middle" fontSize={11} fill={isLast ? C.accent : C.line} style={mono}>
              {s.label}
            </text>
            {!isLast && (
              <g stroke={C.dim} fill="none">
                <line x1={s.x + 64} y1={167} x2={s.x + 100} y2={167} />
                <path d={`M${s.x + 95} 162 l5 5 l-5 5`} />
              </g>
            )}
          </g>
        );
      })}
      <path d="M306 150 C306 120 260 108 236 92" fill="none" stroke={C.accent} strokeDasharray="3 4" />
      <circle cx={306} cy={150} r={2.5} fill={C.accent} />
      <g stroke={C.faint}>
        <line x1={64} y1={208} x2={336} y2={208} />
        {[64, 132, 200, 268, 336].map((x) => (
          <line key={x} x1={x} y1={204} x2={x} y2={212} />
        ))}
      </g>
    </g>
  );
}

function Scoreboard() {
  const bars = [18, 30, 22, 40, 28, 46];
  return (
    <g>
      <rect x={80} y={48} width={240} height={124} rx={14} fill={C.panel} stroke={C.faint} />
      <rect x={178} y={60} width={44} height={18} rx={9} fill={C.accent} />
      <circle cx={188} cy={69} r={2.5} fill="#fff" className="cover-blink" />
      <text x={205} y={73} textAnchor="middle" fontSize={9} fontWeight={700} fill="#fff" style={mono}>
        LIVE
      </text>
      <g fontSize={10} fill={C.dim} textAnchor="middle" style={mono}>
        <text x={130} y={96}>HOME</text>
        <text x={270} y={96}>AWAY</text>
      </g>
      <g fontSize={46} fontWeight={600} fill={C.line} textAnchor="middle" style={mono}>
        <text x={130} y={148}>24</text>
        <text x={270} y={148}>18</text>
      </g>
      <text x={200} y={144} textAnchor="middle" fontSize={34} fill={C.accent} style={mono}>
        :
      </text>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={128 + i * 26}
          y={226 - h}
          width={14}
          height={h}
          rx={3}
          fill={i === bars.length - 1 ? C.accent : C.faint}
        />
      ))}
    </g>
  );
}

function Cnn() {
  const layers = [
    { x: 116, h: 110, w: 10 },
    { x: 150, h: 88, w: 14 },
    { x: 188, h: 66, w: 18 },
    { x: 228, h: 48, w: 22 },
  ];
  const d = 8; // depth offset for the 3D look
  return (
    <g fill="none">
      <rect x={36} y={85} width={56} height={80} rx={4} stroke={C.line} />
      <circle cx={52} cy={104} r={5} stroke={C.dim} />
      <polyline points="40,158 58,132 70,146 78,138 88,158" stroke={C.dim} />
      <line x1={92} y1={125} x2={116} y2={125} stroke={C.faint} />
      {layers.map((l, i) => {
        const y = 125 - l.h / 2;
        return (
          <g key={l.x}>
            <rect x={l.x + d} y={y - d} width={l.w} height={l.h} stroke={C.faint} />
            <path
              d={`M${l.x} ${y} l${d} ${-d} M${l.x + l.w} ${y} l${d} ${-d} M${l.x + l.w} ${y + l.h} l${d} ${-d}`}
              stroke={C.faint}
            />
            <rect x={l.x} y={y} width={l.w} height={l.h} fill="rgba(255,255,255,0.05)" stroke={C.dim} />
            {i < layers.length - 1 && (
              <line x1={l.x + l.w + d} y1={125} x2={layers[i + 1].x} y2={125} stroke={C.faint} />
            )}
          </g>
        );
      })}
      {[95, 105, 115, 125, 135, 145, 155].map((y) => (
        <circle key={y} cx={276} cy={y} r={2.5} fill={y === 125 ? C.accent : C.dim} stroke="none" />
      ))}
      <line x1={258} y1={125} x2={270} y2={125} stroke={C.faint} />
      <line x1={282} y1={125} x2={296} y2={125} stroke={C.accent} />
      <rect x={296} y={112} width={72} height={26} rx={13} fill={C.accentSoft} stroke={C.accent} />
      <text x={332} y={129} textAnchor="middle" fontSize={11} fill={C.accent} stroke="none" style={mono}>
        breed
      </text>
      <text x={186} y={212} textAnchor="middle" fontSize={10} fill={C.dim} stroke="none" style={mono}>
        VGG16
      </text>
    </g>
  );
}

function Chat() {
  return (
    <g>
      <circle cx={52} cy={84} r={11} fill="none" stroke={C.dim} />
      <rect x={72} y={58} width={160} height={50} rx={16} fill="rgba(255,255,255,0.06)" stroke={C.faint} />
      <rect x={88} y={74} width={110} height={5} rx={2.5} fill={C.dim} />
      <rect x={88} y={86} width={70} height={5} rx={2.5} fill={C.faint} />

      <circle cx={348} cy={150} r={11} fill={C.accentSoft} stroke={C.accent} />
      <rect x={168} y={126} width={160} height={50} rx={16} fill={C.accentSoft} stroke={C.accent} />
      <rect x={184} y={142} width={120} height={5} rx={2.5} fill={C.accent} opacity={0.85} />
      <rect x={184} y={154} width={80} height={5} rx={2.5} fill={C.accent} opacity={0.5} />

      <circle cx={52} cy={206} r={11} fill="none" stroke={C.dim} />
      <rect x={72} y={192} width={58} height={28} rx={14} fill="rgba(255,255,255,0.06)" stroke={C.faint} />
      {[88, 101, 114].map((x, i) => (
        <circle key={x} cx={x} cy={206} r={3} fill={C.line} className="cover-typing" style={{ animationDelay: `${i * 0.18}s` }} />
      ))}
    </g>
  );
}

function Wordmark() {
  return (
    <g>
      <path d="M90 222 V126 a110 110 0 0 1 220 0 V222" fill="none" stroke={C.faint} />
      <path d="M104 222 V128 a96 96 0 0 1 192 0 V222" fill="none" stroke={C.faint} strokeDasharray="1 5" />
      <line x1={180} y1={96} x2={220} y2={96} stroke={C.accent} />
      <text
        x={204}
        y={142}
        textAnchor="middle"
        fontSize={28}
        letterSpacing={8}
        fill="rgba(255,255,255,0.92)"
        style={{ fontFamily: C.serif }}
      >
        VELLORA
      </text>
      <text x={200} y={168} textAnchor="middle" fontSize={8.5} letterSpacing={4} fill={C.dim} style={mono}>
        CONSIDERED LUXURY
      </text>
      <path d="M200 186 l4 4 l-4 4 l-4 -4 z" fill={C.accent} />
    </g>
  );
}

function Ar({ id }: { id: string }) {
  // A floor grid in perspective, vanishing towards (200, 90)
  const vx = 200;
  const vy = 90;
  const top = 118;
  const t = (250 - top) / (250 - vy);
  const rays = Array.from({ length: 13 }, (_, i) => -100 + i * 50);
  const rows = [top, 128, 142, 162, 190, 228];
  const bracket = 12;
  const box = { x1: 150, y1: 104, x2: 250, y2: 208 };
  return (
    <g>
      <defs>
        <linearGradient id={`${id}-floor`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity={0} />
          <stop offset="1" stopColor="#fff" stopOpacity={1} />
        </linearGradient>
        <mask id={`${id}-fade`}>
          <rect x={0} y={top} width={400} height={250 - top} fill={`url(#${id}-floor)`} />
        </mask>
      </defs>
      <g stroke={C.faint} mask={`url(#${id}-fade)`}>
        {rays.map((xb) => (
          <line key={xb} x1={xb} y1={250} x2={xb + (vx - xb) * t} y2={top} />
        ))}
        {rows.map((y) => (
          <line key={y} x1={0} y1={y} x2={400} y2={y} />
        ))}
      </g>
      <ellipse cx={200} cy={200} rx={52} ry={9} fill="rgba(0,0,0,0.45)" />
      <path d="M200 118 L240 136 L200 154 L160 136 Z" fill="rgba(255,255,255,0.14)" stroke={C.line} />
      <path d="M160 136 L200 154 L200 196 L160 178 Z" fill="rgba(255,255,255,0.07)" stroke={C.line} />
      <path d="M200 154 L240 136 L240 178 L200 196 Z" fill="rgba(255,255,255,0.03)" stroke={C.line} />
      <g fill="none" stroke={C.accent} strokeWidth={1.6} strokeLinecap="round">
        <path d={`M${box.x1} ${box.y1 + bracket} V${box.y1} H${box.x1 + bracket}`} />
        <path d={`M${box.x2 - bracket} ${box.y1} H${box.x2} V${box.y1 + bracket}`} />
        <path d={`M${box.x1} ${box.y2 - bracket} V${box.y2} H${box.x1 + bracket}`} />
        <path d={`M${box.x2 - bracket} ${box.y2} H${box.x2} V${box.y2 - bracket}`} />
      </g>
      <g stroke={C.accent} strokeOpacity={0.7}>
        <line x1={200} y1={222} x2={200} y2={232} />
        <line x1={195} y1={227} x2={205} y2={227} />
      </g>
    </g>
  );
}

function Fingerprint() {
  const rings = [
    { r: 12, dash: '70 12 10 8', rot: 20, accent: true },
    { r: 24, dash: '48 10 30 12', rot: -40, accent: true },
    { r: 36, dash: '30 8 44 18', rot: 70, accent: false },
    { r: 48, dash: '56 14 18 12', rot: 10, accent: false },
    { r: 60, dash: '38 10 36 16', rot: -80, accent: false },
    { r: 72, dash: '26 18 40 16', rot: 140, accent: false },
  ];
  return (
    <g fill="none" strokeLinecap="round">
      {rings.map((ring) => (
        <circle
          key={ring.r}
          cx={200}
          cy={125}
          r={ring.r}
          pathLength={100}
          strokeDasharray={ring.dash}
          stroke={ring.accent ? C.accent : C.dim}
          strokeWidth={1.6}
          transform={`rotate(${ring.rot} 200 125)`}
        />
      ))}
      <circle cx={200} cy={125} r={2.5} fill={C.accent} stroke="none" />
      <g transform="translate(300 176)">
        <rect x={0} y={10} width={24} height={20} rx={4} fill={C.panel} stroke={C.line} />
        <path d="M5 10 V6 a7 7 0 0 1 14 0 V10" stroke={C.line} />
        <circle cx={12} cy={19} r={2} fill={C.accent} stroke="none" />
      </g>
    </g>
  );
}

function Pizza() {
  const cx = 200;
  const cy = 128;
  const r = 70;
  // The slice between -67.5° and -22.5° is pulled out of the pie
  const [p1x, p1y] = point(cx, cy, r, -67.5);
  const [p2x, p2y] = point(cx, cy, r, -22.5);
  const off = 14 / Math.SQRT2;
  const cuts = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5];
  const toppings = [
    [176, 100],
    [160, 140],
    [190, 168],
    [228, 150],
    [210, 128],
    [174, 124],
    [236, 118],
  ];
  return (
    <g>
      <path
        d={`M${cx} ${cy} L${p2x} ${p2y} A${r} ${r} 0 1 1 ${p1x} ${p1y} Z`}
        fill="rgba(255,255,255,0.04)"
        stroke={C.line}
        strokeWidth={1.3}
      />
      <circle cx={cx} cy={cy} r={58} fill="none" stroke={C.faint} strokeDasharray="2 4" />
      <g stroke={C.faint}>
        {cuts.map((deg) => {
          const [x, y] = point(cx, cy, r, deg);
          return <line key={deg} x1={cx} y1={cy} x2={x} y2={y} />;
        })}
      </g>
      {toppings.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={5} fill="none" stroke={C.dim} />
      ))}
      <g transform={`translate(${off} ${-off})`}>
        <path
          d={`M${cx} ${cy} L${p1x} ${p1y} A${r} ${r} 0 0 1 ${p2x} ${p2y} Z`}
          fill={C.accentSoft}
          stroke={C.accent}
          strokeWidth={1.4}
        />
        <circle cx={238} cy={88} r={4.5} fill="none" stroke={C.accent} />
        <circle cx={222} cy={104} r={3.5} fill="none" stroke={C.accent} />
      </g>
    </g>
  );
}

function Platforms() {
  // An isometric tile with its top face centred on (cx, cy)
  const tile = (cx: number, cy: number, w: number, key: string) => {
    const h = w / 2;
    const depth = 12;
    return (
      <g key={key}>
        <path
          d={`M${cx - w} ${cy} L${cx} ${cy + h} L${cx} ${cy + h + depth} L${cx - w} ${cy + depth} Z`}
          fill="rgba(255,255,255,0.07)"
          stroke={C.dim}
        />
        <path
          d={`M${cx} ${cy + h} L${cx + w} ${cy} L${cx + w} ${cy + depth} L${cx} ${cy + h + depth} Z`}
          fill="rgba(255,255,255,0.03)"
          stroke={C.dim}
        />
        <path
          d={`M${cx} ${cy - h} L${cx + w} ${cy} L${cx} ${cy + h} L${cx - w} ${cy} Z`}
          fill="rgba(255,255,255,0.12)"
          stroke={C.line}
        />
      </g>
    );
  };
  return (
    <g>
      {tile(110, 172, 40, 'a')}
      {tile(200, 132, 34, 'b')}
      {tile(292, 156, 38, 'c')}
      {tile(262, 82, 26, 'd')}
      <path d="M110 156 Q150 70 196 116" fill="none" stroke={C.accent} strokeDasharray="3 4" />
      <circle cx={110} cy={158} r={8} fill={C.accent} />
      <path d="M292 132 l7 7 l-7 7 l-7 -7 z" fill="none" stroke={C.accent} strokeWidth={1.4} />
      <path d="M262 62 l5 5 l-5 5 l-5 -5 z" fill={C.accent} />
    </g>
  );
}

function Dashboard() {
  const cols = 10;
  const rows = 5;
  return (
    <g>
      <rect x={60} y={38} width={280} height={176} rx={12} fill={C.panel} stroke={C.faint} />
      <line x1={110} y1={38} x2={110} y2={214} stroke={C.faint} />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={72} y={62 + i * 18} width={26} height={4} rx={2} fill={i === 2 ? C.accent : C.faint} />
      ))}
      <text x={124} y={60} fontSize={9.5} fill={C.dim} style={mono}>
        seat allocation
      </text>
      {Array.from({ length: rows * cols }, (_, n) => {
        const r = Math.floor(n / cols);
        const c = n % cols;
        const taken = (r * 3 + c * 7) % 5 < 2;
        return (
          <rect
            key={n}
            x={126 + c * 14}
            y={72 + r * 14}
            width={9}
            height={9}
            rx={2}
            fill={taken ? C.accent : 'none'}
            fillOpacity={taken ? 0.85 : 0}
            stroke={taken ? 'none' : C.faint}
          />
        );
      })}
      {[34, 52, 26].map((h, i) => (
        <rect key={i} x={286 + i * 14} y={142 - h} width={9} height={h} rx={2} fill={i === 1 ? C.accent : C.dim} />
      ))}
      <polyline
        points="126,198 156,186 186,192 216,176 246,182 276,166 306,172 326,160"
        fill="none"
        stroke={C.accent}
        strokeWidth={1.4}
      />
      <line x1={126} y1={204} x2={326} y2={204} stroke={C.faint} />
    </g>
  );
}

function Cuda() {
  const blocksX = 4;
  const blocksY = 2;
  const threadsX = 6;
  const threadsY = 4;
  const cell = 9;
  const gap = 14;
  const bw = threadsX * cell;
  const bh = threadsY * cell;
  const x0 = (400 - (blocksX * bw + (blocksX - 1) * gap)) / 2;
  const y0 = 62;
  const cells = [];
  for (let by = 0; by < blocksY; by++) {
    for (let bx = 0; bx < blocksX; bx++) {
      const ox = x0 + bx * (bw + gap);
      const oy = y0 + by * (bh + gap);
      cells.push(
        <rect key={`b${bx}${by}`} x={ox - 4} y={oy - 4} width={bw + 6} height={bh + 6} rx={4} fill="none" stroke={C.faint} />,
      );
      for (let ty = 0; ty < threadsY; ty++) {
        for (let tx = 0; tx < threadsX; tx++) {
          const gx = bx * threadsX + tx;
          const gy = by * threadsY + ty;
          const lit = (gx + gy * 2) % 7 === 0;
          cells.push(
            <rect
              key={`t${gx}-${gy}`}
              x={ox + tx * cell}
              y={oy + ty * cell}
              width={cell - 3}
              height={cell - 3}
              rx={1}
              fill={lit ? C.accent : 'rgba(255,255,255,0.13)'}
            />,
          );
        }
      }
    }
  }
  return (
    <g>
      {cells}
      <text x={200} y={196} textAnchor="middle" fontSize={11} fill={C.dim} style={mono}>
        kernel<tspan fill={C.accent}>{'<<<'}</tspan>blocks, threads<tspan fill={C.accent}>{'>>>'}</tspan>()
      </text>
    </g>
  );
}

/* ---------- cover ---------- */

export default function ProjectCover({ art, className = '' }: { art: ProjectCoverArt; className?: string }) {
  const id = useId().replace(/:/g, '');
  const [gx, gy] = glowPosition[art];

  const motif = (() => {
    switch (art) {
      case 'terminal':
        return <Terminal />;
      case 'mri':
        return <Mri />;
      case 'coffee':
        return <Coffee id={id} />;
      case 'tea':
        return <Tea />;
      case 'pipeline':
        return <Pipeline />;
      case 'scoreboard':
        return <Scoreboard />;
      case 'cnn':
        return <Cnn />;
      case 'chat':
        return <Chat />;
      case 'wordmark':
        return <Wordmark />;
      case 'ar':
        return <Ar id={id} />;
      case 'fingerprint':
        return <Fingerprint />;
      case 'pizza':
        return <Pizza />;
      case 'platforms':
        return <Platforms />;
      case 'dashboard':
        return <Dashboard />;
      case 'cuda':
        return <Cuda />;
    }
  })();

  return (
    <svg
      viewBox="0 0 400 250"
      preserveAspectRatio="xMidYMid slice"
      className={`block h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f1c1d" />
          <stop offset="1" stopColor="#0b0a0a" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx={gx} cy={gy} r="0.75">
          <stop offset="0" stopColor="#FF7300" stopOpacity={0.32} />
          <stop offset="0.45" stopColor="#FF7300" stopOpacity={0.06} />
          <stop offset="1" stopColor="#FF7300" stopOpacity={0} />
        </radialGradient>
        <pattern id={`${id}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="rgba(255,255,255,0.09)" />
        </pattern>
      </defs>
      <rect width="400" height="250" fill={`url(#${id}-bg)`} />
      <rect width="400" height="250" fill={`url(#${id}-glow)`} />
      <rect width="400" height="250" fill={`url(#${id}-dots)`} />
      <g className="cover-motif">{motif}</g>
    </svg>
  );
}
