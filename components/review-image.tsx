"use client";

import { useState } from "react";
import Image from "next/image";

export function ReviewImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        onError={() => setError(true)}
      />
    </div>
  );
}
