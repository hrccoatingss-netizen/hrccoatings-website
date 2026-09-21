"use client";

import { useEffect, useRef } from "react";

interface ProjectVideoProps {
  src: string;
  poster: string;
  title: string;
  className?: string;
}

/**
 * Muted, looping job-site clip that only loads and plays while it is on screen.
 * preload="none" keeps it off the critical path; the poster shows until then.
 */
export default function ProjectVideo({ src, poster, title, className = "" }: ProjectVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      controls
      aria-label={title}
      title={title}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
