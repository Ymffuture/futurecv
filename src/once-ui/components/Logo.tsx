"use client";

import React from "react";
import Link from "next/link";

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: "xs" | "s" | "m" | "l" | "xl";
  wordmark?: boolean;
  icon?: boolean;
  href?: string;
  iconSrc?: string;
  wordmarkSrc?: string;
  style?: React.CSSProperties;
}

const sizeMap: Record<string, number> = {
  xs: 20,
  s: 28,
  m: 36,
  l: 48,
  xl: 60,
};

export default function Logo({
  size = "m",
  icon = true,
  wordmark = true,
  href,
  iconSrc,
  wordmarkSrc,
  style,
  ...props
}: LogoProps) {
  const dimension = sizeMap[size];

  const baseStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: `${dimension / 2}px`,
    color: "#0F172A",
    transition: "transform 0.3s ease, color 0.3s ease",
    cursor: href ? "pointer" : "default",
    ...style,
  };

  const iconStyle: React.CSSProperties = {
    height: `${dimension}px`,
    width: `${dimension}px`,
    borderRadius: "12px",
    background: "linear-gradient(135deg, #2563EB, #9333EA)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: `${dimension / 2.5}px`,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const textGradientStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, #2563EB, #9333EA)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
  };

  const content = (
    <div
      style={baseStyle}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
        (e.currentTarget as HTMLElement).style.color = "#1E3A8A";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.color = "#0F172A";
      }}
    >
      {icon &&
        (iconSrc ? (
          <img
            src={iconSrc}
            alt="Logo Icon"
            style={{
              height: `${dimension}px`,
              width: `${dimension}px`,
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        ) : (
          <div style={iconStyle}>F</div> // Default fallback icon (you can replace with logo initials)
        ))}

      {wordmark &&
        (wordmarkSrc ? (
          <img
            src={wordmarkSrc}
            alt="Logo Wordmark"
            style={{ height: `${dimension / 1.5}px`, width: "auto" }}
          />
        ) : (
          <span style={textGradientStyle}>Future</span> // default wordmark text
        ))}
    </div>
  );

  return href ? (
    <Link href={href} {...props} style={{ textDecoration: "none" }}>
      {content}
    </Link>
  ) : (
    content
  );
}

