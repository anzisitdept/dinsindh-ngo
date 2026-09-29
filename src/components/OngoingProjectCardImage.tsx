"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const ROTATE_MS = 4500;

export default function OngoingProjectCardImage({
  images,
  alt,
  district,
  priority,
}: {
  images: string[];
  alt: string;
  district: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-52 w-full bg-[#152238] overflow-hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={priority && i === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/70 via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-amber-300">
        <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
        <span className="truncate">{district}</span>
      </div>

      {images.length > 1 && (
        <div className="absolute top-3 right-3 flex items-center gap-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-amber-400" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
