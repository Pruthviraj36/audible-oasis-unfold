import { useState } from "react";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Heart,
  BookOpen,
  Settings,
  Share,
  List,
  X,
  Minus,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlayerModal = ({ isOpen, onClose }: PlayerModalProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState([35]);
  const [volume, setVolume] = useState([80]);
  const [playbackSpeed, setPlaybackSpeed] = useState("1x");
  const [sleepTimer, setSleepTimer] = useState("off");
  const [isFavorited, setIsFavorited] = useState(false);

  // Mock current book data
  const currentBook = {
    title: "The Midnight Library",
    author: "Matt Haig",
    narrator: "Carey Mulligan",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=center",
    duration: "8h 32m",
    currentTime: "2h 58m",
    totalSeconds: 30720,
    currentSeconds: 10680,
    chapter: "Chapter 12: The Library of Regrets",
    genre: "Fiction"
  };

  const chapters = [
    { id: 1, title: "The Prologue", duration: "3:45", isActive: false },
    { id: 2, title: "The Library", duration: "12:30", isActive: false },
    { id: 3, title: "Between Life and Death", duration: "8:15", isActive: false },
    { id: 12, title: "The Library of Regrets", duration: "15:22", isActive: true },
    { id: 13, title: "The Midnight Library", duration: "11:08", isActive: false },
    { id: 14, title: "Beyond the Library", duration: "9:33", isActive: false }
  ];

  const handleSeek = (value: number[]) => {
    setProgress(value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-3">
              <img
                src={currentBook.cover}
                alt={currentBook.title}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-semibold">{currentBook.title}</h3>
                <p className="text-sm text-muted-foreground">{currentBook.author}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Main Player */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-6">
              {/* Book Cover */}
              <div className="w-64 h-64 mb-6">
                <img
                  src={currentBook.cover}
                  alt={currentBook.title}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>

              {/* Book Info */}
              <div className="text-center space-y-2 mb-6">
                <h2 className="text-2xl font-bold">{currentBook.title}</h2>
                <p className="text-lg text-muted-foreground">{currentBook.author}</p>
                <p className="text-sm text-muted-foreground">Narrated by {currentBook.narrator}</p>
                <Badge variant="secondary">{currentBook.genre}</Badge>
              </div>

              {/* Current Chapter */}
              <div className="text-center mb-4">
                <p className="text-sm font-medium">{currentBook.chapter}</p>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-md space-y-2">
                <Slider
                  value={progress}
                  onValueChange={handleSeek}
                  max={100}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{currentBook.currentTime}</span>
                  <span>{currentBook.duration}</span>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <SkipBack className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="premium"
                  size="icon"
                  className="h-16 w-16"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                </Button>
                
                <Button variant="ghost" size="icon">
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>

              {/* Secondary Controls */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium min-w-[3rem] text-center">15s</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFavorited(!isFavorited)}
                >
                  <Heart className={`h-5 w-5 ${isFavorited ? "fill-current text-red-500" : ""}`} />
                </Button>

                <Button variant="ghost" size="icon">
                  <Share className="h-5 w-5" />
                </Button>
              </div>

              {/* Volume & Speed Controls */}
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-4 w-4 text-muted-foreground" />
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={1}
                    className="w-24"
                  />
                </div>

                <Select value={playbackSpeed} onValueChange={setPlaybackSpeed}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.5x">0.5x</SelectItem>
                    <SelectItem value="0.75x">0.75x</SelectItem>
                    <SelectItem value="1x">1x</SelectItem>
                    <SelectItem value="1.25x">1.25x</SelectItem>
                    <SelectItem value="1.5x">1.5x</SelectItem>
                    <SelectItem value="2x">2x</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sleepTimer} onValueChange={setSleepTimer}>
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Sleep" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="off">Off</SelectItem>
                    <SelectItem value="15">15 min</SelectItem>
                    <SelectItem value="30">30 min</SelectItem>
                    <SelectItem value="45">45 min</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sidebar - Chapters */}
            <div className="w-80 border-l border-border overflow-hidden flex flex-col">
              <div className="p-4 border-b">
                <h3 className="font-semibold flex items-center">
                  <List className="h-4 w-4 mr-2" />
                  Chapters
                </h3>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="p-2 space-y-1">
                  {chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        chapter.isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{chapter.title}</p>
                          <p className={`text-xs ${
                            chapter.isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}>
                            {chapter.duration}
                          </p>
                        </div>
                        {chapter.isActive && (
                          <div className="ml-2 flex-shrink-0">
                            <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};