// components/Projects/AmbientBackground.tsx
// A slow, living backdrop: soft light drifting over a dot grid.
// Pure CSS (see globals.css), so there is no video to download or break.
export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-900" />
      <div className="ambient-orb ambient-orb--a" />
      <div className="ambient-orb ambient-orb--b" />
      <div className="ambient-orb ambient-orb--c" />
      <div className="ambient-grid absolute inset-0" />
    </div>
  );
}
