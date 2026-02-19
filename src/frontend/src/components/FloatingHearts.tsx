import { useEffect, useState } from 'react';

interface HeartParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    // Generate random floating hearts
    const heartParticles: HeartParticle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 20 + Math.random() * 40,
    }));
    setHearts(heartParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float opacity-30 dark:opacity-20"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <img
            src="/assets/generated/large-heart-glow-red-bg.dim_200x200.png"
            alt=""
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
            className="drop-shadow-lg"
          />
        </div>
      ))}
    </div>
  );
}
