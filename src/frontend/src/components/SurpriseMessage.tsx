import { Heart, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface SurpriseMessageProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SurpriseMessage({ open, onOpenChange }: SurpriseMessageProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950 border-2 border-white dark:border-rose-300">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-700 via-pink-700 to-red-700 dark:from-rose-300 dark:via-pink-300 dark:to-red-300 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-rose-600 fill-rose-600 dark:text-rose-400 dark:fill-rose-400" />
            Surprise!
            <Sparkles className="w-8 h-8 text-rose-600 fill-rose-600 dark:text-rose-400 dark:fill-rose-400" />
          </DialogTitle>
          <DialogDescription className="sr-only">
            A special Valentine's Day message
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-6">
          {/* Decorative heart */}
          <div className="flex justify-center">
            <div className="relative animate-pulse">
              <img
                src="/assets/generated/large-heart-glow-red-bg.dim_200x200.png"
                alt="Glowing heart"
                className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Surprise message */}
          <div className="text-center space-y-4 px-4">
            <p className="text-xl md:text-2xl font-semibold text-rose-900 dark:text-rose-100">
              You are loved beyond measure! 💕
            </p>
            
            <p className="text-base md:text-lg text-rose-800 dark:text-rose-200 leading-relaxed">
              Every moment with you is a treasure. Your smile lights up the darkest days,
              and your love makes everything beautiful.
            </p>
            
            <p className="text-lg md:text-xl font-medium text-rose-900 dark:text-rose-100 italic">
              "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope."
            </p>
            
            <p className="text-sm text-rose-700 dark:text-rose-300">
              — Maya Angelou
            </p>

            {/* Decorative hearts */}
            <div className="flex justify-center gap-2 pt-4">
              <Heart className="w-6 h-6 text-rose-600 fill-rose-600 dark:text-rose-400 dark:fill-rose-400 animate-pulse" />
              <Heart className="w-6 h-6 text-pink-600 fill-pink-600 dark:text-pink-400 dark:fill-pink-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-6 h-6 text-red-600 fill-red-600 dark:text-red-400 dark:fill-red-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
