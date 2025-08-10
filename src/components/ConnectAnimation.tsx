'use client';


import Lottie from "lottie-react";
import contactAnimation from "@/animations/connect.json"

export default function ContactAnimation() {
  return (
    <div className="w-64 h-64">
      <Lottie 
        animationData={contactAnimation} 
        loop={true} 
      />
    </div>
  );
}
