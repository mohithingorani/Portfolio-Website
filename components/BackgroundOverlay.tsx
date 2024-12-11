// components/BackgroundOverlay.tsx
export default function BackgroundOverlay() {
    return (
      <svg
        className="absolute inset-0 -z-20 w-full h-full"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bubbles */}
        <circle cx="100" cy="100" r="40" fill="rgba(255, 255, 255, 0.2)" />
        <circle cx="300" cy="150" r="60" fill="rgba(255, 255, 255, 0.15)" />
        <circle cx="600" cy="100" r="50" fill="rgba(255, 255, 255, 0.25)" />
        <circle cx="900" cy="200" r="70" fill="rgba(255, 255, 255, 0.2)" />
        <circle cx="1200" cy="150" r="55" fill="rgba(255, 255, 255, 0.3)" />
      </svg>
    );
  }
  