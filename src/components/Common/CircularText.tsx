interface CircularTextProps {
  className?: string;
  text?: string;
  fontSize?: number;
}

export default function CircularText({
  className,
  text = '• Web Developer • Engineer • Innovator ',
  fontSize = 32,
}: CircularTextProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img" // Accessibility: decorative SVG
      aria-hidden="true" // Hide from screen readers
    >
      <defs>
        <path
          id="circlePath"
          d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
        />
      </defs>
      <text
        fontSize={fontSize}
        fontWeight="bold"
        letterSpacing="3"
        className="fill-current text-gray-600 dark:text-gray-300" // Tailwind for dark mode
      >
        <textPath href="#circlePath">{text}</textPath>
      </text>
    </svg>
  );
}