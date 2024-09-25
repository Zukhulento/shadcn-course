"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Page() {
  const [progress, setProgress] = useState(13);

  // Modifica el valor del progreso a un número aleatorio
  const modificarProgress = () => {
    setProgress(Math.floor(Math.random() * 100));
  };
  // Incrementar el valor de progreso cada 100 ms
  const incrementProgress = () => {
    setProgress((prev) => {
      if (prev >= 100) return 0;
      return prev + 1;
    });
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   modificarProgress();
    // }, 3000);
    const interval = setInterval(() => {
      incrementProgress();
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Progress value={progress} indicatorColor={cn({
        "bg-red-500": progress < 50,
        "bg-yellow-500": progress >= 50 && progress < 80,
        "bg-green-500": progress >= 80,
      })} />
      <span>{progress}% </span>
    </>
  );
}
