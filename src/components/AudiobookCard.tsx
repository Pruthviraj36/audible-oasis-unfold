import { useState } from "react";
import { Play, Clock, Star, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AudiobookCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    narrator: string;
    cover: string;
    duration: string;
    rating: number;
    price?: number;
    isSubscriptionIncluded?: boolean;
    genre: string;
    description: string;
  };
  variant?: "grid" | "list";
}

export const AudiobookCard = ({ book, variant = "grid" }: AudiobookCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  if (variant === "list") {
    return (
      <div className="audio-card p-4 rounded-xl flex items-center space-x-4 hover:scale-[1.02] transition-all">
        <div className="relative">
          <img
            src={book.cover}
            alt={book.title}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <Button
            variant="play"
            size="icon"
            className="absolute inset-0 m-auto h-8 w-8 opacity-0 hover:opacity-100 transition-opacity"
          >
            <Play className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold truncate">{book.title}</h3>
          <p className="text-sm text-muted-foreground truncate">
            By {book.author} • Narrated by {book.narrator}
          </p>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-accent-gold text-accent-gold" />
              <span className="text-xs">{book.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">•</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{book.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {book.isSubscriptionIncluded ? (
            <Badge variant="secondary">Included</Badge>
          ) : (
            <span className="text-sm font-semibold">${book.price}</span>
          )}
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="audio-card p-4 rounded-xl hover:scale-105 transition-all cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-3">
        <img
          src={book.cover}
          alt={book.title}
          className="w-full aspect-square rounded-lg object-cover"
        />
        
        {/* Play button overlay */}
        <div className={`absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
          <Button variant="play" size="icon" className="h-16 w-16">
            <Play className="h-6 w-6" />
          </Button>
        </div>

        {/* Favorite button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8 bg-black/50 hover:bg-black/70"
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : "text-white"}`} />
        </Button>

        {/* Genre badge */}
        <Badge className="absolute bottom-2 left-2 bg-black/50 text-white">
          {book.genre}
        </Badge>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-sm leading-tight line-clamp-2">
          {book.title}
        </h3>
        
        <p className="text-xs text-muted-foreground truncate">
          By {book.author}
        </p>
        
        <p className="text-xs text-muted-foreground truncate">
          Narrated by {book.narrator}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-accent-gold text-accent-gold" />
              <span className="text-xs">{book.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">•</span>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{book.duration}</span>
            </div>
          </div>
          
          {book.isSubscriptionIncluded ? (
            <Badge variant="secondary" className="text-xs">Included</Badge>
          ) : (
            <span className="text-sm font-semibold">${book.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};