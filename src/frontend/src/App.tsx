import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingHearts from '@/components/FloatingHearts';
import SurpriseMessage from '@/components/SurpriseMessage';

export default function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[oklch(0.55_0.25_15)] dark:bg-[oklch(0.35_0.20_15)]">
      {/* Floating hearts background animation */}
      <FloatingHearts />

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* Decorative heart icon */}
          <div className="flex justify-center animate-pulse">
            <div className="relative">
              <Heart className="w-20 h-20 md:w-24 md:h-24 text-white fill-white drop-shadow-2xl" />
              <div className="absolute inset-0 blur-xl bg-white/40 animate-pulse" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-pink-100 to-rose-100 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Happy Valentine's Day
          </h1>

          {/* Heartfelt message */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-white dark:text-rose-50 font-light leading-relaxed drop-shadow-md">
              Love is not just looking at each other,
              <br />
              it's looking in the same direction together.
            </p>
            
            <p className="text-lg md:text-xl text-rose-50 dark:text-rose-100 italic drop-shadow-md">
              "In all the world, there is no heart for me like yours.
              <br />
              In all the world, there is no love for you like mine."
            </p>
            
            <p className="text-sm md:text-base text-rose-100 dark:text-rose-200 drop-shadow-sm">
              — Maya Angelou
            </p>
          </div>

          {/* Interactive button */}
          <div className="pt-8">
            <Button
              onClick={() => setShowSurprise(true)}
              size="lg"
              className="bg-white hover:bg-rose-50 text-rose-600 hover:text-rose-700 font-semibold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2 fill-rose-600" />
              Click for a Surprise
            </Button>
          </div>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-4 pt-8">
            <img 
              src="/assets/generated/heart-icon-red-bg.dim_64x64.png" 
              alt="Heart decoration"
              className="w-12 h-12 md:w-16 md:h-16 animate-bounce opacity-90"
              style={{ animationDelay: '0s', animationDuration: '2s' }}
            />
            <img 
              src="/assets/generated/heart-icon-red-bg.dim_64x64.png" 
              alt="Heart decoration"
              className="w-12 h-12 md:w-16 md:h-16 animate-bounce opacity-90"
              style={{ animationDelay: '0.3s', animationDuration: '2s' }}
            />
            <img 
              src="/assets/generated/heart-icon-red-bg.dim_64x64.png" 
              alt="Heart decoration"
              className="w-12 h-12 md:w-16 md:h-16 animate-bounce opacity-90"
              style={{ animationDelay: '0.6s', animationDuration: '2s' }}
            />
          </div>
        </div>
      </main>

      {/* Surprise message dialog */}
      <SurpriseMessage open={showSurprise} onOpenChange={setShowSurprise} />

      {/* Footer */}
      <footer className="relative z-10 pb-6 text-center">
        <p className="text-sm text-rose-100 dark:text-rose-200">
          © 2025. Built with <Heart className="inline w-4 h-4 fill-white text-white" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-white dark:hover:text-rose-50 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
