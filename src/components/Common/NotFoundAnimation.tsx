'use client';


import Lottie from "lottie-react";
import NotFoundAnimation from "@/animations/not-found.json"

export default function ContactAnimation() {
  return (
    <div className="w-64 h-64">
      <Lottie 
        animationData={NotFoundAnimation} 
        loop={true} 
      />
    </div>
  );
}
