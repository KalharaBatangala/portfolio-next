'use client';

import Lottie from "lottie-react";
import NotFoundAnimation from "@/animations/not-found.json"
import { palette, hexToUnitRgb } from "@/theme/theme";

// The animation file has the old orange (#FF7300) baked in. Swap it for the theme's
// accent at load time, so the JSON file never needs editing when the theme changes.
const BAKED_IN_ACCENT = hexToUnitRgb('#FF7300');
const themeAccent = hexToUnitRgb(palette.gold[500]);

const isBakedInAccent = (value: unknown): value is number[] =>
  Array.isArray(value) &&
  value.length >= 3 &&
  value.slice(0, 3).every((v, i) => typeof v === 'number' && Math.abs(v - BAKED_IN_ACCENT[i]) < 0.01);

function recolor(node: unknown): unknown {
  if (Array.isArray(node)) return node.map(recolor);
  if (node && typeof node === 'object') {
    return Object.fromEntries(
      Object.entries(node).map(([key, value]) => {
        // Lottie colours live in { c: { k: [r, g, b, a] } }
        if (key === 'k' && isBakedInAccent(value)) return [key, [...themeAccent, ...value.slice(3)]];
        return [key, recolor(value)];
      }),
    );
  }
  return node;
}

const themedAnimation = recolor(NotFoundAnimation);

export default function ContactAnimation() {
  return (
    <div className="w-64 h-64">
      <Lottie
        animationData={themedAnimation}
        loop={true}
      />
    </div>
  );
}
