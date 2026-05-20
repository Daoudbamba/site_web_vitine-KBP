import Image from "next/image";

interface LogoProps {
  variant?: "color" | "white";
  className?: string;
}

export function Logo({ variant = "color", className = "" }: LogoProps) {
  const isWhite = variant === "white";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo-kbp.png"
        alt="KBP Distribution"
        width={160}
        height={80}
        className={`h-16 w-auto object-contain ${isWhite ? "brightness-0 invert" : ""}`}
        priority
      />
    </span>
  );
}
