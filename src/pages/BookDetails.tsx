import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Play, 
  Pause, 
  Heart, 
  Share, 
  Star, 
  Clock, 
  Download,
  ArrowLeft,
  BookOpen,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AudiobookCard } from "@/components/AudiobookCard";
import { sampleAudiobooks } from "@/data/audiobooks";

export const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "reviews">("overview");

  const book = sampleAudiobooks.find(b => b.id === id);
  const similarBooks = sampleAudiobooks
    .filter(b => b.id !== id && b.genre === book?.genre)
    .slice(0, 4);

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Book not found</h1>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  const reviews = [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      comment: "Absolutely captivating! The narrator brought the story to life beautifully.",
      date: "2 days ago"
    },
    {
      id: 2,
      user: "Michael R.",
      rating: 4,
      comment: "Great story, though the pacing felt a bit slow in the middle sections.",
      date: "1 week ago"
    },
    {
      id: 3,
      user: "Emma L.",
      rating: 5,
      comment: "One of the best audiobooks I've listened to this year. Highly recommended!",
      date: "2 weeks ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Book Cover */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="aspect-[3/4] mb-4">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div className="space-y-3">
              <Button 
                className="w-full h-12" 
                variant="premium"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                {isPlaying ? "Pause Preview" : "Play Preview"}
              </Button>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsFavorited(!isFavorited)}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isFavorited ? "fill-current text-red-500" : ""}`} />
                  {isFavorited ? "Favorited" : "Favorite"}
                </Button>
                <Button variant="outline" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
              
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>

        {/* Book Info */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(book.rating)
                            ? "fill-accent-gold text-accent-gold"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{book.rating}</span>
                  <span className="text-muted-foreground ml-1">(2,847 reviews)</span>
                </div>
                
                <Badge variant="secondary">{book.genre}</Badge>
                
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {book.duration}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Headphones className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Narrated by {book.narrator}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Released {new Date(book.releaseDate).getFullYear()}</span>
                </div>
              </div>

              {book.price && (
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-2xl font-bold">${book.price}</div>
                  {book.isSubscriptionIncluded && (
                    <Badge variant="premium">Included with subscription</Badge>
                  )}
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="border-b border-border">
              <div className="flex space-x-8">
                <button
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "overview"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                <button
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "reviews"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews (2,847)
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === "overview" ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">About this audiobook</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                      eu fugiat nulla pariatur.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-semibold mb-2">About the Author</h3>
                    <p className="text-muted-foreground">
                      {book.author} is a renowned author known for their compelling storytelling 
                      and deep character development. Their works have been translated into multiple 
                      languages and have received critical acclaim worldwide.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{review.user}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating
                                      ? "fill-accent-gold text-accent-gold"
                                      : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Similar Books */}
      {similarBooks.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">More books like this</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarBooks.map((book) => (
              <AudiobookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};