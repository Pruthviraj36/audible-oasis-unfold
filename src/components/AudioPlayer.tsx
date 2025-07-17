import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { PlayerModal } from "@/components/PlayerModal";

export const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState([25]);
  const [volume, setVolume] = useState([80]);
  const [showPlayerModal, setShowPlayerModal] = useState(false);

  // Mock current book data
  const currentBook = {
    title: "The Midnight Library",
    author: "Matt Haig",
    narrator: "Carey Mulligan",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=100&h=100&fit=crop&crop=center",
    duration: "8h 32m",
    currentTime: "2h 15m"
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 audio-player border-t border-border p-4 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between space-x-4">
            {/* Book Info */}
            <div 
              className="flex items-center space-x-3 min-w-0 flex-1 cursor-pointer hover:bg-muted/50 rounded-lg p-2 -m-2 transition-colors"
              onClick={() => setShowPlayerModal(true)}
            >
              <img
                src={currentBook.cover}
                alt={currentBook.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="min-w-0 flex-1">
                <h4 className="font-semibold text-sm truncate">{currentBook.title}</h4>
                <p className="text-xs text-muted-foreground truncate">
                  {currentBook.author} • {currentBook.narrator}
                </p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <SkipBack className="h-4 w-4" />
              </Button>
              
              <Button
                variant="play"
                size="icon"
                className="h-12 w-12"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>

            {/* Progress & Volume */}
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md">
              <span className="text-xs text-muted-foreground min-w-fit">
                {currentBook.currentTime}
              </span>
              <Slider
                value={progress}
                onValueChange={setProgress}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground min-w-fit">
                {currentBook.duration}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
              
              <div className="hidden lg:flex items-center space-x-2">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="w-20"
                />
              </div>
            </div>
          </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden mt-3 flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">
            {currentBook.currentTime}
          </span>
          <Slider
            value={progress}
            onValueChange={setProgress}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground">
            {currentBook.duration}
          </span>
        </div>
        </div>
      </div>

      <PlayerModal isOpen={showPlayerModal} onClose={() => setShowPlayerModal(false)} />
    </>
  );
};