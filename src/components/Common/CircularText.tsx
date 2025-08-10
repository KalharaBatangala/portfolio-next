import React from 'react';

interface CircularTextProps {
  className?: string;
  text?: string;
  textColor?: string;
  fontSize?: number;
}

export default function CircularText({
  className,
  text = '• Web Developer • Engineer • Innovator ',
  textColor = 'black',
  fontSize = 32,
}: CircularTextProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <path
          id="circlePath"
          d="M150,150 m-120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
        />
      </defs>
      <text
        fontSize={fontSize}
        fontWeight="bold"
        letterSpacing="3"
        fill={textColor}
      >
        <textPath href="#circlePath">{text}</textPath>
      </text>
    </svg>
  );
}
