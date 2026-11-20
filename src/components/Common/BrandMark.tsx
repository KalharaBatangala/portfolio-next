// The falcon logo, coloured by the theme. The image is used as a mask (see .brand-mark
// in globals.css), so its colour comes from the background class: gold by default.
type BrandMarkProps = {
  className?: string;
  label?: string;
};

export default function BrandMark({ className = 'h-12 w-12 bg-gold-metallic', label = 'Kalhara Batangala Logo' }: BrandMarkProps) {
  return <span role="img" aria-label={label} className={`brand-mark inline-block ${className}`} />;
}
